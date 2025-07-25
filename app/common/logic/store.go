package logic

import (
	"archive/zip"
	"context"
	"fmt"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/compose"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/donknap/dpanel/common/service/exec"
	"github.com/donknap/dpanel/common/service/notice"
	"github.com/donknap/dpanel/common/service/storage"
	"github.com/donknap/dpanel/common/types/define"
	"gopkg.in/yaml.v3"
	"io"
	"io/fs"
	"log/slog"
	"net/http"
	"os"
	exec2 "os/exec"
	"path/filepath"
	"strings"
	"time"
)

type StoreLogoFileSystem struct {
	fs.FS
}

func (self StoreLogoFileSystem) Open(name string) (fs.File, error) {
	return os.Open(filepath.Join(storage.Local{}.GetStorePath(), name))
}

type Store struct {
}

func (self Store) SyncByGit(path, gitUrl string) error {
	if _, err := exec2.LookPath("git"); err != nil {
		return function.ErrorMessage(define.ErrorMessageSystemStoreNotFoundGit)
	}
	// 先创建一个临时目录，下载完成后再同步数据，否则失败时原先的数据会被删除
	tempDownloadPath, _ := storage.Local{}.CreateTempDir("")
	defer func() {
		_ = os.RemoveAll(tempDownloadPath)
	}()
	slog.Debug("store git download", "path", tempDownloadPath)

	ctx, _ := context.WithTimeout(context.Background(), time.Second*60*5)
	cmd, err := exec.New(
		exec.WithCommandName("git"),
		exec.WithArgs("clone", "--depth", "1",
			gitUrl, tempDownloadPath),
		exec.WithCtx(ctx),
	)
	if err != nil {
		return err
	}
	out, err := cmd.Run()
	if err != nil {
		if function.ErrorHasKeyword(err, "fatal: early EOF", "致命错误：过早的文件结束符") {
			_ = notice.Message{}.Info(".gitPullEarlyEOF", "url", gitUrl)
		}
		return err
	}
	_, err = io.Copy(os.Stdout, out)
	if err != nil {
		return err
	}
	err = os.RemoveAll(path)
	if err != nil {
		return err
	}
	err = os.CopyFS(path, os.DirFS(tempDownloadPath))
	if err != nil {
		return err
	}
	return nil
}

func (self Store) SyncByZip(path, zipUrl string, root string) error {
	zipTempFile, _ := storage.Local{}.CreateTempFile("")
	defer func() {
		_ = zipTempFile.Close()
		_ = os.RemoveAll(zipTempFile.Name())
	}()

	response, err := http.Get(zipUrl)
	if err != nil {
		return err
	}
	defer func() {
		_ = response.Body.Close()
	}()
	if response.StatusCode != http.StatusOK {
		return function.ErrorMessage(define.ErrorMessageSystemStoreDownloadFailed, "url", zipUrl, "error", response.Status)
	}
	_, err = io.Copy(zipTempFile, response.Body)
	if err != nil {
		return err
	}
	zipArchive, err := zip.OpenReader(zipTempFile.Name())
	if err != nil {
		return err
	}
	defer func() {
		_ = zipArchive.Close()
	}()
	for _, file := range zipArchive.File {
		if file.FileInfo().IsDir() {
			continue
		}
		if strings.HasPrefix(file.Name, "__MACOSX") {
			continue
		}
		targetFilePath := filepath.Join(path, file.Name)
		if root != "" {
			if before, after, exists := strings.Cut(file.Name, root); exists {
				if before != "" {
					targetFilePath = filepath.Join(path, root, after)
				}
			} else {
				continue
			}
		}
		err = os.MkdirAll(filepath.Dir(targetFilePath), os.ModePerm)
		if err != nil {
			return err
		}
		targetFile, err := os.OpenFile(targetFilePath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, file.Mode())
		if err != nil {
			return err
		}
		sourceFile, _ := file.Open()
		_, _ = io.Copy(targetFile, sourceFile)
	}
	return nil
}

func (self Store) SyncByJson(path, jsonUrl string) error {
	file, err := os.OpenFile(filepath.Join(path, "template.json"), os.O_CREATE|os.O_RDWR|os.O_TRUNC, 0666)
	defer func() {
		_ = file.Close()
	}()

	response, err := http.Get(jsonUrl)
	if err != nil {
		return err
	}
	defer func() {
		_ = response.Body.Close()
	}()

	if response.StatusCode != http.StatusOK {
		return function.ErrorMessage(define.ErrorMessageSystemStoreDownloadFailed, "url", jsonUrl, "error", response.Status)
	}
	_, err = io.Copy(file, response.Body)
	if err != nil {
		return err
	}
	return nil
}

// 1panel 需要创建 1panel-network 网络
func (self Store) GetAppByOnePanel(storePath string) ([]accessor.StoreAppItem, error) {
	if !filepath.IsAbs(storePath) {
		storePath = filepath.Join(storage.Local{}.GetStorePath(), storePath, "apps")
	}
	result := make([]accessor.StoreAppItem, 0)

	storeItem := accessor.StoreAppItem{
		Version:  make(map[string]accessor.StoreAppVersionItem),
		Contents: make(map[string]string),
	}

	err := filepath.Walk(storePath, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			return nil
		}
		relPath, _ := filepath.Rel(storePath, path)
		segments := strings.Split(filepath.Clean(relPath), string(filepath.Separator))
		if len(segments) == 1 {
			return nil
		}
		if storeItem.Name == "" {
			storeItem.Name = segments[0]
		}

		if segments[0] != storeItem.Name {
			result = append(result, storeItem)

			storeItem = accessor.StoreAppItem{
				Name:     segments[0],
				Version:  make(map[string]accessor.StoreAppVersionItem),
				Contents: make(map[string]string),
			}
		}

		storeVersionItem := accessor.StoreAppVersionItem{
			Script:      &accessor.StoreAppVersionScriptItem{},
			Environment: make([]docker.EnvItem, 0),
		}

		if len(segments) >= 2 {
			if _, ok := storeItem.Version[segments[1]]; ok {
				storeVersionItem = storeItem.Version[segments[1]]
			}
			defer func() {
				if storeVersionItem.Name != "" ||
					len(storeVersionItem.Environment) > 0 ||
					storeVersionItem.Script.Install != "" ||
					storeVersionItem.Script.Upgrade != "" ||
					storeVersionItem.Script.Uninstall != "" {
					storeItem.Version[segments[1]] = storeVersionItem
				}
			}()
		}

		if strings.HasSuffix(relPath, "data.yml") {
			content, err := os.ReadFile(path)
			if err != nil {
				return err
			}
			yamlData := new(function.YamlGetter)
			err = yaml.Unmarshal(content, &yamlData)
			if err != nil {
				return err
			}

			// 应用介绍信息 data.yaml
			if len(segments) == 2 {
				storeItem.Description = yamlData.GetString("additionalProperties.shortDescZh")
				storeItem.Descriptions = yamlData.GetStringMapString("additionalProperties.description")
				storeItem.Tag = yamlData.GetStringSlice("additionalProperties.tags")
				storeItem.Website = yamlData.GetString("additionalProperties.website")
				storeItem.Title = yamlData.GetString("additionalProperties.name")
			}

			// 版本配置信息一个 data.yaml 为一个版本
			if len(segments) == 3 {
				fields := yamlData.GetSliceStringMapString("additionalProperties.formFields")
				env := make([]docker.EnvItem, 0)
				env = append(env, docker.EnvItem{
					Name:  "CONTAINER_NAME",
					Label: "",
					Value: compose.ContainerDefaultName,
				})
				for index, field := range fields {
					envItem := docker.EnvItem{
						Label:  field["labelZh"],
						Labels: yamlData.GetStringMapString(fmt.Sprintf("additionalProperties.formFields.%d.label", index)),
						Name:   field["envKey"],
						Value:  field["default"],
						Rule: &docker.ValueRuleItem{
							Kind:   0,
							Option: make([]docker.ValueItem, 0),
						},
					}
					envItem.Rule = self.ParseSettingField(field, func(item *docker.ValueRuleItem) {
						if (item.Kind&docker.EnvValueTypeSelect) != 0 || (item.Kind&docker.EnvValueTypeSelectMultiple) != 0 {
							item.Option = function.PluckArrayWalk(
								yamlData.GetSliceStringMapString(fmt.Sprintf("additionalProperties.formFields.%d.values", index)),
								func(i map[string]string) (docker.ValueItem, bool) {
									return docker.ValueItem{
										Name:  i["label"],
										Value: i["value"],
									}, true
								},
							)
						}
					})
					env = append(env, envItem)
				}
				storeVersionItem.Environment = env
			}
		}

		if strings.HasSuffix(relPath, "/scripts/install.sh") {
			storeVersionItem.Script.Install = relPath
		}
		if strings.HasSuffix(relPath, "/scripts/uninstall.sh") {
			storeVersionItem.Script.Uninstall = relPath
		}
		if strings.HasSuffix(relPath, "/scripts/upgrade.sh") {
			storeVersionItem.Script.Upgrade = relPath
		}

		if strings.HasSuffix(relPath, "docker-compose.yml") {
			versionPath, _ := filepath.Rel(filepath.Dir(filepath.Dir(storePath)), path)
			storeVersionItem.ComposeFile = versionPath
			storeVersionItem.Name = segments[1]
		}

		r := time.Now().Unix()
		if strings.HasSuffix(relPath, "logo.png") {
			logoPath, _ := filepath.Rel(filepath.Dir(filepath.Dir(storePath)), path)
			storeItem.Logo = fmt.Sprintf("image://%s?r=%d", logoPath, r)
		}

		if strings.HasSuffix(relPath, "README.md") {
			readmePath, _ := filepath.Rel(filepath.Dir(filepath.Dir(storePath)), path)
			storeItem.Content = fmt.Sprintf("markdown-file://%s?r=%d", readmePath, r)
			storeItem.Contents["zh"] = fmt.Sprintf("markdown-file://%s?r=%d", readmePath, r)
		}
		if strings.HasSuffix(relPath, "README_en.md") {
			readmePath, _ := filepath.Rel(filepath.Dir(filepath.Dir(storePath)), path)
			storeItem.Contents["en"] = fmt.Sprintf("markdown-file://%s?r=%d", readmePath, r)
		}
		return nil
	})

	if storeItem.Name != "" && storeItem.Version != nil && len(storeItem.Version) > 0 {
		result = append(result, storeItem)
	}

	if err != nil {
		return nil, err
	}
	return result, nil
}

func (self Store) GetAppByCasaos(storePath string) ([]accessor.StoreAppItem, error) {
	if !filepath.IsAbs(storePath) {
		storePath = filepath.Join(storage.Local{}.GetStorePath(), storePath, "Apps")
	}
	result := make([]accessor.StoreAppItem, 0)

	storeItem := accessor.StoreAppItem{
		Version: make(map[string]accessor.StoreAppVersionItem),
	}

	err := filepath.Walk(storePath, func(path string, info fs.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			return nil
		}
		relPath, _ := filepath.Rel(storePath, path)
		segments := strings.Split(filepath.Clean(relPath), string(filepath.Separator))

		if storeItem.Name == "" {
			storeItem.Name = segments[0]
		}

		if segments[0] != storeItem.Name {
			result = append(result, storeItem)

			storeItem = accessor.StoreAppItem{
				Name:    segments[0],
				Version: make(map[string]accessor.StoreAppVersionItem),
			}
		}
		r := time.Now().Unix()
		if strings.HasSuffix(relPath, "docker-compose.yml") {
			content, err := os.ReadFile(path)
			if err != nil {
				return err
			}
			yamlData := new(function.YamlGetter)
			err = yaml.Unmarshal(content, &yamlData)
			if err != nil {
				return err
			}
			storeItem.Description = yamlData.GetString("x-casaos.description.zh_cn") + "\n" + yamlData.GetString("x-casaos.description.en_us")
			storeItem.Tag = []string{
				yamlData.GetString("x-casaos.category"),
			}
			storeItem.Logo = yamlData.GetString("x-casaos.icon")
			readme := yamlData.GetString("x-casaos.tips.before_install.zh_cn")
			if readme != "" {
				storeItem.Content = "markdown://" + yamlData.GetString("x-casaos.tips.before_install.zh_cn")
			}
			versionPath, _ := filepath.Rel(filepath.Dir(filepath.Dir(storePath)), path)
			storeItem.Version["latest"] = accessor.StoreAppVersionItem{
				Name:        "latest",
				ComposeFile: versionPath,
				Environment: make([]docker.EnvItem, 0),
			}
		}

		if strings.HasSuffix(relPath, "README.md") {
			readmePath, _ := filepath.Rel(filepath.Dir(filepath.Dir(storePath)), path)
			storeItem.Content = fmt.Sprintf("markdown-file://%s?r=%d", readmePath, r)
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	return result, nil
}

func (self Store) ParseSettingField(field map[string]string, call func(item *docker.ValueRuleItem)) *docker.ValueRuleItem {
	valueRule := &docker.ValueRuleItem{}

	if field["required"] == "true" {
		valueRule.Kind |= docker.EnvValueRuleRequired
	}
	if field["disabled"] == "true" {
		valueRule.Kind |= docker.EnvValueRuleDisabled
	}

	switch field["type"] {
	case "text":
		valueRule.Kind |= docker.EnvValueTypeText
		break
	case "number":
		valueRule.Kind |= docker.EnvValueTypeNumber
		break
	case "select":
		if field["multiple"] == "true" {
			valueRule.Kind |= docker.EnvValueTypeSelectMultiple
		} else {
			valueRule.Kind |= docker.EnvValueTypeSelect
		}
	}

	if call != nil {
		call(valueRule)
	}
	return valueRule
}

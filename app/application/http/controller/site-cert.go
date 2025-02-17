package controller

import (
	"crypto/ecdsa"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"errors"
	"fmt"
	logic2 "github.com/donknap/dpanel/app/common/logic"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/acme"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/donknap/dpanel/common/service/storage"
	"github.com/donknap/dpanel/common/service/ws"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go/v2/src/http/controller"
	"gorm.io/datatypes"
	"gorm.io/gen"
	"io"
	"os"
	"path/filepath"
	"strings"
	"time"
)

type SiteCert struct {
	controller.Abstract
}

func (self SiteCert) DnsApi(http *gin.Context) {
	type ParamsValidate struct {
		Account []accessor.DnsApi `json:"account"`
		User    []accessor.DnsApi `json:"user"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	dnsApi := make([]accessor.DnsApi, 0)
	logic2.Setting{}.GetByKey(logic2.SettingGroupSetting, logic2.SettingGroupSettingDnsApi, &dnsApi)

	if !function.IsEmptyArray(params.Account) || !function.IsEmptyArray(params.User) {
		dnsApi = make([]accessor.DnsApi, 0)
		for _, item := range params.Account {
			if exists, index := function.IndexArrayWalk(dnsApi, func(i accessor.DnsApi) bool {
				return i.ServerName == item.ServerName
			}); exists {
				dnsApi[index] = item
			} else {
				dnsApi = append(dnsApi, item)
			}
		}
		for _, item := range params.User {
			if exists, index := function.IndexArrayWalk(dnsApi, func(i accessor.DnsApi) bool {
				return i.ServerName == item.ServerName
			}); exists {
				dnsApi[index] = item
			} else {
				dnsApi = append(dnsApi, item)
			}
		}
		err := logic2.Setting{}.Save(&entity.Setting{
			GroupName: logic2.SettingGroupSetting,
			Name:      logic2.SettingGroupSettingDnsApi,
			Value: &accessor.SettingValueOption{
				DnsApi: dnsApi,
			},
		})
		if err != nil {
			self.JsonResponseWithError(http, err, 500)
			return
		}
	}
	dnsApi = append([]accessor.DnsApi{
		{
			ServerName: "nginx",
			Title:      "Nginx",
			Env:        make([]docker.EnvItem, 0),
		},
	}, dnsApi...)
	self.JsonResponseWithoutError(http, gin.H{
		"setting": dnsApi,
	})
	return
}

func (self SiteCert) Apply(http *gin.Context) {
	type ParamsValidate struct {
		Type        string   `json:"type"`
		Domain      []string `json:"domain" binding:"required_if=Type apply"`
		Email       string   `json:"email" binding:"required_if=Type apply"`
		CertServer  string   `json:"certServer" binding:"required_if=Type apply" oneof:"zerossl letsencrypt"`
		AutoUpgrade bool     `json:"autoUpgrade"`
		Renew       bool     `json:"renew"`
		Debug       bool     `json:"debug"`
		DnsApi      string   `json:"dnsApi" binding:"required_if=Type apply"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	options := []acme.Option{
		acme.WithDomain(params.Domain...),
		acme.WithEmail(params.Email),
		acme.WithCertServer(params.CertServer),
		//acme.WithCertRootPath(storage.Local{}.GetStorageCertPath()),
		acme.WithAutoUpgrade(params.AutoUpgrade),
	}

	if params.Renew {
		options = append(options, acme.WithRenew(), acme.WithForce())
	} else {
		options = append(options, acme.WithIssue(), acme.WithForce())
	}

	if params.Debug {
		options = append(options, acme.WithDebug())
	}

	if params.DnsApi != "" {
		if params.DnsApi == "nginx" {
			options = append(options, acme.WithDnsNginx())
		} else {
			dnsApiList := make([]accessor.DnsApi, 0)
			logic2.Setting{}.GetByKey(logic2.SettingGroupSetting, logic2.SettingGroupSettingDnsApi, &dnsApiList)
			if exists, i := function.IndexArrayWalk(dnsApiList, func(i accessor.DnsApi) bool {
				return i.ServerName == params.DnsApi
			}); exists {
				env := function.PluckArrayWalk(dnsApiList[i].Env, func(i docker.EnvItem) (string, bool) {
					return fmt.Sprintf("%s=%s", i.Name, i.Value), true
				})
				options = append(options, acme.WithDnsApi(dnsApiList[i].ServerName, env))
			}
		}
	}

	builder, err := acme.New(options...)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	response, err := builder.Run()
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	wsBuffer := ws.NewProgressPip(ws.MessageTypeDomainApply)
	defer wsBuffer.Close()

	success := false
	wsBuffer.OnWrite = func(p string) error {
		wsBuffer.BroadcastMessage(p)
		if strings.Contains(p, "-----END CERTIFICATE-----") {
			success = true
		}
		return nil
	}

	_, err = io.Copy(wsBuffer, response)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	if success {
		self.JsonSuccessResponse(http)
	} else {
		self.JsonResponseWithError(http, errors.New(".domainCertIssueFailed"), 500)
	}
	return
}

func (self SiteCert) Import(http *gin.Context) {
	type ParamsValidate struct {
		SslKeyContent string `json:"sslKeyContent" binding:"required"`
		SslCrtContent string `json:"sslCrtContent" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	var errInvalidCertFile = errors.New("invalid cert file")

	// 遍历 PEM 数据块
	var block *pem.Block
	block, _ = pem.Decode([]byte(params.SslCrtContent))
	if block == nil || block.Type != "CERTIFICATE" {
		self.JsonResponseWithError(http, errInvalidCertFile, 500)
		return
	}
	cert, err := x509.ParseCertificate(block.Bytes)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	keyAlgorithm := "unknown"
	switch cert.PublicKey.(type) {
	case *rsa.PublicKey:
		keyAlgorithm = "rsa-2048"
		break
	case *ecdsa.PublicKey:
		keyAlgorithm = "ec-256"
		break
	}
	if len(cert.DNSNames) <= 0 {
		self.JsonResponseWithError(http, errInvalidCertFile, 500)
		return
	}
	mainDomain := cert.DNSNames[0]
	sanDomain := "no"
	if len(cert.DNSNames) > 1 {
		sanDomain = strings.Join(function.PluckArrayWalk(cert.DNSNames, func(i string) (string, bool) {
			if i == mainDomain {
				return "", false
			}
			return i, true
		}), ",")
	}
	// 创建单个证书的配置 map
	certConfig := []string{
		fmt.Sprintf("Le_Domain='%s'", mainDomain),
		fmt.Sprintf("Le_Alt='%s'", sanDomain),
		fmt.Sprintf("Le_API='import'"),
		fmt.Sprintf("Le_Keylength='%s'", keyAlgorithm),
		fmt.Sprintf("Le_CertCreateTime='%d'", cert.NotBefore.Unix()),
		fmt.Sprintf("Le_CertCreateTimeStr='%s'", cert.NotBefore.Format(time.RFC3339)),
		fmt.Sprintf("Le_NextRenewTime='%d'", cert.NotAfter.Unix()),
		fmt.Sprintf("Le_NextRenewTimeStr='%s'", cert.NotAfter.Format(time.RFC3339)),
		fmt.Sprintf("Le_SerialNumber='%s'", cert.SerialNumber.String()),
	}
	confFilePath := filepath.Join(storage.Local{}.GetNginxCertPath(), mainDomain, mainDomain+".conf")
	err = os.MkdirAll(filepath.Dir(confFilePath), os.ModePerm)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	err = os.WriteFile(confFilePath, []byte(strings.Join(certConfig, "\n")), 0644)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	err = os.WriteFile(filepath.Join(filepath.Dir(confFilePath), "fullchain.cer"), []byte(params.SslCrtContent), 0644)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	err = os.WriteFile(filepath.Join(filepath.Dir(confFilePath), mainDomain+".key"), []byte(params.SslKeyContent), 0644)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	self.JsonSuccessResponse(http)
	return
}

func (self SiteCert) GetList(http *gin.Context) {
	builder, err := acme.New()
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	list, err := builder.List()
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	for _, cert := range list {
		if cert.IsImport() {
			cert.FillCertContent()
		}
	}
	self.JsonResponseWithoutError(http, gin.H{
		"list": list,
	})
	return
}

func (self SiteCert) Delete(http *gin.Context) {
	type ParamsValidate struct {
		Name []string `json:"name" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	for _, d := range params.Name {
		if list, _ := dao.SiteDomain.Where(gen.Cond(
			datatypes.JSONQuery("setting").Equals(d, "certName"),
		)...).First(); list != nil {
			self.JsonResponseWithError(http, errors.New(".siteDomainCertHasBindDomain"), 500)
			return
		}
	}
	fmt.Printf("%v \n", params.Name)
}

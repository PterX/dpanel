package controller

import (
	"errors"
	"fmt"
	"github.com/docker/docker/api/types/network"
	"github.com/donknap/dpanel/app/application/logic"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/donknap/dpanel/common/function"
	"github.com/donknap/dpanel/common/service/docker"
	"github.com/donknap/dpanel/common/service/exec"
	"github.com/gin-gonic/gin"
	"github.com/we7coreteam/w7-rangine-go/src/http/controller"
	"html/template"
	"os"
	"strings"
	"time"
)

var (
	defaultNetworkName = "dpanel-local"
)

type SiteDomain struct {
	controller.Abstract
}

func (self SiteDomain) Create(http *gin.Context) {
	type ParamsValidate struct {
		ContainerId               string `json:"containerId" binding:"required"`
		ServerName                string `json:"serverName" binding:"required"`
		Port                      int32  `json:"port" binding:"required"`
		EnableBlockCommonExploits bool   `json:"enableBlockCommonExploits"`
		EnableAssetCache          bool   `json:"enableAssetCache"`
		EnableWs                  bool   `json:"enableWs"`
		ExtraNginx                string `json:"extraNginx"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	containerRow, err := docker.Sdk.Client.ContainerInspect(docker.Sdk.Ctx, params.ContainerId)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	var siteDomainRow *entity.SiteDomain
	var domainSetting *accessor.SiteDomainSettingOption

	siteDomainRow, _ = dao.SiteDomain.Where(dao.SiteDomain.ServerName.Eq(params.ServerName)).First()
	if siteDomainRow != nil {
		self.JsonResponseWithError(http, errors.New("域名已经存在"), 500)
		return
	}
	// 将当前容器加入到默认 dpanel-local 网络中，并指定 Hostname 用于 Nginx 反向代理
	_, err = docker.Sdk.Client.NetworkInspect(docker.Sdk.Ctx, defaultNetworkName, network.InspectOptions{})
	if err != nil {
		self.JsonResponseWithError(http, errors.New("DPanel 默认网络不存在，请重新安装或是新建&加入 "+defaultNetworkName+" 网络"), 500)
		return
	}

	hostname := fmt.Sprintf(docker.HostnameTemplate, strings.Trim(containerRow.Name, "/"))
	siteRow, _ := dao.Site.Where(dao.Site.ContainerInfo.Eq(&accessor.SiteContainerInfoOption{
		ID: params.ContainerId,
	})).First()

	if siteRow != nil {
		hostname = fmt.Sprintf(docker.HostnameTemplate, siteRow.SiteName)
	}

	if _, ok := containerRow.NetworkSettings.Networks[defaultNetworkName]; !ok {
		err = docker.Sdk.Client.NetworkConnect(docker.Sdk.Ctx, defaultNetworkName, params.ContainerId, &network.EndpointSettings{
			Aliases: []string{
				hostname,
			},
		})
		if err != nil {
			self.JsonResponseWithError(http, err, 500)
			return
		}
	}

	domainSetting = &accessor.SiteDomainSettingOption{
		ServerName:                params.ServerName,
		ServerAddress:             hostname,
		Port:                      params.Port,
		EnableBlockCommonExploits: params.EnableBlockCommonExploits,
		EnableWs:                  params.EnableWs,
		EnableAssetCache:          params.EnableAssetCache,
		EnableSSL:                 false,
		ExtraNginx:                template.HTML(params.ExtraNginx),
		TargetName:                function.GetMd5(params.ServerName),
	}

	err = logic.Site{}.MakeNginxConf(domainSetting)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	err = dao.SiteDomain.Create(&entity.SiteDomain{
		ServerName:  params.ServerName,
		ContainerID: strings.Trim(containerRow.Name, "/"),
		Setting:     domainSetting,
	})

	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	self.JsonSuccessResponse(http)
	return
}

func (self SiteDomain) GetList(http *gin.Context) {
	type ParamsValidate struct {
		ContainerId string `json:"containerId" binding:"required"`
		ServerName  string `json:"serverName"`
		Port        int32  `json:"port"`
		Page        int    `json:"page,default=1" binding:"omitempty,gt=0"`
		PageSize    int    `json:"pageSize" binding:"omitempty"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	if params.Page < 1 {
		params.Page = 1
	}
	if params.PageSize < 1 {
		params.PageSize = 10
	}
	containerRow, err := docker.Sdk.Client.ContainerInspect(docker.Sdk.Ctx, params.ContainerId)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	query := dao.SiteDomain.Order(dao.SiteDomain.ID.Desc()).Where(dao.SiteDomain.ContainerID.Eq(strings.Trim(containerRow.Name, "/")))
	if params.ServerName != "" {
		query = query.Where(dao.SiteDomain.ServerName.Like("%" + params.ServerName + "%"))
	}
	list, total, _ := query.FindByPage((params.Page-1)*params.PageSize, params.PageSize)

	self.JsonResponseWithoutError(http, gin.H{
		"total": total,
		"page":  params.Page,
		"list":  list,
	})
	return
}

func (self SiteDomain) GetDetail(http *gin.Context) {
	type ParamsValidate struct {
		Id int32 `json:"id" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}

	domainRow, _ := dao.SiteDomain.Where(dao.SiteDomain.ID.Eq(params.Id)).First()
	if domainRow == nil {
		self.JsonResponseWithError(http, errors.New("域名不存在"), 500)
		return
	}
	vhost, err := logic.Site{}.GetSiteNginxSetting(domainRow.ServerName).GetConfContent()
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	self.JsonResponseWithoutError(http, gin.H{
		"domain": domainRow,
		"vhost":  string(vhost),
	})
	return
}

func (self SiteDomain) Delete(http *gin.Context) {
	type ParamsValidate struct {
		Id []int32 `json:"id" binding:"required"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	list, _ := dao.SiteDomain.Where(dao.SiteDomain.ID.In(params.Id...)).Find()
	for _, item := range list {
		go logic.Site{}.GetSiteNginxSetting(item.ServerName).RemoveAll()
	}
	_, err := dao.SiteDomain.Where(dao.SiteDomain.ID.In(params.Id...)).Delete()
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	// 如果没有域名，则退出默认网络
	if list != nil && len(list) > 0 {
		count, _ := dao.SiteDomain.Where(dao.SiteDomain.ContainerID.Eq(list[0].ContainerID)).Count()
		if count == 0 {
			// 如果只有dpanel-local一个网络则保留
			containerInfo, err := docker.Sdk.ContainerInfo(list[0].ContainerID)
			if err == nil && len(containerInfo.NetworkSettings.Networks) > 1 {
				err = docker.Sdk.Client.NetworkDisconnect(docker.Sdk.Ctx, defaultNetworkName, list[0].ContainerID, false)
				if err != nil {
					self.JsonResponseWithError(http, err, 500)
					return
				}
			}
		}
	}

	self.JsonSuccessResponse(http)
	return

}

func (self SiteDomain) ApplyDomainCert(http *gin.Context) {
	type ParamsValidate struct {
		Id          int32  `json:"id" binding:"required"`
		Email       string `json:"email" binding:"required"`
		CertServer  string `json:"certServer" binding:"required" oneof:"zerossl letsencrypt"`
		AuthUpgrade bool   `json:"authUpgrade"`
		Renew       bool   `json:"renew"`
		Debug       bool   `json:"debug"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	domain, _ := dao.SiteDomain.Where(dao.SiteDomain.ID.Eq(params.Id)).First()
	if domain == nil {
		self.JsonResponseWithError(http, errors.New("域名不存在"), 500)
		return
	}

	err := logic.Acme{}.Issue(&logic.AcmeIssueOption{
		ServerName:  domain.ServerName,
		Email:       params.Email,
		CertServer:  params.CertServer,
		AutoUpgrade: params.AuthUpgrade,
		Renew:       params.Renew,
		Debug:       params.Debug,
	})
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	siteNginxSetting := logic.Site{}.GetSiteNginxSetting(domain.ServerName)
	certContent, err := siteNginxSetting.GetCertContent()
	if os.IsNotExist(err) {
		self.JsonResponseWithError(http, errors.New("证书申请失败，请查看控制台日志"), 500)
		return
	}
	keyContent, err := siteNginxSetting.GetKeyContent()
	if os.IsNotExist(err) {
		self.JsonResponseWithError(http, errors.New("证书申请失败，请查看控制台日志"), 500)
		return
	}

	certInfo := logic.Acme{}.Info(domain.ServerName)
	if certInfo.CreateTimeStr == "" || certInfo.RenewTimeStr == "" {
		self.JsonResponseWithError(http, errors.New("证书申请失败，请查看控制台日志"), 500)
		return
	}

	domainSetting := &accessor.SiteDomainSettingOption{
		ServerName:                domain.ServerName,
		Port:                      domain.Setting.Port,
		ServerAddress:             domain.Setting.ServerAddress,
		EnableBlockCommonExploits: domain.Setting.EnableBlockCommonExploits,
		EnableWs:                  domain.Setting.EnableWs,
		EnableAssetCache:          domain.Setting.EnableAssetCache,
		ExtraNginx:                domain.Setting.ExtraNginx,
		EnableSSL:                 true,
		TargetName:                function.GetMd5(domain.Setting.ServerName),
		SslCrt:                    string(certContent),
		SslKey:                    string(keyContent),
		SslCrtCreaeTime:           certInfo.CreateTimeStr,
		SslCrtRenewTime:           certInfo.RenewTimeStr,
		AutoSsl:                   true,
	}

	err = logic.Site{}.MakeNginxConf(domainSetting)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}

	_, err = dao.SiteDomain.Where(dao.SiteDomain.ID.Eq(params.Id)).Updates(&entity.SiteDomain{
		Setting: domainSetting,
	})

	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	defer func() {
		go func() {
			time.Sleep(3 * time.Second)
			exec.Command{}.RunWithOut(&exec.RunCommandOption{
				CmdName: "nginx",
				CmdArgs: []string{
					"-s", "stop",
				},
			})
			exec.Command{}.RunWithOut(&exec.RunCommandOption{
				CmdName: "nginx",
			})
		}()
	}()

	self.JsonSuccessResponse(http)
	return
}

func (self SiteDomain) UpdateDomain(http *gin.Context) {
	type ParamsValidate struct {
		Id                        int32  `json:"id" binding:"required"`
		SslCrt                    string `json:"sslCrt"`
		SslKey                    string `json:"sslKey"`
		SslCrtRenewTime           string `json:"sslCrtRenewTime"`
		Port                      int32  `json:"port"`
		EnableBlockCommonExploits bool   `json:"enableBlockCommonExploits"`
		EnableAssetCache          bool   `json:"enableAssetCache"`
		EnableWs                  bool   `json:"enableWs"`
		ExtraNginx                string `json:"extraNginx"`
	}

	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	siteDomainRow, _ := dao.SiteDomain.Where(dao.SiteDomain.ID.Eq(params.Id)).First()
	if siteDomainRow == nil {
		self.JsonResponseWithError(http, errors.New("域名不存在，请先添加域名"), 500)
		return
	}
	// 站点基本信息
	if params.Port != 0 {
		siteDomainRow.Setting.Port = params.Port
	}

	siteDomainRow.Setting.EnableBlockCommonExploits = params.EnableBlockCommonExploits
	siteDomainRow.Setting.EnableAssetCache = params.EnableAssetCache
	siteDomainRow.Setting.EnableWs = params.EnableWs

	if params.ExtraNginx != "" {
		siteDomainRow.Setting.ExtraNginx = template.HTML(params.ExtraNginx)
	}
	// 手动导入证书
	if params.SslCrt != "" && params.SslKey != "" {
		siteDomainRow.Setting.SslCrt = params.SslCrt
		siteDomainRow.Setting.SslKey = params.SslKey
		siteDomainRow.Setting.AutoSsl = false
		siteDomainRow.Setting.SslCrtRenewTime = params.SslCrtRenewTime
		siteDomainRow.Setting.EnableSSL = true
	}
	err := logic.Site{}.MakeNginxConf(siteDomainRow.Setting)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	_, err = dao.SiteDomain.Where(dao.SiteDomain.ID.Eq(params.Id)).Updates(&entity.SiteDomain{
		Setting: siteDomainRow.Setting,
	})
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	self.JsonSuccessResponse(http)
	return
}

func (self SiteDomain) RestartNginx(http *gin.Context) {
	exec.Command{}.RunWithOut(&exec.RunCommandOption{
		CmdName: "nginx",
		CmdArgs: []string{
			"-s", "stop",
		},
	})
	exec.Command{}.RunWithOut(&exec.RunCommandOption{
		CmdName: "nginx",
	})
	self.JsonSuccessResponse(http)
	return
}

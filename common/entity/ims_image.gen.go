// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package entity

import (
	"github.com/donknap/dpanel/common/accessor"
)

const TableNameImage = "ims_image"

// Image mapped from table <ims_image>
type Image struct {
	ID        int32                        `gorm:"column:id;type:INTEGER" json:"id"`
	Tag       string                       `gorm:"column:tag" json:"tag"`
	Title     string                       `gorm:"column:title" json:"title"`
	Setting   *accessor.ImageSettingOption `gorm:"column:setting;serializer:json" json:"setting"`
	ImageInfo *accessor.ImageInfoOption    `gorm:"column:image_info" json:"imageInfo"`
	BuildType string                       `gorm:"column:build_type" json:"buildType"`
	Status    int32                        `gorm:"column:status" json:"status"`
	Message   string                       `gorm:"column:message" json:"message"`
}

// TableName Image's table name
func (*Image) TableName() string {
	return TableNameImage
}

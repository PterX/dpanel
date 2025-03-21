package event

import (
	"context"
	"github.com/docker/docker/api/types/container"
)

var ContainerDeleteEvent = "container_delete"

type ContainerDelete struct {
	InspectInfo container.InspectResponse
	Ctx         context.Context
}

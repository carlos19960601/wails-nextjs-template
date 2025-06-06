package bridge

import "context"

type App struct {
	ctx    context.Context
	cancel context.CancelFunc
}

package main

import (
	"embed"
	"wails-nextjs-template/bridge"

	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func AppOptions(app *bridge.App) *options.App {
	return &options.App{
		Title:  bridge.APP_NAME,
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.OnStartup,
		Bind: []interface{}{
			app,
		},
	}
}

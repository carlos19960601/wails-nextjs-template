package main

import (
	"wails-nextjs-template/bridge"

	"github.com/wailsapp/wails/v2"
)



func main() {
	err := wails.Run(AppOptions(bridge.NewApp()))
	if err != nil {
		println("Error:", err.Error())
	}
}

package main

import (
	"Moonlightter/controllers"
	"github.com/astaxie/beego"
)

func main() {
	beego.Router("/", &controllers.MainController{})
	beego.Router("/resume", &controllers.MainController{}, "get:Resume")
	beego.Router("/login", &controllers.LoginController{})
	beego.Router("/logout", &controllers.LogoutController{})
	beego.Router("/validate/register", &controllers.ValidateController{}, "post:Register")
	beego.Router("/validate/login", &controllers.ValidateController{}, "post:Login")
	beego.Router("/picker", &controllers.PickerController{})
	beego.Router("/collection", &controllers.CollectionController{})
	beego.Run()
}

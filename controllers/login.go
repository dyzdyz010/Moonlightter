package controllers

import (
	"Moonlightter/models"
	"crypto/md5"
	"fmt"
	"github.com/astaxie/beego"
)

type LoginController struct {
	beego.Controller
}

func (this *LoginController) Get() {
	this.TplNames = "login.tpl"
	email := this.GetSession("email")
	if email != nil {
		this.Redirect("/picker", 302)
	}
}

func (this *LoginController) Post() {
	this.TplNames = "login.tpl"
	email := this.GetString("email")
	password := this.GetString("password")
	passhex := md5.New()
	passhex.Write([]byte(password))
	password = fmt.Sprintf("%x", passhex.Sum(nil))

	fmt.Println("Login request, email: ", email, "password: ", password)
	u := models.GetUserByEmail(email)
	if u == nil || u.Password != password {
		this.Data["WarnMsg"] = "Wrong email/password."
	} else {
		this.SetSession("email", this.GetString("email"))
		this.Redirect("/picker", 302)
	}
}

// 登出Controller
type LogoutController struct {
	beego.Controller
}

func (this *LogoutController) Get() {
	this.TplNames = "login.tpl"
	this.DelSession("email")
	this.Redirect("/login", 302)
}

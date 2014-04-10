package controllers

import (
	"Moonlightter/models"
	"crypto/md5"
	"fmt"
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {
	this.TplNames = "index.tpl"
	this.Data["WarnMsg"] = ""
	email := this.GetSession("email")
	if email != nil {
		this.Redirect("/picker", 302)
	}
}

func (this *MainController) Post() {
	this.TplNames = "index.tpl"
	fmt.Println("Register request recieved.")

	// Get POST parameters
	username := this.GetString("username")
	email := this.GetString("email")
	password := this.GetString("password")
	passhex := md5.New()
	passhex.Write([]byte(password))
	password = fmt.Sprintf("%x", passhex.Sum(nil))

	u := models.GetUserByEmail(email)
	v := models.GetUserByUsername(username)
	if u != nil && v != nil {
		this.Data["WarnMsg"] = "This email and username have been used."
	} else if u == nil && v != nil {
		this.Data["WarnMsg"] = "This username have been used."
	} else if u != nil && v == nil {
		this.Data["WarnMsg"] = "This email have been used."
	} else {
		models.AddUser(&models.User{username, email, password})
		this.Data["Username"] = username
		this.SetSession("email", email)
		this.Redirect("/picker", 302)
	}
}

func (this *MainController) Resume() {
	this.Redirect("/static/resume.pdf", 302)
}

package controllers

import (
	"Moonlightter/models"
	"fmt"
	"github.com/astaxie/beego"
)

type PickerController struct {
	beego.Controller
}

func (this *PickerController) Get() {
	this.TplNames = "picker.tpl"
	email := this.GetSession("email")
	if email == nil {
		this.Redirect("/login", 302)
	} else {
		fmt.Println("Session email: ", email.(string))
		u := models.GetUserByEmail(email.(string))
		this.Data["Username"] = u.Username
		this.Data["Color"] = "#32D764"
	}
}

func (this *PickerController) Post() {
	this.TplNames = "picker.tpl"
	email := this.GetSession("email").(string)
	u := models.GetUserByEmail(email)
	this.Data["Username"] = u.Username

	hex := this.GetString("colorhex")
	name := this.GetString("colorname")
	c := models.ColorByHex(hex, email)
	d := models.ColorByName(name)
	if c != nil && d != nil {
		this.Data["WarnMsg"] = "Duplicate color/name pair."
	} else if c == nil && d != nil {
		this.Data["WarnMsg"] = "This name has been taken."
	} else if c != nil && d == nil {
		this.Data["WarnMsg"] = "This color has already been saved."
	} else {
		models.AddColor(&models.Color{email, name, hex})
		this.Data["WarnMsg"] = "Your color has been saved successfully."
	}
	this.Data["Color"] = hex
}

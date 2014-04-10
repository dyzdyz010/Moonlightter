package controllers

import (
	"Moonlightter/models"
	"fmt"
	"github.com/astaxie/beego"
)

type ValidateController struct {
	beego.Controller
}

type LoginUserCheck struct {
	Valid bool
}

type RegisterUserCheck struct {
	Exist  bool
	Reason string
}

func (this *ValidateController) Login() {
	email := this.GetString("email")
	u := models.GetUserByEmail(email)
	fmt.Println(u)
	json := &LoginUserCheck{false}
	if u != nil {
		json.Valid = true
	}
	fmt.Println(json)
	this.Data["json"] = json
	this.ServeJson()
}

func (this *ValidateController) Register() {
	value := this.GetString("value")
	u := models.GetUserByEmail(value)
	fmt.Println(u)
	json := new(RegisterUserCheck)
	if u == nil {
		u := models.GetUserByUsername(value)
		if u == nil {
			json.Exist = false
		} else {
			json.Exist = true
			json.Reason = "username"
		}
	} else {
		json.Exist = true
		json.Reason = "email"
	}
	fmt.Println(json)
	this.Data["json"] = json
	this.ServeJson()
}

package controllers

import (
	"Moonlightter/models"
	"fmt"
	"github.com/astaxie/beego"
)

type CollectionController struct {
	beego.Controller
}

func (this *CollectionController) Get() {
	this.TplNames = "collection.tpl"
	email := this.GetSession("email")
	if email == nil {
		this.Redirect("/login", 302)
	} else {
		u := models.GetUserByEmail(email.(string))
		this.Data["Username"] = u.Username
		this.Data["Colors"] = models.ColorsByEmail(email.(string))
		this.Ctx.SetCookie("email", email.(string))
	}
}

func (this *CollectionController) Post() {
	this.TplNames = "collection.tpl"
	email := this.GetSession("email")
	if email == nil {
		this.Redirect("/login", 302)
	} else {
		err := models.RemoveColorByName(this.GetString("colorname"))
		if err != nil {
			fmt.Println("Remove color error in Post")
		}
	}
}

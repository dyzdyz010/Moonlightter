package models

import (
	"fmt"
	"labix.org/v2/mgo/bson"
)

type Color struct {
	Email string
	Name  string
	Hex   string
}

func ColorByHex(hex string, email string) *Color {
	c := Session.DB("moonlightter").C("color")
	color := &Color{}
	err := c.Find(bson.M{"hex": hex, "email": email}).One(color)
	if err != nil {
		fmt.Println("Find color by hex error: ", err)
		return nil
	} else {
		return color
	}
}

func ColorByName(name string) *Color {
	c := Session.DB("moonlightter").C("color")
	color := &Color{}
	err := c.Find(bson.M{"name": name}).One(color)
	if err != nil {
		fmt.Println("Find color by name error: ", err)
		return nil
	} else {
		return color
	}
}

func RemoveColorByName(name string) error {
	c := Session.DB("moonlightter").C("color")
	err := c.Remove(bson.M{"name": name})
	if err != nil {
		fmt.Println("Remove color by name error: ", err)
		return err
	} else {
		return nil
	}
}

func ColorsByEmail(email string) []*Color {
	c := Session.DB("moonlightter").C("color")
	colors := make([]*Color, 10000)
	err := c.Find(bson.M{"email": email}).All(&colors)
	if err != nil {
		fmt.Println("Find color by name error: ", err)
		return nil
	} else {
		return colors
	}
}

func AddColor(co *Color) {
	c := Session.DB("moonlightter").C("color")
	err := c.Insert(co)
	if err != nil {
		panic(err)
	}
}

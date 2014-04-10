package models

import (
	"fmt"
	"labix.org/v2/mgo/bson"
)

type User struct {
	Username string
	Email    string
	Password string
}

func GetUserByEmail(email string) *User {
	c := Session.DB("moonlightter").C("user")
	u := &User{}
	err := c.Find(bson.M{"email": email}).One(u)
	if err != nil {
		fmt.Println("Find user error: ", err)
		return nil
	} else {
		return u
	}
}

func GetUserByUsername(username string) *User {
	c := Session.DB("moonlightter").C("user")
	u := &User{}
	err := c.Find(bson.M{"username": username}).One(u)
	if err != nil {
		fmt.Println("Find user error: ", err)
		return nil
	} else {
		return u
	}
}

func AddUser(u *User) {
	c := Session.DB("moonlightter").C("user")
	err := c.Insert(u)
	if err != nil {
		panic(err)
	}
}

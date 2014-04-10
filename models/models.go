package models

import (
	"labix.org/v2/mgo"
)

var Session *mgo.Session

func init() {
	var err error
	Session, err = mgo.Dial("mongodb://dyzdyz010:DYZcrh2582525775@ds037488.mongolab.com:37488/moonlightter")
	// Session, err = mgo.Dial("localhost")
	if err != nil {
		panic(err)
	}
}

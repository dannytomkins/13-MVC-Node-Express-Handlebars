const express = require("express");

//to use Heroku or listen locally
var PORT = process.env.PORT || 3030;

var app = express()

app.use(express.static("public"))


app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())


const burgers_controller = require("./controllers/burgers_controller")
app.use(burgers_controller)

const expressHandlebars = require("express-handlebars")

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}))

app.set("view engine", "handlebars")

app.listen(PORT, function(){
    console.log("app is listening on PORT ", PORT)
})
const express = require("express");
const app = express();
app.get("/", function (request, response){
    response.send("<h1>Hello World!</h1>");
});
app.get("/contact", function (req, res){
    res.send("Contact me at: angela@gmail.com")
});
app.get("/about", function (req, res){
    res.send("this is about page")
});
app.get("/hobbies", function (req, res){
    res.send("this is about page")
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
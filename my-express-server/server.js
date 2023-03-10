const express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("<h1>Hello</h1>");
});
app.get("/contact", function(req,res){
    res.send("<h1>Contact me: ramin.rme@gmail.com</h1>");
});
app.get("/about", function(req,res){
    res.send("<h2>I'm Ramin a web developer</h2>");
});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
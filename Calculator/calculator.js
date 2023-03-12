const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    num1 =Number(req.body.num1);
    num2 =Number(req.body.num2);

    var result = num1 + num2;
    res.send("The result is: " + result);

});
//BMI
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req,res){
    weight =parseFloat(req.body.weight);
    height =parseFloat(req.body.height);

    var bmi = weight / Math.pow(height,2);
    res.send("The BMI is: " + bmi);

});
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
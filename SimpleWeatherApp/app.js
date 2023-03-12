const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){

    res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req,res){
    const city = req.body.cityName;
    const unit = "metric"
    const apiKey = "210a1dad94c63a226cd7ae42a44271d6"
    const url = "https://api.openweathermap.org/data/2.5/weather?appid=" +apiKey + "&q="+city+"&units=" + unit;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const weatherCode =weatherData.weather[0].icon;
            const iconURL = "https://openweathermap.org/img/wn/" + weatherCode + "@4x.png";
            res.write("<h1>The weather in "+ city + " is currently: " + weatherDescription + ".</h1>");
            res.write("<h1>The temperature is: " + temp +  " degrees Celcius.</h1>");
            res.write("<img src='" + iconURL + "'/>");
            res.send();
    
        })
    });
});


app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
// DISPLAY WEATHER IN LONDON
// const express = require("express");
// const https = require("https");
//
// const app = express();
//
// app.get("/", function (req, res){
//
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=40cb7f55adbe6b3302d4780d0ead3739&units=metric"
//
//     https.get(url, function (response){
//
//         console.log(response.statusCode);
//
//         response.on("data", function(data){
//            const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp
//             const weatherDescription = weatherData.weather[0].description
//             const icon = weatherData.weather[0].icon
//             const imageURL = "http://openweathermap.org/img/wn" + icon + "@2x.png"
//             res.write("<h1>The temperature in London is " + temp + " degree Celcius.</h1>");
//             res.write("The weather is currently " + weatherDescription);
//             res.write("<img src=" + imageURL +  ">");
//             res.send()
//         });
//     });
// });
//
// app.listen(3000, function (){
//     console.log("Server is running on port 3000.");
// })

// DISPLAY WEATHER IN ANY CITY
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
        res.sendFile(__dirname + "/index.html")
});
app.post("/", function (req, res){
    const query = req.body.cityName;
    const apiKey = "40c27f51adbe6b3322d4789d0ead3739";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

    https.get(url, function (response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "https://openweathermap.org/img/wn" + icon + "@2x.png";

            res.write("The weather is currently " + weatherDescription);
            res.write("The temperature in" + query + "is" + temp + "degree Celsius.");
            res.write("<img src=" + imageURL +  ">");
            res.send();
        });
    });
});

app.listen(3000, function (){
    console.log("Server is running on port 3000.");
})

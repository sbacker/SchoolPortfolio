const express = require('express');
const app = express();
const https = require('https');
const port = 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res){
    const query = req.body.city;
    const apiKey = "2a6c8f4a5c8f2fde6b2618522d32f24e";
    const units = "imperial";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=' + apiKey + '&units=' + units;


    https.get(url, function(response){

        response.on('data', function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon  = weatherData.weather[0].icon;
            res.write('<h1>The temperature at' + weatherData.name + ' is ' + temp + ' degrees fahreneit.</h1>')
            res.write('<p>The weather is currently ' + weatherDescription + '</p>')
            res.write('<img src ="http://openweathermap.org/img/wn/' + icon + '.png">')
            res.send()

        })
    })
});



app.listen(port, () => {
    console.log('App listening on port ' + port)
});
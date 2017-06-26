//Rest api calling library 
var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=71c0a5e1bbae5358a5ec6d7ae7633f0f&units=metric';

//71c0a5e1bbae5358a5ec6d7ae7633f0f
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=71c0a5e1bbae5358a5ec6d7ae7633f0f
module.exports = {
    getTemp: function(location){
        //encode location with space or strange chars before calling the api
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                 return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.message);
        });
    }
}
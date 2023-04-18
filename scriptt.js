const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
    params: { city: 'Seattle' },
    headers: {
        'X-RapidAPI-Key': 'ce66292ccemsh0666f9c04fe1868p1cad83jsn4335bb0e3cc6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});
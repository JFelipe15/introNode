const axios = require("axios");
console.log("Hola Mundo");

let apiKey = "afc002d9bbea9f17112d9170b6ceb1b5";
let city = "Bogota, col";

let requestConfig = {
    url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apiKey,
};

console.log(requestConfig);

let objPromesa = axios(requestConfig);

objPromesa
    .then(function (response) {
        //response.data -> son los datos que envia la API
        console.log(
            "La temperatura en Bogota, Colombia, es: " +
                (response.data.main.temp - 273.15).toFixed(2).toString() +
                " Grados celcius"
        );
    })
    .catch(function (err) {
        console.log(err);
    });
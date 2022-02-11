//Selecting elements
const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const temperatureValueElement = document.querySelector(".temperature-value p");
const temperatureDescriptionElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

// Application Data
const weather = {};

weather.temperature = {
    unit: "celsius"
}

// Applications Constants & Variables
const KELVIN = 273;
const key = "dcf79de653fcdb2a3284b95dec279ded";

// Checking If Browser Supports Geolocation Services
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't support Geolocation</p>";
}

// Setting User's Position
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Showing Error when there is an issue with Geolocation Service
function showError(error) {
    notificationElement.style.display ="block";
    notificationElement.innerHTML = `<p>${ error.message }</p>`;
}

// FUNCTION: Get Weather from API Provider
function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ key }`;
    
    fetch(api)
        .then(function(response) {
            let data = response.json();
            return data;
        })
        .then(function(data) {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function() {
            displayWeather();
        });
}

// FUNCTION: Display Weather to UI
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${ weather.iconId }.png" />`;
    temperatureValueElement.innerHTML = `${ weather.temperature.value }°<span>C</span>`;
    temperatureDescriptionElement.innerHTML = weather.description;
    locationElement.innerHTML = `${ weather.city }, ${ weather.country }`;
}

// FUNCTION: Celsius To Farenheit Conversion
function celsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
}

// When the user clicks on the temperature element
temperatureValueElement.addEventListener("click", function() {
    if (weather.temperature.value === undefined) return;

    if (weather.temperature.unit == "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);

        temperatureValueElement.innerHTML = `${ fahrenheit }°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    } else {
        temperatureValueElement.innerHTML = `${ weather.temperature.value }°<span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});
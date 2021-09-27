var apiKey = "440b68c93644497197bbe6ad7736992a"
var searchBtn = document.getElementById("search-button")
var city = document.getElementById("search-city")
var userCityName = ""
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;


searchBtn.addEventListener("click", getInputValue);
searchBtn.addEventListener("click", getCurrentWeatherApi);

function getInputValue () {
    userCityName = city.value;
    console.log(userCityName)
}

function getCurrentWeatherApi() {
    fetch(queryURL)
        .then(function (response) {
            console.log(queryURL);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
}

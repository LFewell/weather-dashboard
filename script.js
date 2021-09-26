var apiKey = "440b68c93644497197bbe6ad7736992a"
var searchBtn = document.getElementById("search-button")
var city = document.getElementById("search-city");
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch(queryURL)
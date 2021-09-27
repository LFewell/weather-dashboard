let weather = {
    "apiKey": "440b68c93644497197bbe6ad7736992a",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
        displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity,speed,);
        document.querySelector("#city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector("#description").innerText = description;
        document.querySelector("#temp").innerText = "Temp: " + temp + "℉";
        document.querySelector("#wind").innerText = "Wind: " + speed + "mph";
        document.querySelector("#humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector("#UV").innerText = "UV Index: ";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".validate").value);
    }
};

document.querySelector("#search-button").addEventListener("click", function () {
    weather.search();
});

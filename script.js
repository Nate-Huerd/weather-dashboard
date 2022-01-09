// declare variables (document.querySelector('#id'));
var cityFormEl = document.querySelector("#search-form");
var weatherContainerEl = document.querySelector("#weather-display");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var fetchButton = document.getElementById('fetch-button');
var weatherList = document.querySelector('ul');
// create single-city html file. use id's and classes listed in js

// start code here
function getAPI() {
    // insert inputed city name into [city name]
    var apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=[city name]&appid=414ac80477dc8b366e793c03864afab5'
    fetch(apiURL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                var name = document.createElement('li');
                var temp = document.createElement('p');

                name.textContent = data[i].name;
                temp = data[i].temp;
            }
        });
}

fetchButton.addEventListener('click', getAPI);
/*
var displayWeather = function(weather, searchTerm) {
    if (weather.length === 0) {
        // use weather container
        weatherContainerEl.textContent = 'No weather records found.';        return;
    }

    weatherSearchTerm.textContent = searchTerm;

    for (var i = 0; i < weather.length; i++) {
        // add more below
        var cityName = weather[i].city

        var cityEl = document.createElement('span');
        // use class list-item
        cityEl.classList = 'list-item flex-row justify-space-between align-center';
        cityEl.setAttribute('href', './single-city.html?city=' + cityName);

        var titleEl = document.createElement('span');
        titleEl.textContent = cityName;

        cityEl.appendChild(titleEl);

        var weatherEl = document.createElement('span');
        weatherEl.classList = 'flex-row align-center';

        // line 107 of homepage.js code
        // if (weather[i].)
        
        cityEl.appendChild(weatherEl);

        weatherContainerEl.appendChild(cityEl);
    }
};

fetchButton.addEventListener('click', getAPI);
cityFormEl.addEventListener("submit", formSubmitHandler);
*/
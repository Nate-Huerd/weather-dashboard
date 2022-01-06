// declare variables (document.querySelector('#id'));
// create single-city html file. use id's and classes listed in js

// test api connection
var getWeather = function (weather) {
    var apiURL = 'api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test'

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        });
};

/* start code here
var getWeather = function (weather) {
    var apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
    
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    displayWeather(data, user);
                });
            } else {
                alert('Error: ' + response.statusText);
            }
        });
};

var displayWeather = function(weather, searchTerm) {
    if (weather.length === 0) {
        // use weather container
        weatherContainerEl.textContent = 'No weather records found.';
        return;
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

        // line 89 in homepage.js activity 1, 5 fetch github issues

    }
}; */
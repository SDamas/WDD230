/* This script gets temperature and wind speed values from an external API
to calculate wind chill. It displays the result in a span with id of #windChill
*/

// select HTML elements in the document
const currentTemperature = document.querySelector('#current-temperature');
const weatherIcon = document.querySelector('#weather-icon');
const weatherCondition = document.querySelector('#weather-condition');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');

// Store Weather API url
const url = "https://api.openweathermap.org/data/2.5/weather?q=Campinas&units=imperial&appid=e1dc75c4fc9d679feb39bb2a3a62a4f3";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        /* Console display for test purposes
           console.log(data);
        */
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};

apiFetch();

function displayResults(weatherData) {
    // Update current temperature in HTML
    currentTemperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;

    // Get current weather icon image
    const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;  
    
    // Get description of current weather
    const description = weatherData.weather[0].description;

    // Set image attribute for the icon
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);

    // Display current weather description
    weatherCondition.textContent = description;

    // Display wind speed
    windSpeed.textContent = weatherData.wind.speed;  

    // Display wind chill
    windChill.textContent = calculateWindChill(weatherData.main.temp.toFixed(0), weatherData.wind.speed);
};

//Calculate wind chill
const calculateWindChill = (temperature, windSpeed) => {

    const inputsMeetSpecification = temperature <= 50 && windSpeed > 3 ? true:false;

    if (inputsMeetSpecification) {

        const result = 37.74 + (0.6215 * temperature) - (35.75 * (windSpeed**0.16)) + (0.4275 * temperature * (windSpeed**0.16));
        
        /* Console display for test purposes
           console.log("Successfully calculated wind chill");
        */ 
        return `${result.toFixed(1)}ºF`;

    } else if (inputsMeetSpecification != true) {
        
        /* Console display for test purposes
           console.log("Inputs didn't meet specification");
        */ 
        return "N/A";
    }
};
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Store Weather API url
const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=e1dc75c4fc9d679feb39bb2a3a62a4f3";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }

apiFetch();

function displayResults(weatherData) {
    // Update current temperature in HTML
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;

    // Get current weather icon image
    const icon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;  
    
    // Get description of current weather
    const description = weatherData.weather[0].description;

    // Set image attribute for the icon
    weatherIcon.setAttribute('src', icon);
    weatherIcon.setAttribute('alt', description);

    // Display current weather description
    captionDesc.textContent = description;
};
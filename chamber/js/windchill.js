/* This script gets temperature and wind speed values 
to calculate wind chill. It displays the result in a span with id of #windChill
*/

// Inputs
const temperature = document.querySelector("#temperature").textContent
const windSpeed = document.querySelector("#windSpeed").textContent

//Record if inputs meet specification
const inputsMeetSpecification = temperature <= 50 && windSpeed > 3 ? true:false
//Calculate and display wind chill
const calculateWindChill = (temperature, windSpeed) => {

    const output = document.querySelector("#windChill")

    if (inputsMeetSpecification) {

        const windChill = 37.74 + (0.6215 * temperature) - (35.75 * (windSpeed**0.16)) + (0.4275 * temperature * (windSpeed**0.16))
        output.textContent = windChill.toFixed(1)
        console.log("Successfully calculated wind chill")
    } else if (inputsMeetSpecification != true) {
        output.textContent = "N/A"
        console.log("Inputs didn't meet specification")
    }
}

//Run calculation with inputs
calculateWindChill(temperature, windSpeed)
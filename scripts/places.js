document.addEventListener("DOMContentLoaded", () => {
    const temp = 10; // Static temperature in °C
    const windSpeed = 5; // Static wind speed in km/h

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temp * Math.pow(windSpeed, 0.16)
            ).toFixed(2);
        } else {
            return "N/A";
        }
    }

    const windChillElement = document.getElementById("windChill");
    windChillElement.textContent = calculateWindChill(temp, windSpeed);

});

// Set the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set your name
document.getElementById("yourname").textContent = "🌻Okpewo Damilola James🌻";

// Set the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

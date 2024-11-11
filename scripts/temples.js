// Set the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Set your name
document.getElementById("yourname").textContent = "🌻Okpewo Damilola James🌻";

// Set the last modified date
const lastModifiedDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

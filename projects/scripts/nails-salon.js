// Service data
const services = [
    {
        name: "Acrylic Nails",
        description: "Beautiful, long-lasting acrylic nails.",
        price: "₦8,000",
        imageUrl: "./images/acrylic.webp",
    },
    {
        name: "Gel Manicure",
        description: "A perfect manicure with a glossy gel finish.",
        price: "₦7,000",
        imageUrl: "./images/gel-manicure.webp",
    },
    {
        name: "Pedicure",
        description: "Relax and pamper your feet with our pedicures.",
        price: "₦5,000",
        imageUrl: "./images/pedicure.webp",
    },
    {
        name: "Nail Art",
        description: "Custom nail art designs to suit your style.",
        price: "₦6,000",
        imageUrl: "./images/nail-art.webp",
    },
    {
        name: "Spa Package",
        description: "Indulge in a complete spa treatment for hands and feet.",
        price: "₦15,000",
        imageUrl: "./images/spa-package.webp",
    }
];

// Function to create a service card
function createServiceCard(service) {
    const card = document.createElement("section");
    card.innerHTML = `
        <h3>${service.name}</h3>
        <img src="${service.imageUrl}" alt="${service.name}" loading="lazy">
        <p>${service.description}</p>
        <p><strong>Price:</strong> ${service.price}</p>
    `;
    document.querySelector(".services-grid").appendChild(card);
}

// Function to display all services
function displayServices() {
    services.forEach(createServiceCard);
}

// Function to book an appointment (using LocalStorage)
function setupAppointmentForm() {
    const form = document.getElementById("appointment-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (!name || !email) {
                alert("Please fill in all fields.");
                return;
            }

            localStorage.setItem("Appointment", JSON.stringify({ name, email }));
            alert(`Appointment successfully booked for ${name}!`);

            // Reset the form
            form.reset();
        });
    }
}

// Function to toggle the hamburger menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu'); // Select the menu
    navMenu.classList.toggle('active'); // Toggle the "active" class
}


// Function to redirect to services page
function bookNow() {
    alert("Redirecting to the Services page!");
    window.location.href = "services.html";
}

// Initialize page functionality
document.addEventListener("DOMContentLoaded", () => {
    displayServices(); // Display services dynamically

    // Set up the hamburger menu toggle
    const hambutton = document.getElementById("hambutton");
    if (hambutton) {
        hambutton.addEventListener("click", toggleMenu);
    }

    // Set up the appointment form if it exists
    setupAppointmentForm();
});

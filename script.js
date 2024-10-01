// Get elements from the DOM
let name = document.getElementById("name");
let sayNameBtn = document.getElementById("sayName");
let changeBg = document.getElementById("changeBg");
let body = document.querySelector("body");

// Array of motivational quotes
const quotes = [
    "The best way to predict the future is to create it.",
    "You only live once, but if you do it right, once is enough.",
    "In the end, we only regret the chances we didn't take.",
    "Life is short, and it's up to you to make it sweet.",
    "The purpose of our lives is to be happy.",
    "Do what you can, with what you have, where you are.",
    "Success is not the key to happiness. Happiness is the key to success.",
];

// Function to create a ripple effect
function createRipple(event) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    
    const rect = sayNameBtn.getBoundingClientRect();
    const x = event.clientX - rect.left - 10; // Center the ripple horizontally
    const y = event.clientY - rect.top - 10; // Center the ripple vertically

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    sayNameBtn.appendChild(ripple);

    // Remove the ripple element after the animation ends
    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });
}

// Function to get a random color
function getRandomColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    return `rgb(${r}, ${g}, ${b})`; // Return as an RGB string
}

// Display "Hello World" and a random quote when clicking the "Say My Name" button
sayNameBtn.addEventListener("click", (event) => {
    name.innerHTML = "Hello World!";
    name.classList.remove("fade-in");
    void name.offsetWidth; // Trigger reflow
    name.classList.add("fade-in");

    // Change text color to a random color
    name.style.color = getRandomColor();

    createRipple(event); // Create the ripple effect
    confetti(); // Trigger confetti effect
    displayRandomQuote(); // Display a random quote

    // Create particle effect
    createParticles(event);
});

// Function to display a random quote
function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.createElement("p");
    quoteElement.innerText = randomQuote;
    document.getElementById("quoteContainer").innerHTML = ""; // Clear previous quotes
    document.getElementById("quoteContainer").appendChild(quoteElement);
}

// Change background color to a random color with a fadeaway effect
changeBg.addEventListener("click", () => {
    body.style.transition = "background-color 1s ease"; // Set transition duration
    const newColor = getRandomColor(); // Get a random color
    body.style.backgroundColor = newColor; // Apply new background color
});

// Function to create particle effect
function createParticles(event) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    const size = Math.random() * 10 + 5; // Random size between 5 and 15
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${event.clientX}px`;
    particle.style.top = `${event.clientY}px`;
    document.body.appendChild(particle);

    // Remove the particle after animation
    particle.addEventListener("animationend", () => {
        particle.remove();
    });
}

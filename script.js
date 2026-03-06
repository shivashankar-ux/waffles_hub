// Mobile menu toggle

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


// Smooth scroll for button

document.getElementById("learnBtn").addEventListener("click", () => {

document.getElementById("about").scrollIntoView({
behavior:"smooth"
});

});


// Simple contact form message

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message sent successfully!");

form.reset();

});
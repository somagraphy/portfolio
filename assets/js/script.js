// Initialize Swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        effect: 'fade', // A nice fade effect
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// --- Preloader Logic ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    // Wait a moment to ensure animation plays, then fade out
    setTimeout(() => {
        preloader.classList.add('preloader-hidden');
    }, 1500); // 500ms delay
});

// --- Responsive Navigation Logic ---
const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('#nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the 'nav-active' class to slide the menu in/out
    navLinks.classList.toggle('nav-active');

    // Toggle the 'toggle' class to animate the hamburger icon
    hamburger.classList.toggle('toggle');
});
// typed js 

var typed = new Typed('#typing-content', {
    strings: ["Inspire !","Ideate !!", "Innovate !!!",],
    typeSpeed: 200,
    backSpeed: 150,
    showCursor:false,
    loop:true,
  });

// Detect the browser's theme preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Select the favicon element
const favicon = document.querySelector('link[rel="icon"]');

// Set the appropriate favicon based on the theme preference
if (prefersDarkMode) {
    favicon.href = 'img/image.png';
} else {
    favicon.href = 'img/rec_dark.png';
}

// CLOSE NAV ON CLICK

// document.addEventListener("DOMContentLoaded", function() {
//   var navLinks = document.querySelectorAll(".navbar-nav>li>a");
//   navLinks.forEach(function(link) {
//     link.addEventListener("click", function() {
//       var navbarCollapse = document.querySelector(".navbar-collapse");
//       if (navbarCollapse.classList.contains("show")) {
//         navbarCollapse.classList.remove("show");
//       }
//     });
//   });
// });


// AOS INIT

AOS.init()
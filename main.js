const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const hamburger = document.querySelectorAll(".hamburger");

navButton.addEventListener("click", function() {
    nav.classList.toggle("nav--visible");
    navButton.classList.toggle("nav-toggle--active");

    for (let i = 0; i < hamburger.length; i++) {
        hamburger[i].classList.toggle("hamburger--active");
    }

});


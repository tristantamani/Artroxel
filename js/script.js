//Category//
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
    card.classList.add("hide");
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      card.classList.remove("hide");
    }
  });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards))

'use strict';
//Navbar Animation//
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//Mobile Navbar//
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}

//Game Filter//
$(document).ready(function(){
  console.log('jQuery is loaded and ready.');

  $('.tag-btn').click(function(){
    console.log('Tag button clicked.');
    $(this).next('.tag-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });
});

//Filter Animation//
document.addEventListener("DOMContentLoaded", function () {
  const filterToggleBtn = document.getElementById("filter-toggle-btn");
  const gameFilter = document.querySelector(".game-filter");

  // Toggle function for showing/hiding game filter sidebar
  function toggleGameFilter() {
    gameFilter.classList.toggle("active");
  }

  // Event listener for filter toggle button click
  filterToggleBtn.addEventListener("click", function () {
    toggleGameFilter();
  });

  // Event listener for clicking outside the game filter sidebar to close it
  document.addEventListener("click", function (event) {
    if (!gameFilter.contains(event.target) && event.target !== filterToggleBtn) {
      gameFilter.classList.remove("active");
    }
  });
});
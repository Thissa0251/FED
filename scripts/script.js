// JavaScript Document


var deButton = document.querySelector("header section:first-of-type button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}
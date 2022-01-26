// JavaScript Document

//Hamburger menu tonen en niet meer tonen*********************//

var deButton = document.querySelector("header section:first-of-type button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}

//dark modus inschakelen***************************************//

var darkbox = document.querySelector("footer input");
    darkbox.addEventListener('change', hetWordtDonker);

function hetWordtDonker() {
  if ( darkbox.checked ) {
    document.documentElement.classList.add("darkmode");
  }
  else {
    document.documentElement.classList.remove("darkmode");
  }

}    
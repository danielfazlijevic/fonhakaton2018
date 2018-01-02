var menu = document.querySelector('#menu');
var myNav = document.querySelector('.navbar');

function toggleMenu() {
    menu.classList.toggle("opacity");
    menu.style.display == "flex" ? menu.style.display = "none" : menu.style.display = "flex";
}

window.onscroll = function () {
    "use strict";
    if (document.documentElement.scrollTop >= 3) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");

    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");

    }
};

// typer('#headingtotype', {min: 20, max: 350}).back('empty').line({container: '#headingtotype'}); 

typer('.hakaton-heading', {min: 100, max: 350})
.pause(300).
cursor({block: true})
  .line('FON HAKAFON')
  .back(3)
  .continue('TON 2017')
  .back(1)
  .pause(400)
  .continue(8);

  typer('.stats', {min: 20, max: 350})
  .pause(500)
  .line("50 TIMOVA")
  .pause(200)
  .continue(' // ')
  .pause(300)
  .continue('24 SATI')
  .pause(300)
  .continue(' // ')
  .pause(300)
  .continue('JEDAN POBEDNIČKI TIN')
  .pause(300)
  .back(1)
  .continue('M');
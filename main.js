/* DANIEL FAZLIJEVIC, JANUAR 2018. */

var menu = document.querySelector('#menu');
var myNav = document.querySelector('.navbar');
const loading = document.querySelector('.loading');
const content = document.querySelector('.loadedcontent');

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

function hideLoading() {
    loading.style.display = "none";
    content.style.display = "flex";
}
// typer('#headingtotype', {min: 20, max: 350}).back('empty').line({container: '#headingtotype'}); 

typer('.hakaton-heading', {
        min: 100,
        max: 350
    })
    .listen('loadingend')
    .pause(300).
cursor({
        block: true
    })
    .line('FON HAKAFON')
    .back(3)
    .continue('TON 2018');



typer('.stats', {
        min: 20,
        max: 350
    })
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
    .continue('M')
    .end();

typer('.loadingtext', {
        min: 5,
        max: 25
    })
    .back('all')
    .line('Učitavanje')
    .pause(200)
    .continue('.')
    .pause(200)
    .continue('.')
    .pause(200)
    .continue('.')
    .emit('loadingtextend')
    .end();

typer('#console', {
        min: 5,
        max: 22
    })
    .listen('loadingtextend')
    .line("sudo -v initialize hackathon")
    .line("[sudo]Password for root: *******")
    .line("Entry is allowed.")
    .line("FON HAKATON 2018 is being initialized...")
    .line("Date: 05/03/2018. Destination set: Belgrade, Serbia")
    .line("Location: Fakultet Organizacionih Nauka.")
    .line("Organized by: FONIS.rs")
    .line("Fun level: MAX")
    .line("Partners: SBB ")
    .line("Loading complete.")
    .pause(500)
    .emit('loadingend');
  /*  .end(hideLoading); */

    /*
if (localStorage.getItem("development")) {
    hideLoading();
}
*/
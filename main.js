/* DANIEL FAZLIJEVIC, JANUAR 2018. */

var menu = document.querySelector('#menu');
var myNav = document.querySelector('.navbar');
const loading = document.querySelector('.loading');
const content = document.querySelector('.loadedcontent');
const footer = document.querySelector('footer');

function toggleMenu() {
    menu.classList.toggle("opacity");
    menu.style.display == "block" ? menu.style.display = "none" : menu.style.display = "block";
}

const links = document.querySelectorAll('.nav-link');
[].forEach.call(links,function(e){e.addEventListener('click',()=>{
 toggleMenu();   
},false)})



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
    content.style.display = "block";
    footer.style.display = "block";
}
function check() {
    "use strict";

    if (typeof Symbol == "undefined") return false;
    try {
        eval("class Foo {}");
        eval("var bar = (x) => x+1");
    } catch (e) { return false; }

    return true;
}

if (check()) {
typingAnimation();
} else {
  alert('Tvoj browser ne podržava neke funkcije ovog sajta, moguće su greške u prikazivanju. Ažuriraj svoj web browser.');
  hideLoading();
}
function typingAnimation(){
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
    .line("Date: 31/03/2018. Destination set: Belgrade, Serbia")
    .line("Location: Fakultet Organizacionih Nauka.")
    .line("Organized by: FONIS.rs")
    .line("Fun level: MAX")
    .line("Partner: Telekom ")
    .line("Loading complete.")
    .pause(500)
    .emit('loadingend')
    .end(hideLoading); 

}

window.sr = ScrollReveal();
sr.reveal('.reveal');


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


if (localStorage.getItem("development")) {
    hideLoading();
}

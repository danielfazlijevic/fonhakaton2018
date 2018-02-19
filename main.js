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
    .line("25 TIMOVA")
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
    .continue('MA')
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



var countDownDate = new Date("March 31, 2018 18:00:00").getTime();

var x = setInterval(function countdown() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    function makeMeTwoDigits(n){
        return (n < 10 ? "0" : "") + n;
    }
    
    document.getElementById("dani").innerHTML = makeMeTwoDigits(days);
    document.getElementById("sati").innerHTML = makeMeTwoDigits(hours);
    document.getElementById("minuti").innerHTML = makeMeTwoDigits(minutes);
    document.getElementById("sekunde").innerHTML = makeMeTwoDigits(seconds);

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Hakaton je počeo!";
    }
}, 1000);



function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 44.772601, lng: 20.475168},
      zoom: 16,
      styles: [
      {
        "featureType": "administrative",
        "stylers": [
          {
            "color": "#808080"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#404040"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "stylers": [
          {
            "color": "#696969"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#303030"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "color": "#f59700"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }
    ]
    });
  }


    
  document.querySelector(".nl-form").addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
    function sendData() {
        var XHR = new XMLHttpRequest();
        var urlEncodedData = document.querySelector('#mail-input').value;
        
        XHR.addEventListener('load', function(event) {
          alert('Tvoj mejl je uspešno dodat u newsletter! Dobijaćes povremena obaveštenja o FON Hakatonu.');
        });
        XHR.addEventListener('error', function(event) {
          alert('Došlo je do greške! Pokušaj ponovo kasnije ili nam pošalji mejl na office@fonis.rs');
        });
        XHR.open('POST', 'submit.php');
        XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        XHR.send(urlEncodedData);
      }

if (localStorage.getItem("development")) {
    hideLoading();
}



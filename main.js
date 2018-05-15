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
        max: 100
    })
    .listen("loadingend")
    .pause(500)
    .line("23 TIMOVA")
    .pause(200)
    .continue(' // ')
    .pause(300)
    .continue('24 SATA')
    .pause(300)
    .continue(' // ')
    .pause(300)
    .continue('DVA POBEDNIČKA TIN')
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
    .pause(100)
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


/* 
var countDownDate = new Date("March 31, 2018 14:00:00").getTime();

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
    
    
    document.getElementById("dani").innerHTML = "00";
    document.getElementById("sati").innerHTML = "00";
    document.getElementById("minuti").innerHTML = "00";
    document.getElementById("sekunde").innerHTML = "00";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Hakaton je počeo!";
    }
}, 1000);
 */




function initMap() {
  var uluru = {lat: 44.772601, lng: 20.475168};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: uluru,
    styles:[
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8ec3b9"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1a3646"
          }
        ]
      },
      {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#4b6878"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#64779e"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#040038"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#334e87"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#023e58"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000b42"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#000329"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f5f9fa"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#001666"
          }
        ]
      },
      {
        "featureType": "road",
        "stylers": [
          {
            "color": "#d68b00"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#304a7d"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
          {
            "color": "#1421ad"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2c6675"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#255763"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#98a5be"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#1d2c4d"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#283d6a"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#3a4762"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#0e1626"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#4e6d70"
          }
        ]
      }
    ]
  });
  var imageLogo = 'marker15.png';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: imageLogo
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

if (localStorage.getItem("development") == true) {
    hideLoading();
}

document.addEventListener('keydown', function(event) {
  if(event.keyCode == 27) {


hideLoading();

  }});

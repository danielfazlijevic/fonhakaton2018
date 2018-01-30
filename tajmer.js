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

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

/*typer('.hakaton-heading', {
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
*/


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
    .emit('loadingend')
    .end(hideLoading); 

  
if (localStorage.getItem("development")) {
    hideLoading();
}

/* Tajmer */

(function ($) {
	$.fn.countdown = function (options, callback) {
		var settings = $.extend({
			date: null,
			offset: null,
			day: 'Day',
			days: 'Days',
			hour: 'Hour',
			hours: 'Hours',
			minute: 'Minute',
			minutes: 'Minutes',
			second: 'Second',
			seconds: 'Seconds'
		}, options);

		// Throw error if date is not set
		if (!settings.date) {
			$.error('Date is not defined.');
		}

		// Throw error if date is set incorectly
		if (!Date.parse(settings.date)) {
			$.error('Incorrect date format, it should look like this, 12/24/2012 12:00:00.');
		}

		// Save container
		var container = this;

		/**
		 * Change client's local date to match offset timezone
		 * @return {Object} Fixed Date object.
		 */
		var currentDate = function () {
			// get client's current date
			var date = new Date();

			// turn date to utc
			var utc = date.getTime() + (date.getTimezoneOffset() * 60000);

			// set new Date object
			var new_date = new Date(utc + (3600000*settings.offset));

			return new_date;
		};

		/**
		 * Main countdown function that calculates everything
		 */
		function countdown () {
			var target_date = new Date(settings.date), // set target date
				current_date = currentDate(); // get fixed current date

			// difference of dates
			var difference = target_date - current_date;

			// if difference is negative than it's pass the target date
			if (difference < 0) {
				// stop timer
				clearInterval(interval);

				if (callback && typeof callback === 'function') callback();

				return;
			}

			// basic math variables
			var _second = 1000,
				_minute = _second * 60,
				_hour = _minute * 60,
				_day = _hour * 24;

			// calculate dates
			var days = Math.floor(difference / _day),
				hours = Math.floor((difference % _day) / _hour),
				minutes = Math.floor((difference % _hour) / _minute),
				seconds = Math.floor((difference % _minute) / _second);
		
			// based on the date change the refrence wording
			var text_days = (days === 1) ? settings.day : settings.days,
				text_hours = (hours === 1) ? settings.hour : settings.hours,
				text_minutes = (minutes === 1) ? settings.minute : settings.minutes,
				text_seconds = (seconds === 1) ? settings.second : settings.seconds;

				// fix dates so that it will show two digets
				days = (String(days).length >= 2) ? days : '0' + days;
				hours = (String(hours).length >= 2) ? hours : '0' + hours;
				minutes = (String(minutes).length >= 2) ? minutes : '0' + minutes;
				seconds = (String(seconds).length >= 2) ? seconds : '0' + seconds;

			// set to DOM
			container.find('.days').text(days);
			container.find('.hours').text(hours);
			container.find('.minutes').text(minutes);
			container.find('.seconds').text(seconds);

			container.find('.days_text').text(text_days);
			container.find('.hours_text').text(text_hours);
			container.find('.minutes_text').text(text_minutes);
			container.find('.seconds_text').text(text_seconds);
		}
		
		// start
		var interval = setInterval(countdown, 1000);
	};

})(jQuery);

var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var year = now.getFullYear() + 1;
var nextyear = month + '/' + day + '/' + year + ' 07:07:07';

$('#example').countdown({
	date: '07/27/2018 17:00:00',
	offset: +1,
	day: 'Dan',
	days: 'Dana',
	hour: 'Sat',
	hours: 'Sati',
	minute: 'Minut',
	minutes: 'Minuta',
	second: 'Sekunda',
	seconds: 'Sekundi'
}, function () {
		alert('Prijava za ovogodišnji FON Hakaton je upravo zatvorena!');
});


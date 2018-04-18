var menuIndex = "main-menu";

function currentMenu(name) {
	showMenu(menuIndex = name);
}

function showMenu(name) {
	var i;
	var x = document.getElementsByClassName("global-menu");
	for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";  
	}
	document.getElementById(name).style.display = "block";
	
	var btn_layout = menuData[name];
	
	document.getElementById("phy-btn-back").setAttribute( "onClick", btn_layout.back );
	document.getElementById("phy-btn-left").setAttribute( "onClick", btn_layout.left );
	document.getElementById("phy-btn-right").setAttribute( "onClick", btn_layout.right );
	document.getElementById("phy-btn-up").setAttribute( "onClick",  btn_layout.up );
	document.getElementById("phy-btn-down").setAttribute( "onClick",  btn_layout.down );
}

var deg = 0;
var inc = 360 / 8;
var left = -1;
var right = 1;

function rotateMango(orientation) {
	deg += inc * orientation;
	document.getElementById("mango").style.transform = 'rotate(' + deg + 'deg)';
}

var slideIndex = 1;

function currentMenuSlide(n) {
	showMenuSlide(slideIndex = n);
}

function changeMenuSlide(side) {
	showMenuSlide(slideIndex += side);
}

function showMenuSlide(n) {
	var i;
	var x = document.getElementById(menuIndex).getElementsByClassName("slide");
	var subs = document.getElementById(menuIndex).getElementsByClassName("subtitle");
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";
	}
	for (i = 0; i < subs.length; i++) {
		 subs[i].style.display = "none";
	}
	
	x[slideIndex-1].style.display = "block";
	subs[slideIndex-1].style.display = "block";

	addMarqueeIfOverflowing(subs[slideIndex-1]);
}

function alertChangeTab(n) {
  var i;
  var tabs = document.getElementsByClassName("menu-alert-tab");
	
  for (i = 0; i < tabs.length; i++) {
     tabs[i].className = tabs[i].className.replace(" menu-alert-tab-selected", "");
  }
	
	tabs = document.getElementsByClassName(n);
	
	for (i = 0; i < tabs.length; i++) {
     tabs[i].className += " menu-alert-tab-selected";
  } 
}

var level = 1;
var levelName = "level-" + level;

function changeLevelMenuWithLevels(inc) {
	level += inc;
	var l = document.getElementById(menuIndex).getElementsByClassName("level-subtitle").length;
	
	if (level > l) {level = 1}
	if (level < 1) {level = l}
	
	hideAllLevelSlides(levelName);
	levelName = "level-" + level;
	currentSlideMenuWithLevels(1);
}

function currentLevelMenuWithLevels(n) {
	hideAllLevelSlides(levelName);
	level = n;
	levelName = "level-" + level;
	currentSlideMenuWithLevels(1);
}

function currentSlideMenuWithLevels(n) {
	showMenuSlideWithLevels(slideIndex = n);
}

function changeSlideMenuSlideLevel(side) {
	showMenuSlideWithLevels(slideIndex += side);
}

function showMenuSlideWithLevels(n) {
	var i;
	var x = document.getElementById(menuIndex).getElementsByClassName("slide " + levelName);
	var subs = document.getElementById(menuIndex).getElementsByClassName("subtitle " + levelName);
	var l_subs = document.getElementById(menuIndex).getElementsByClassName("level-subtitle");
	
	if (n > x.length) {slideIndex = 1}
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";  
	}
	for (i = 0; i < subs.length; i++) {
		 subs[i].style.display = "none";  
	}
	for (i = 0; i < l_subs.length; i++) {
		 l_subs[i].style.display = "none";  
	}
	
	x[slideIndex-1].style.display = "block";
	subs[slideIndex-1].style.display = "block";
	l_subs[level-1].style.display = "block";
	addMarqueeIfOverflowing(subs[slideIndex-1]);
}

function hideAllLevelSlides(level) {
	var i;
	var x = document.getElementById(menuIndex).getElementsByClassName("slide " + level);
	var subs = document.getElementById(menuIndex).getElementsByClassName("subtitle " + level);
	var l_subs = document.getElementById(menuIndex).getElementsByClassName("level-subtitle");
	
	for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";  
	}
	for (i = 0; i < subs.length; i++) {
		 subs[i].style.display = "none";  
	}
	for (i = 0; i < l_subs.length; i++) {
		 l_subs[i].style.display = "none";  
	}
}

/*
function alertChangeTabAdd(n) {
	showMenuSlide(tabIndex += n);
}*/

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);

	var x = document.getElementsByClassName('clock');

	for (i = 0; i < x.length; i++) {
		 x[i].innerHTML = h + ":" + m;
	}	

	var t = setTimeout(startTime, 500);
}

function startDate() {
	var objToday = new Date(),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()];

	var today = dayOfWeek + " " + curMonth + " " + dayOfMonth;
	document.getElementById('date').innerHTML = today;
}

function checkTime(i) {
	if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
	return i;
}

function toggleCheckmarks(name){
	var allSubs = document.getElementById(menuIndex).getElementsByClassName("subtitle");
	var allBox = document.getElementById(menuIndex).getElementsByClassName("alert-checkbox");

	for (var i=0; i < allSubs.length; i++) {
		if (allSubs[i].innerHTML.includes(name)) {
			toggleCheckmark(allBox[i]);
		}
	}
}

function toggleCheckmark(box){
	if(box.classList.contains("alert-checkbox-ticked")) {
		box.className = box.className.replace(" alert-checkbox-ticked", "");
	}else{
		box.className += " alert-checkbox-ticked";
	}
}

function toggleSelectedEntry(box){
	var content = box.innerHTML;
	var check = " &#x2713;";
	var last = box.getElementsByClassName("last-word")[0];

	if(box.classList.contains("alert-entry-selected")) {
		box.className = box.className.replace(" alert-entry-selected", "");
		last.innerHTML = "";
	}else{
		box.className += " alert-entry-selected";
		last.innerHTML = check;
	}
}

function selectedEntryError(box){
	var content = box.innerHTML;
	var check = " &#x274c;";
	var last = box.getElementsByClassName("last-word")[0];

	box.className += " alert-entry-error";
	last.innerHTML = check;
	last.style.color="red";

	setTimeout(function() {
		box.className = box.className.replace(" alert-entry-error", "");
		last.innerHTML = "";
		last.style.color="green";
	} ,2000);
}

function isElementOverflowing(element) {
	var overflowX = element.offsetWidth < element.scrollWidth;
		//overflowY = element.offsetHeight < element.scrollHeight;
		//(overflowX || overflowY)
	return (overflowX);
}


function wrapContentsInMarquee(element) {
  var content = element.innerHTML;
	element.innerHTML = "<marquee behavior=\"scroll\" direction=\"left\" scrollamount=\"2\">" + content + "</marquee>";
}
//behaviour= alternate ou scroll??


function addMarqueeIfOverflowing(element) {
	var x = element.getElementsByClassName("menu-alert-hour-art-name");

	if(x.length > 0) {
		for (i = 0; i < x.length; i++) {
		 if (isElementOverflowing(x[i])) {
				wrapContentsInMarquee(x[i]);
			}
		}
	}else{
		if (isElementOverflowing(element)) {
			wrapContentsInMarquee(element);
		}
	}
}

function updateAlertHourScrollbar() {
	var container =  document.getElementById("menu-alert-hour-progress");
	var box = document.getElementById("menu-alert-hour-progress-bar");
	var slideNum = document.getElementById(menuIndex).getElementsByClassName("slide " + levelName).length;
	
	var section = container.clientHeight / slideNum;

	
	var y = container.offsetTop + section * (slideIndex-1) + ((section - box.clientHeight) / 2 * (slideIndex-1));
	box.style.top= y + "px";
	box.style.height= section + "px";
}

// por isto no menu das defenicoes
var alertDelay = 0; //em minutos


function showNotif(artist, day, elem){
	var sub = document.getElementById("alert-notif").getElementsByClassName("subtitle")[0];
	var slide = document.getElementById("alert-notif").getElementsByClassName("slide")[0];
	var info = lineupData[artist][day];

	slide.innerHTML = "Alerta de evento";
	sub.innerHTML = "" + artist + " no palco " + info.palco + " daqui a " + alertDelay + " minutos";
	currentMenu("alert-notif");
	showMenuSlide(1);
	
	toggleSelectedEntry(elem);
}

function createAlarm(elem, artist, monthDay){
	// hour is something like "01:10:30"

	var hour = lineupData[artist][monthDay].hora;

	var date = new Date();

	if(monthDay < date.getDate()) 
   	return;

	date.setDate(monthDay);
	date.setHours(hour.split(":")[0]);

	var min = hour.split(":")[1];
	date.setMinutes(min - alertDelay);
	date.setSeconds(hour.split(":")[2]);

	var t = date - new Date();

	console.log(t/1000 + " sec until alarm");

	if(t > 0){
		if (elem!=0) {	toggleSelectedEntry(elem);}
		setTimeout(function() {showNotif(artist,monthDay,elem); } ,t);
	}else{
		if (elem!=0) {	selectedEntryError(elem);}
	}

	// myVar = setTimeout(function(){ alert("Hello"); }, 3000);
	// function myStopFunction() {
	// 	clearTimeout(myVar);
	// }
}

function activateAllArtistAlarm(artist) {
	var hours = lineupData[artist];

	for (var hour in hours){
   	createAlarm(0, artist, hour);
	}	
}
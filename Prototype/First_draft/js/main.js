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
	document.getElementById("phy-btn-right").setAttribute( "onClick",  btn_layout.right );
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
}

function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	document.getElementById('clock').innerHTML =
	h + ":" + m;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
	return i;
}

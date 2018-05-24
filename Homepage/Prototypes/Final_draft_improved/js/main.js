var menuIndex = "main-menu";

function currentMenu(name) {
	showMenu(menuIndex = name);
}

var auxWc = 0;

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

	if(name === 'menu-ver-mapa'){auxWc = 1;}
	else if(name === 'menu-ver-1-mapa') {auxWc = 0;}
	else if(name === 'menu-cancela-permissao-negada') {permissionDenied(name);}
	else if(name === 'menu-cancelamento' || name === 'menu-cancela-reserva'){auxWc = 2;}
	resTimeOut(name);
	if(name === 'menu-reserva-confirmada-1' || name === 'menu-reserva-confirmada-2' || name === 'menu-reserva-confirmada-4' || name === 'menu-confirma-permissao-negada') {confirmedRes(name);}
	if(name === 'menu-cancela-reserva') {cancelDenied();}
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
	var container =  document.getElementById(menuIndex).getElementsByClassName("menu-alert-hour-progress")[0];
	var box = document.getElementById(menuIndex).getElementsByClassName("menu-alert-hour-progress-bar")[0];
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

	slide.innerHTML = "Alerta";
	sub.innerHTML = "" + artist + " no palco " + info.palco + " daqui a " + alertDelay + " minutos";
	currentMenu("alert-notif");
	showMenuSlide(1);
	
	toggleSelectedEntry(elem);
}

function createAlarm(elem, artist, monthDay){
	// hour is something like "01:10:30"

	var hour = lineupData[artist][monthDay].hora;

	var date = new Date();

	// if(monthDay < date.getDate()) 
	if(monthDay < 0) 
   	return;

	date.setDate(monthDay);
	date.setHours(hour.split(":")[0]);
	var min = hour.split(":")[1];
	date.setMinutes(min - alertDelay);
	date.setSeconds(hour.split(":")[2]);
	var t = date - new Date();
	console.log(t/1000 + " sec until alarm");

	// if(t > 0){
	// 	if (elem!=0) {	toggleSelectedEntry(elem);}
	// 		setTimeout(function() {showNotif(artist,monthDay,elem); } ,t);
	// }else{
	// 	if (elem!=0) {	selectedEntryError(elem);}
	// }

	var allmenu = document.getElementsByClassName("menu-alert-hour-list-entry");

	for (var i=0 ; i < allmenu.length ; i++){
   	if (allmenu[i].getElementsByClassName("menu-alert-hour-art-name")[0].textContent == artist){
   		toggleSelectedEntry(allmenu[i]);
   	}
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


var meteoDayShown = 0;
var startHourShown = 0;

function showMeteoDay(dayNum) {
	startHourShown = 0;
	document.getElementsByClassName("nav-arrow-meteo-lr")[0].style.display = "block";
	document.getElementsByClassName("nav-arrow-meteo-lr")[1].style.display = "block";

	document.getElementById("meteo-day").innerHTML = meteoDay[dayNum]["day"] + meteoDay[dayNum]["date"];
	document.getElementsByClassName("menu-meteo-curr-image")[0].src = meteoDay[dayNum]["image"];

	if (meteoDay[dayNum]["actual"] != "") {
		document.getElementsByClassName("meteo-other-day")[0].style.display = "none";
		document.getElementsByClassName("meteo-actual-day")[0].style.display = "block";
		document.getElementById("curr-temp").innerHTML = meteoDay[dayNum]["actual"];
		document.getElementsByClassName("menu-meteo-minmax")[0].innerHTML = "max:" + meteoDay[dayNum]["max"];
		document.getElementsByClassName("menu-meteo-minmax")[1].innerHTML = "min: " + meteoDay[dayNum]["min"];
	}
	else {
		document.getElementsByClassName("meteo-actual-day")[0].style.display = "none";
		document.getElementsByClassName("meteo-other-day")[0].style.display = "block";
		document.getElementsByClassName("menu-meteo-minmax-bigger")[0].innerHTML = "max:" + meteoDay[dayNum]["max"];
		document.getElementsByClassName("menu-meteo-minmax-bigger")[1].innerHTML = "min: " + meteoDay[dayNum]["min"];
	}

	for (let i = 0; i<3; i++) {
		if (dayNum-1+i >= 0 && dayNum-1+i < meteoDay.length) {
			document.getElementsByClassName("menu-meteo-bott-image")[i].style.display = "block";
			document.getElementsByClassName("menu-meteo-bott-image")[i].src = meteoDay[dayNum-1+i]["image"];
			document.getElementsByClassName("menu-meteo-bott-text")[i].innerHTML = meteoDay[dayNum-1+i]["day"];
		} else {
			document.getElementsByClassName("menu-meteo-bott-image")[i].style.display = "none";
			document.getElementsByClassName("menu-meteo-bott-text")[i].innerHTML = "";
			if (dayNum-1+i < 0)
				document.getElementsByClassName("nav-arrow-meteo-lr")[0].style.display = "none";
			else
				document.getElementsByClassName("nav-arrow-meteo-lr")[1].style.display = "none";
		}
	}
}


function changeMeteoDay(n) {
	if (meteoDayShown + n >= 0 && meteoDayShown +n < meteoDay.length ) {
		meteoDayShown+=n;
		showMeteoDay(meteoDayShown);
	}
}


function showHoursDay(startHour) {
	var today = new Date();
	var h = today.getHours() +1 ;
	if (h %2 != 0)
		h -=1;

	if (h<8) {
		h = 0;
		if (startHour == -1)
			startHour = 0;
	}

	if (startHour == -1) {
		startHour = (h-8)/2 -1;
		if (startHour == -1)
			startHour = 0;
	}

	startHourShown = startHour;
	document.getElementsByClassName('menu-meteo-loc-center')[0].innerHTML = meteoDay[meteoDayShown]["day"] + meteoDay[meteoDayShown]["date"];
	if (startHour == 0) {
		document.getElementsByClassName("nav-arrow-meteo-tb")[0].style.visibility = "hidden";
	}
	else if (startHour == 6) {
		document.getElementsByClassName("nav-arrow-meteo-tb")[1].style.display = "none";
	}
	else {
		document.getElementsByClassName("nav-arrow-meteo-tb")[0].style.visibility = "visible";
		document.getElementsByClassName("nav-arrow-meteo-tb")[1].style.display = "block";
	}

	var hours = document.getElementsByClassName("meteo-table-hour");
	var temps = document.getElementsByClassName("meteo-table-temp");
	var icons = document.getElementsByClassName("meteo-table-icon");
	var num = 0;

	for (let i = 0; i<3; i++) {
		document.getElementsByClassName("linha-tabela-meteo")[i].style.background = "none";
		num = 8+2*(i+startHour);
		hours[i].innerHTML = num.toLocaleString(undefined, {minimumIntegerDigits: 2}) + 'h  ';
		temps[i].innerHTML = meteoDay[meteoDayShown]['hour'][startHour+i];
		icons[i].src = 'img/menu-meteo/' + meteoDay[meteoDayShown]['icon'][startHour+i] + '.png';
		if (meteoDayShown == 0 && num == h) {
			document.getElementsByClassName("linha-tabela-meteo")[i].style.background = "#e376bd";
		}
	}
	
}

function changeHoursDay(n) {
	if (startHourShown+n >= 0 && startHourShown+n<7) {
		startHourShown += n;
		showHoursDay(startHourShown);
	}
}

var lastMeteoAlert = 0;

function showAlertRain() {
	if (meteoDay[0]['image'] === 'img/menu-meteo/rain.png' && lastMeteoAlert == 0) {
		lastMeteoAlert = 1;
		currentMenu('alert-meteo-rain');
	}
}


var number = Math.floor((Math.random() * 12) + 1);
var slideIndexCurrent = 1;

function confirmedRes(name){

	var subs = document.getElementById("menu-ver-mapa").getElementsByClassName("subtitle ");
	var text = subs[slideIndex - 1].innerHTML;

	var Snumber = number.toString();
	var res = "Reserva: ".concat(text);
	var final = res.concat(", wc nº");
	var final1 = final.concat(Snumber).concat(".");

	if(name === 'menu-reserva-confirmada-1'){
    	document.getElementById("confirmedReservation1").innerHTML = final1;
		 slideIndexCurrent = 1;
	}

    else if(name === 'menu-reserva-confirmada-2'){
    	document.getElementById("confirmedReservation2").innerHTML = final1;
        slideIndexCurrent = 2;
    }

    else  if (name === 'menu-confirma-permissao-negada'){
    	slideIndexCurrent = 3;
    }

    else if (name === 'menu-reserva-confirmada-4'){
    	document.getElementById("confirmedReservation4").innerHTML = final1;
        slideIndexCurrent = 4;
    }


	//setTimeout(function(){ currentMenu('menu-wc'); }, 3300);
}

function permissionDenied(){
	setTimeout(function(){ currentMenu('menu-wc'); }, 1500);		
}

function resTimeOut(name){
	if(name === 'menu-reserva-cancelada'){
		if(auxWc == 0){
			setTimeout(function(){ currentMenu('menu-ver-1-mapa'); }, 1000);
		}
		else if (auxWc == 1){
			setTimeout(function(){ currentMenu('menu-ver-mapa'); }, 1000);
			auxWc = 0;			
		}

		else if(auxWc == 2){
			setTimeout(function(){ currentMenu('menu-wc'); }, 1000);
			auxWc = 0;				
		}
	}

	else if(name === 'menu-cancelamento'){
		if(auxWc == 2){
			setTimeout(function(){ currentMenu('menu-wc'); }, 1000);
			auxWc = 0;
		}
	}
}

function alteraCancela(){

	var filas = ["5", "0", "0", "0"];

	document.getElementById("cancelButton").style.opacity = 1;
	document.getElementById("resButton").style.opacity = 0;
	document.getElementById("mapButton").style.opacity = 0;
	document.getElementById("disponiveis").style.opacity = 0;
	document.getElementById("resButton").onclick = function () { ""; };
	document.getElementById("mapButton").onclick = function () { ""; };
	document.getElementById("cancelButton").onclick = function () { showMenu('menu-cancela-reserva'); };
	document.getElementById("informacoes").innerHTML = "Reservado: ".concat(document.getElementById("menu-ver-mapa").getElementsByClassName("subtitle ")[slideIndex - 1].innerHTML).concat(", wc nº").concat(number.toString());
	document.getElementById("informacoes2").innerHTML = "fila: " + filas[slideIndex-1] + " pessoas";
	document.getElementById("botaoConfirma").style.zIndex = 1;	
	document.getElementById("botaoConfirma").style.opacity = 1;
	document.getElementById("mapButton").style.zIndex = 0;	
	document.getElementById("resButton").style.zIndex = 0;	
	document.getElementById("cancelButton").style.zIndex = 1;	

}


function reverteCancela(){

	document.getElementById("cancelButton").style.opacity = 0.4;
	document.getElementById("disponiveis").style.opacity = 1;
	document.getElementById("resButton").style.opacity = 1;
	document.getElementById("mapButton").style.opacity = 1;
	document.getElementById("informacoes").innerHTML = "";
	document.getElementById("informacoes2").innerHTML = "";
	document.getElementById("resButton").onclick = function () { currentMenu('menu-reservar-aut'); };
	document.getElementById("mapButton").onclick = function () { currentMenu('menu-ver-mapa');currentMenuSlide(1); };
	document.getElementById("cancelButton").onclick = function () { ""; };
	document.getElementById("botaoConfirma").style.opacity = 0;
	document.getElementById("botaoConfirma").style.zIndex = 0;	
	document.getElementById("cancelButton").style.zIndex = 0;	
	document.getElementById("mapButton").style.zIndex = 1;	
	document.getElementById("resButton").style.zIndex = 1;	


}

function cancelDenied(){
	document.getElementById("canceled").innerHTML = "Reserva não cancelada";
}

function currentMenuCancela(){
	var string = ('menu-ver-localizacao'.concat('-')).concat(slideIndexCurrent.toString()); 
	currentMenu(string);
}

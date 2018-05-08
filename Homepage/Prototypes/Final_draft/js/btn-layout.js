var menuData = {
	"lockscreen":
	{
		back:"",
		left:"currentMenu('menu-main');currentMenuSlide(1)",
		right:"currentMenu('menu-main');currentMenuSlide(1)",
		// up:"createAlarm('Alesso', 18);currentMenuSlide(1)",
		up:"",
		down:""
	},

	"alert-notif":
	{
		back:"",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-main":
	{
		back:"",
		left:"changeMenuSlide(left)",
		right:"changeMenuSlide(right)",
		up:"",
		down:""
	},

	"menu-alert":
	{
		back:"currentMenu('menu-main');currentMenuSlide(1)",
		left:"",
		right:"",
		up:"",
		down:""
	},
	
	"menu-alert-cartaz":
	{
		back:"hideAllLevelSlides(levelName);currentMenu('menu-alert');currentMenuSlide(1)",
		left:"changeLevelMenuWithLevels(-1);updateAlertHourScrollbar()",
		right:"changeLevelMenuWithLevels(1);updateAlertHourScrollbar()",
		up:"changeSlideMenuSlideLevel(left);updateAlertHourScrollbar();rotateMango(right)",
		down:"changeSlideMenuSlideLevel(right);updateAlertHourScrollbar();rotateMango(left)"
	},
	
	"menu-alert-palco":
	{
		back:"hideAllLevelSlides(levelName);currentMenu('menu-alert');currentMenuSlide(1)",
		left:"changeLevelMenuWithLevels(-1);updateAlertHourScrollbar()",
		right:"changeLevelMenuWithLevels(1);updateAlertHourScrollbar()",
		up:"changeSlideMenuSlideLevel(left);updateAlertHourScrollbar();rotateMango(right)",
		down:"changeSlideMenuSlideLevel(right);updateAlertHourScrollbar();rotateMango(left)"
	},
	
	"menu-alert-gen":
	{
		back:"hideAllLevelSlides(levelName);currentMenu('menu-alert');currentMenuSlide(1)",
		left:"changeLevelMenuWithLevels(-1);updateAlertHourScrollbar()",
		right:"changeLevelMenuWithLevels(1);updateAlertHourScrollbar()",
		up:"changeSlideMenuSlideLevel(left);updateAlertHourScrollbar();rotateMango(right)",
		down:"changeSlideMenuSlideLevel(right);updateAlertHourScrollbar();rotateMango(left)"
	},
	
	"menu-meteo":
	{
		back:"currentMenu('menu-main');currentMenuSlide(2)",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-meteo-cal":
	{
		back:"currentMenu('menu-meteo')",
		left:"changeHighlightedNumCal('left')",
		right:"changeHighlightedNumCal('right')",
		up:"changeHighlightedNumCal('up')",
		down:"changeHighlightedNumCal('down')"
	},

	"menu-meteo-loc":
	{
		back:"currentMenu('menu-meteo');currentMenuSlide(1)",
		left:"changeMenuSlide(left)",
		right:"changeMenuSlide(right)",
		up:"scrollPlaces('fav-place', 0, 1)", /*scroll up*/
		down:"scrollPlaces('fav-place', 0, -1)" /*scroll down*/
	},

	"menu-keyboard":
	{
		back:"currentMenu('menu-meteo-loc');currentMenuSlide(2)",
		left:"selectKeyboardLetter(-1)",
		right:"selectKeyboardLetter(1)",
		up:"changeKeyboardLetter(-1)",
		down:"changeKeyboardLetter(1)"
	},

	"menu-meteo-results":
	{
		back:"resetKeyboard();currentMenu('menu-keyboard');currentMenuSlide(2)",
		left:"",
		right:"",
		up:"", /*scroll up*/
		down:"" /*scroll down*/
	},

	"menu-wc":
	{
		back: "currentMenu('menu-main');showMenuSlide(1)",
		left: "changeMenuSlide(left)",
		right: "changeMenuSlide(right)",
		up:"",
		down:""
	},

	"menu-reservar-aut":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-ver-1-mapa":
	{
		back:"currentMenu('menu-reservar-aut')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-confirmar-reserva-1":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-confirmar-reserva-2":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-confirmar-reserva-4":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},


	"menu-reserva-confirmada-1":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-reserva-confirmada-2":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},


	"menu-reserva-confirmada-4":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-reserva-cancelada":
	{
		back:"",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-ver-mapa":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"changeMenuSlide(left)",
		down:"changeMenuSlide(right)"
	},

	"menu-permissao-negada":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-confirma-permissao-negada":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-cancela-permissao-negada":
	{
		back:"currentMenu('menu-ver-mapa')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-ver-localizacao-1":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-ver-localizacao-2":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-ver-localizacao-3":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},


	"menu-ver-localizacao-4":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-cancela-reserva":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	},


	"menu-cancelamento":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
	}

};
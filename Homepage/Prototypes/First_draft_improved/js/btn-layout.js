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
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-meteo-loc":
	{
		back:"currentMenu('menu-meteo')",
		left:"",
		right:"",
		up:"",
		down:""
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
		up:"rotateMango(right)",
		down:"rotateMango(left)"
	},

		"menu-reserva-confirmada":
	{
		back:"currentMenu('menu-ver-1-mapa')",
		left:"",
		right:"",
		up:"",
		down:""
	},

	"menu-reserva-cancelada":
	{
		back:"currentMenu('menu-ver-1-mapa')",
		left:"",
		right:"",
		up:"",
		down:""
	}
};
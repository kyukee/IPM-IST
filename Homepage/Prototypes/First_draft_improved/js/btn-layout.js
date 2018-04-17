var menuData = {
	"lockscreen":
	{
		back:"",
		left:"currentMenu('menu-main');currentMenuSlide(1)",
		right:"currentMenu('menu-main');currentMenuSlide(1)",
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
	
	"menu-wc":
	{
		back: "currentMenu('menu-main');showMenuSlide(1)",
		left: "changeMenuSlide(left)",
		right: "changeMenuSlide(right)",
		up:"",
		down:""
	},

	"menu-alert-gen":
	{
		back:"hideAllLevelSlides(levelName);currentMenu('menu-main');currentMenuSlide(5)",
		left:"changeSlideMenuSlideLevel(left)",
		right:"changeSlideMenuSlideLevel(right)",
		up:"changeLevelMenuWithLevels(-1);rotateMango(right)",
		down:"changeLevelMenuWithLevels(1);rotateMango(left)"
	},
	
	"menu-cartaz":
	{
		back:"hideAllLevelSlides(levelName);currentMenu('menu-main');currentMenuSlide(1)",
		left:"changeLevelMenuWithLevels(-1);updateAlertHourScrollbar()",
		right:"changeLevelMenuWithLevels(1);updateAlertHourScrollbar()",
		up:"changeSlideMenuSlideLevel(left);updateAlertHourScrollbar();rotateMango(right)",
		down:"changeSlideMenuSlideLevel(right);updateAlertHourScrollbar();rotateMango(left)"
	},

	"menu-reservar-aut":
	{
		back:"currentMenu('menu-wc')",
		left:"",
		right:"",
		up:"",
		down:""
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
	}
};
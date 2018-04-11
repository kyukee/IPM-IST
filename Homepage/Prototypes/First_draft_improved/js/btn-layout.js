var menuData = {
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
	
	"menu-alert-art":
	{
		back:"currentMenu('menu-main');currentMenuSlide(1)",
		left:"currentMenu('menu-alert-gen');currentSlideMenuWithLevels(1);alertChangeTab('gen')",
		right:"currentMenu('menu-alert-hour');currentSlideMenuWithLevels(1);alertChangeTab('hour');updateAlertHourScrollbar()",
		up:"",
		down:""
	},
	
	"menu-alert-gen":
	{
		back:"currentMenu('menu-main');currentMenuSlide(1)",
		left:"hideAllLevelSlides(levelName);currentMenu('menu-alert-hour');currentSlideMenuWithLevels(1);alertChangeTab('hour');updateAlertHourScrollbar()",
		right:"hideAllLevelSlides(levelName);currentMenu('menu-alert-art');currentMenuSlide(1);alertChangeTab('art')",
		up:"changeLevelMenuWithLevels(-1);rotateMango(right)",
		down:"changeLevelMenuWithLevels(1);rotateMango(left)"
	},
	
	"menu-alert-hour":
	{
		back:"currentMenu('menu-main');currentMenuSlide(1)",
		left:"hideAllLevelSlides(levelName);currentMenu('menu-alert-art');currentMenuSlide(1);alertChangeTab('art')",
		right:"hideAllLevelSlides(levelName);currentMenu('menu-alert-gen');currentSlideMenuWithLevels(1);alertChangeTab('gen')",
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
	}
};
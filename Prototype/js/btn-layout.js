var menuData = {
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
		back:"currentMenu('menu-main');showMenuSlide(1)",
		left:"changeMenuSlide(left)",
		right:"changeMenuSlide(right)",
		up:"rotateMango(right)",
		down:"rotateMango(left)"
	}
};
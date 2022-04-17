const app = {};

app.setupSlideOutNav = () => {
	const toggleBtnElem = document.querySelector("#toggle-btn");
	const slideOutNavCheckboxElem = document.querySelector(
		"#open-slide-out-menu"
	);
	// close slide out menu on refresh
	slideOutNavCheckboxElem.checked = false;

	// close slide out menu
	toggleBtnElem.addEventListener("click", () => {
		slideOutNavCheckboxElem.checked = false;
	});
};

app.init = () => {
	app.setupSlideOutNav();
};

app.init();

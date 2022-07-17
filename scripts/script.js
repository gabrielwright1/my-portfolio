// modules
import { modalData } from "./modal.js";

// namespacing object
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

app.displayModalContent = (iconData) => {
	const modalTitle = document.querySelector("#modal-title");
	modalTitle.textContent = `What is ${iconData.id}?`;

	const modalBody = document.querySelector("#modal-body");
	modalBody.textContent = iconData.body;

	const modalLink = document.querySelector("#modal-link");
	modalLink.setAttribute("href", iconData.link);
};

app.getModalContent = async (event) => {
	// determine which element was clicked by user
	const iconId = event.target.id;

	// find modal details matching iconId
	const iconData = modalData.find((item) => item.id === iconId);
	app.displayModalContent(iconData);
};

app.setupModal = () => {
	// Get the modal
	const modal = document.getElementById("modal");

	// Get the button that opens the modal
	const iconElems = document.querySelectorAll(".icon");

	// Get the <span> element that closes the modal
	const span = document.getElementsByClassName("close")[0];

	// When the user clicks the toolkit icon, open the modal
	iconElems.forEach((iconElem) => {
		iconElem.addEventListener("click", (event) => {
			modal.style.display = "block";
			app.getModalContent(event);
		});
	});

	// When the user clicks on <span> (x), close the modal
	span.addEventListener("click", () => {
		modal.style.display = "none";
	});

	// When the user clicks anywhere outside of the modal, close it
	window.addEventListener("click", (event) => {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	});
};

app.appendListener = (btn) => {
	// add unclick logic to button
	btn.addEventListener("click", (e) => {
		app.handleUnclick(e);
	});
};

app.handleUnclick = (e) => {
	// remove the hover/focus state on the button
	e.target.blur();
};

app.setupButtons = () => {
	// taget all buttons on page
	const allBtns = document.querySelectorAll(".sm-button, .lg-button");

	// append click listener to trigger unclick callback function
	allBtns.forEach((btn) => {
		app.appendListener(btn);
	});
};

app.scrollToTop = () => {
	// scroll to top of page
	window.scrollTo(0, 0);
};

app.setupBottomLink = () => {
	const bottomLink = document.querySelector("#bottom-link");
	// when user clicks on "back to top" link, autoscrolls to top of page
	bottomLink.addEventListener("click", app.scrollToTop);
};

app.autoResizeTextArea = () => {
	const message = document.querySelector("#message");

	// force the textarea to grow/shrink rather than show scrollbar
	message.addEventListener("input", function () {
		this.style.height = "40px";
		this.style.height = this.scrollHeight + "px";
	});
};

app.init = () => {
	app.setupSlideOutNav();
	app.setupModal();
	app.autoResizeTextArea();
	app.setupButtons();
	app.setupBottomLink();
};

// document ready
$(() => {
	app.init();
});

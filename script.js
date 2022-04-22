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

	// fetch modal content from local json file
	const response = await fetch("./modal-text.json");
	const modalData = await response.json();

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

app.init = () => {
	app.setupSlideOutNav();
	app.setupModal();
};

app.init();

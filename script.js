// namespacing object
const app = {};

app.modalData = [
	{
		id: "html5",
		body: "HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way.",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
	},
	{
		id: "css3",
		body: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
	},
	{
		id: "sass",
		body: "Sass is a stylesheet language that's compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.",
		source: "Sass Language Documentation",
		link: "https://sass-lang.com/documentation",
	},
	{
		id: "javascript",
		body: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
	},
	{
		id: "jquery",
		body: "jQuery is a JavaScript Library that focuses on simplifying DOM manipulation, AJAX calls, and Event handling. jQuery uses a format, $(selector). action() to assign an element(s) to an event.",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Glossary/jQuery",
	},
	{
		id: "node",
		body: "Node (or more formally Node. js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context (i.e. running directly on a computer or server OS).",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
	},
	{
		id: "react",
		body: "React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications.",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
	},
	{
		id: "git",
		body: "Git is a free, open-source, distributed Source Code Management (SCM) system. It facilitates handling code bases with distributed development teams",
		source: "Mozilla Developer Network Documentation",
		link: "https://developer.mozilla.org/en-US/docs/Glossary/Git",
	},
	{
		id: "figma",
		body: "Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows",
		source: "Figma Documentation",
		link: "https://help.figma.com/hc/en-us",
	},
	{
		id: "sketch",
		body: "Sketch is the all-in-one platform for digital design — with collaborative design tools, prototyping and developer handoff. It runs on Mac OS.",
		source: "Sketch Documentation",
		link: "https://www.sketch.com/docs/",
	},
	{
		id: "invision",
		body: "InVision is the online whiteboard and productivity platform that allows designers to create, manage, and test prototypes for user interfaces.",
		source: "InVision Documentation",
		link: "https://support.invisionapp.com/hc/en-us/categories/360001714711-Product-Documentation",
	},
	{
		id: "firebase",
		body: "Firebase is a database platform that allows developers to create iOS, Android, and Web applications. Firebase provides backend services such as realtime database, cloud storage, authentication, and more.",
		source: "Firebase Documentation",
		link: "https://firebase.google.com/docs",
	},
];

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
	const iconData = app.modalData.find((item) => item.id === iconId);
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
	$("#message")
		.each(function () {
			this.setAttribute(
				"style",
				"height:" + this.scrollHeight + "px;overflow-y:hidden;"
			);
		})
		.on("input", function () {
			this.style.height = "40px";
			this.style.height = this.scrollHeight + "px";
		});
};

// app.handleSubmit = (e) => {
// 	e.preventDefault();
// };

app.setupForm = () => {
	const form = document.querySelector("form");
	form.addEventListener("submit", app.handleSubmit);
};

app.init = () => {
	app.setupSlideOutNav();
	app.setupModal();
	app.autoResizeTextArea();
	app.setupButtons();
	// app.setupForm();
	app.setupBottomLink();
};

// document ready
$(() => {
	app.init();
});

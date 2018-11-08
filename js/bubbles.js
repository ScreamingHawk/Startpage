/* Configuration vars */

// Hero timing
const toggleHeroInterval = 20000;
// Circle config
const circleMin = 5000;
const circleMax = 20000;
const newCircleMin = 2000;
const newCircleMax = 8000;
const circleWidthMin = 10;
const circleWidthMax = 50;


/* Helpers */

function toggleClass(id, className){
	document.getElementById(id).classList.toggle(className);
}

function randomInt(max, min) {
	if (!min){
		min = 0;
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomBool() {
	return randomInt(1) > 0;
}
function hexToString(hex){
	return hex.toString(16);
}
function hexArrayToString(arr){
	let s = "";
	for (let i = 0; i < arr.length; i++){
		s += ("00" + hexToString(arr[i])).slice(-2);
	}
	return s;
}
function randomPastel(){
	return "hsl(" + randomInt(360) + ", 100%, 87.5%)";
}
function smallest(a, b){
	return (a < b) ? a : b;
}
function smallestWidthHeight(){
	return smallest(document.body.clientWidth, document.body.clientHeight);
}


/* Generative functions */

function breathe(){
	console.log("breathe...");
	const when = randomInt(newCircleMax, newCircleMin);
	console.log(when);
	setTimeout(doCircle, when);
}

function doCircle(){
	const when = randomInt(circleMax, circleMin);

	const circle = document.createElement("div");
	// Styles
	circle.className = "circle fade-out";
	// Transition
	circle.style.transition = "opacity " + Math.floor(when / 1000) + "s linear";
	// Colour
	circle.style.backgroundColor = randomPastel();
	// Size
	const browserW = smallestWidthHeight();
	const w = randomInt(browserW * circleWidthMax / 100,
			browserW * circleWidthMin / 100);
	circle.style.width = w + "px";
	circle.style.height = w + "px";
	// Position
	circle.style.left = Math.floor(randomInt(document.body.clientWidth) - (w/2)) + "px";
	circle.style.top = Math.floor(randomInt(document.body.clientHeight) - (w/2)) + "px";

	document.body.appendChild(circle);

	// Begin transition
	setTimeout(() => {
		circle.classList.remove("fade-out"); // Ease in

		setTimeout(() => {
			circle.classList.add("fade-out"); // Ease out

			setTimeout(() => {
				circle.parentNode.removeChild(circle); // Clear DOM
			}, when + 1000);
		}, when);

		breathe();
	}, 1000);
}


/* Init */

function init(){
	document.body.style.backgroundColor = randomPastel();

	breathe();
	setInterval(toggleHero, toggleHeroInterval);
}
function toggleHero(){
	toggleClass("hero", "fade-out");
}


/* Begin */

init();

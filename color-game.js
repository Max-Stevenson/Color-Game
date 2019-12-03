var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

function init() {
	setupModeButtons();
	setupSquares();
	reset();
};

function setupModeButtons() {
	for (let i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	};
};

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		};
	};
};

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
		squares[i].addEventListener("click", function () {
			var clickedSquareColor = this.style.backgroundColor;
			if (clickedSquareColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedSquareColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?"
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			};
		});
	};
};

resetButton.addEventListener("click", function () {
	reset();
});

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	};
};

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	};
	return arr;
};

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")"
};

init();
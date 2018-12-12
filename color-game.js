var colors = generateRandomColors(6)

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

colorDisplay.textContent = pickedColor;

reset.addEventListener("click", function(){
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]
	}
	h1.style.backgroundColor = "#232323";
	reset.textContent = "New Colors";
});

easyButton.addEventListener("click", function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardButton.addEventListener("click", function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]
	squares[i].addEventListener("click", function(){
		var clickedSquareColor = this.style.backgroundColor;
		if (clickedSquareColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedSquareColor);
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "Play Again"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")"
}
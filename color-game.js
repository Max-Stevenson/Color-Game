var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("color-display");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]
	squares[i].addEventListener("click", function(){
		var clickedSquareColor = this.style.backgroundColor;
		if (clickedSquareColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedSquareColor);
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
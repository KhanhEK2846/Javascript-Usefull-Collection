const move = document.getElementById("move");
const X = document.getElementById("x");
const Y = document.getElementById("y");
const W = document.getElementById("w");
const H = document.getElementById("h");

function Update(moving) {
	move.textContent = moving ? "YES" : "NO";
	move.style.color = moving ? "red" : "blue";

	X.textContent = window.screenX;
	Y.textContent = window.screenY;
	W.textContent = window.outerWidth;
	H.textContent = window.outerHeight;
}

var oldX = window.screenX;
var oldY = window.screenY;

setInterval(Check, 100);

function Check() {
	const isMove = oldX != window.screenX || oldY != window.screenY;
	Update(isMove);

	oldX = window.screenX;
	oldY = window.screenY;
}

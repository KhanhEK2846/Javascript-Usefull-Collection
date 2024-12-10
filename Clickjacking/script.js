const btn = document.getElementById("btn");
const value = document.getElementById("value");

btn.addEventListener("click", () => {
	value.textContent = Number(value.textContent) + 1;
});

window.addEventListener("mousemove", (e) => {
	btn.style.top = e.pageY - 50 + "px";
	btn.style.left = e.pageX - 100 + "px";
});
window.addEventListener("keyup", () => {
	btn.style.background = "white";
});

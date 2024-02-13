const items = document.getElementById("data");
let nextItem = 25;

window.addEventListener("scroll", () => {
	if (
		window.scrollY + window.innerHeight >=
		document.documentElement.scrollHeight
	) {
		for (let i = 0; i < 5; i++) {
			const li = document.createElement("li");
			li.textContent = `Item ${nextItem++}`;
			items.appendChild(li);
		}
	}
});

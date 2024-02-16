const container_click = document.getElementById("contain_click");

container_click.addEventListener("mousemove", () => {
	const x = Math.floor(Math.random() * (window.innerWidth - 150));
	const y = Math.floor(Math.random() * (window.innerHeight - 150));

	container_click.style.left = `${x}px`;
	container_click.style.top = `${y}px`;
});

const btn = document.getElementById("ScrollBack");
const doc = document.documentElement;

document.addEventListener("scroll", () => {
	const scrollTo = doc.scrollHeight - doc.clientHeight;

	if (doc.scrollTop / scrollTo >= 0.01) btn.hidden = false;
	else btn.hidden = true;
});

btn.addEventListener("click", () => {
	doc.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

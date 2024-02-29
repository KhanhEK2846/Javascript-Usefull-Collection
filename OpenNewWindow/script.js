function NewWindow() {
	window
		.open(location.href, "_blank", "width=250,height=250", true)
		.moveTo(
			Math.floor(Math.random() * window.screen.availWidth),
			Math.floor(Math.random() * window.screen.availHeight)
		);
	window.close();
}

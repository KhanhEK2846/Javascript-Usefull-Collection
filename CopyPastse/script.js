const btnCopy = document.getElementById("btnCopy");
const btnPaste = document.getElementById("btnPaste");
const alert = document.getElementById("alert");
const textCopy = document.getElementById("copy");
const textPaste = document.getElementById("paste");

function showAlert(mess) {
	alert.textContent = mess;
	alert.hidden = false;
}

btnCopy.addEventListener("click", async () => {
	if (!textCopy.value) {
		showAlert("Nothing to Copy");
		return;
	}
	try {
		await navigator.clipboard.writeText(textCopy.value);
		showAlert("Text copied");
	} catch (err) {
		console.error(err.message);
	}
});

btnPaste.addEventListener("click", async () => {
	try {
		const text = await navigator.clipboard.readText();

		if (!text.length) {
			showAlert("Nothing to Paste");
			return;
		}

		textPaste.value += text;
		showAlert("Text Pasted");
	} catch (err) {
		textPaste.focus();
		document.execCommand("paste");
		showAlert("Text Pasted");
	}
});

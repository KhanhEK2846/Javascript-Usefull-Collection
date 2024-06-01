const noti = document.getElementById("Noti");
const pass = document.getElementById("password");

pass.addEventListener("keyup", (event) => {
	if (event.getModifierState("CapsLock")) {
		noti.hidden = false;
	} else {
		noti.hidden = true;
	}
});

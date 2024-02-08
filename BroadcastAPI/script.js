const receiver = document.getElementById("Receiver");
const send = document.getElementById("Send");
const id = document.getElementById("id");
const broadcastChannel = new BroadcastChannel("Hello_World");

const urlParams = new URLSearchParams(window.location.search);

id.textContent = urlParams.get("id") === null ? "unknow" : urlParams.get("id");

broadcastChannel.onmessage = function (event) {
	receiver.textContent = event.data.messange;
};

send.addEventListener("change", () => {
	if (urlParams.get("id") === null) return;

	broadcastChannel.postMessage({
		messange: send.value,
	});
});

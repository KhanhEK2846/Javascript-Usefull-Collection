const btn = document.getElementById("btn");
const video = document.getElementById("video");
const download = document.getElementById("download");
const canvas = document.querySelector("canvas");

async function streamWebcam() {
	const stream = await navigator.mediaDevices.getUserMedia({
		video: true,
	});

	video.srcObject = stream;
}

streamWebcam();

btn.addEventListener("click", () => {
	const ctx = canvas.getContext("2d");
	ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	download.href = canvas.toDataURL("image/png");
	download.hidden = false;
});

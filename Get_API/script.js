fetch('https://cloudflare.com/cdn-cgi/trace')
.then(r => r.text())
.then(text => {
    for (var index in text.split("\n"))
    {
        document.getElementById('wrap').innerHTML += text.split("\n")[index] + "<br>"
    }
})
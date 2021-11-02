var canvas1 = document.getElementById("canvas1");
var context1 = canvas1.getContext("2d");
context1.strokeStyle = "red";
context1.fillStyle = "rgba(0, 0, 255, 0.5)";
context1.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("canvas2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var img = new Image();
    img.src = "img/banner.jpg";
    img.onload = function () {
        var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fillRect(10, 10, 100, 100);
        context.strokeRect(10, 10, 100, 100);
    };
}

function drawGradient() {
    var canvas = document.getElementById("canvas3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "white");
    context.fillStyle = gradient;
    context.fillRect(10, 10, 100, 100);
    context.strokeRect(10, 10, 100, 100);
}

function drawCircle() {
    var canvas = document.getElementById("canvas4");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(50, 50, 30, 0, Math.PI * 2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

function DownloadCanvasAsImage() {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    let canvas = document.getElementById('canvas4');
    let dataURL = canvas.toDataURL('image/png');
    let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
    downloadLink.setAttribute('href', url);
    downloadLink.click();
}

var button4 = document.getElementById("saveButton");
button4.addEventListener("click", DownloadCanvasAsImage, false);
function alertf() {
    window.alert("This is an alert");
}

function ConfirmF() {
    window.confirm('Do you wish to continue?');
}

function PromptF() {
    window.prompt('Please enter your name:');
}

function BrowserF() {
    let navegador = window.navigator.userAgent;
    window.alert("Your Browser is: " + navegador);
}

function LocationF() {
    let lugar = window.location.href;
    window.alert("Your Location is: " + lugar);
}

function ProtocolF() {
    let protocolo = window.location.protocol;
    window.alert("Your Protocol is: " + protocolo);
}

function HostF() {
    let Domain = window.location.host;
    window.alert("Your Host is: " + Domain);
}

function HostNameF() {
    let HostName = window.location.hostname;
    window.alert("Your HostName is: " + HostName);
}

function PortF() {
    let Puerto = window.location.port;
    window.alert("Your Port is: " + Puerto);
}

function PathNameF() {
    let PathName = window.location.pathname;
    window.alert("Your Path Name is: " + PathName);
}

function PopUpF() {
    const popup = window.open('https://sitepoint.com', ' SitePoint', 'width=400,height=400,resizable=yes');
}

function PopUpCloseF() {
    const popup = window.open('https://sitepoint.com', ' SitePoint', 'width=400,height=400,resizable=yes');
    popup.close();
}

function ScreenInfoF() {
    window.alert("Your Screen Height is: " + window.screen.height + "\n Your Screen Width is: " + window.screen.width + "\n Your Screen Avail Width is: " + window.screen.availWidth + "\n Your Screen Avail Height is: " + window.screen.availHeight + "\n Your Color Depth is: " + window.screen.colorDepth);
}

function DocWriteF() {
    document.write('Hello, world!');
}

function TimeoutF() {
    window.setTimeout(() => alert("Time's Up!"), 3000);
}

function AnimationF() {
    const squareElement = document.getElementById('square');
    let angle = 0;
    setInterval(() => {
        angle = (angle + 2) % 360;
        squareElement.style.transform = `rotate(${angle}deg)`
    }, 1000 / 60);
}

function DataPowers() {
    const superman = document.getElementById('hero');
    const powers = superman.dataset.powers;
    const Shower = document.getElementById("hero-result");
    Shower.innerHTML = powers;
}

function LocalStorageF() {
    const LocalInputStr = document.getElementById("locals").value;
    localStorage.setItem('name', LocalInputStr);
    window.alert("Your data: " + LocalInputStr + ", was saved succesfully");
}

function LoadStorageF() {
    window.alert(localStorage.getItem('name'));
}

function DeleteStorageF() {
    delete localStorage.name;
    window.alert("Your data was deleted succesfully");
}

function GeolocationF() {
    navigator.geolocation.getCurrentPosition(youAreHere);

    function youAreHere(position) {
        window.alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
    }
}

function FactorizorF() {
    const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'rebeccapurple', 'violet'];
    document.getElementById("outputFactorizor").style.background = rainbow[Math.floor(7 * Math.random())];
    const numberInput = document.getElementById("numberF").value;
    const number = Number(numberInput);
    document.getElementById('outputFactorizor').innerText = factorsOf(number);
}

function factorsOf(n) {
    if (Number.isNaN(Number(n))) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if (n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if (!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i = 1, max = Math.sqrt(n); i <= max; i++) {
        if (n % i === 0) {
            factors.push(i, n / i);
        }
    }
    return factors.sort((a, b) => a - b);
}

function Notifications1F() {
    let permission = Notification.permission;
    if (permission === "granted") {
        showNotification();
    } else if (permission === "default") {
        requestAndShowPermission();
    } else {
        alert("Use normal alert");
    }
}

function showNotification() {
    if (document.visibilityState === "visible") {
        return;
    }
    var title = "JavaScript Jeep";
    var body = "Message to be displayed";
    var notification = new Notification('Title', {
        body,
        icon
    });
    notification.onclick = () => {
        notification.close();
        window.parent.focus();
    }
}

function requestAndShowPermission() {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            showNotification();
        }
    });
}

function DranwCF() {
    const canvasElement = document.getElementById('canvas');
    const context = canvasElement.getContext('2d');
    context.fillStyle = "#0000cc"; // a blue fill color
    context.strokeStyle = "#ccc"; // a gray stroke color
    context.lineWidth = 4;
    context.fillRect(10, 10, 100, 50);
    context.strokeRect(10, 100, 100, 50);
    context.beginPath();
    context.moveTo(130, 50);
    context.lineTo(180, 50);
    context.moveTo(155, 50);
    context.lineTo(155, 90);
    context.strokeStyle = '#c00';
    context.lineWidth = 15;
    context.stroke();
    context.beginPath();
    context.arc(200, 200, 30, 0, Math.PI * 2, false);
    context.strokeStyle = '#ff0';
    context.lineWidth = 4;
    context.stroke();
    context.fillStyle = '#0c0'; // a blue fill color
    context.font = 'bold 26px sans-serif';
    context.fillText('Hello', 20, 200);

}
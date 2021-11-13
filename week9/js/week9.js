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
    const rainbow = ['red','orange','yellow','green','blue','rebeccapurple','violet'];
    document.body.style.background = rainbow[Math.floor(7* Math.random())];
}
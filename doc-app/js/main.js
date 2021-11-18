document.getElementById("menu-btn").addEventListener("click", () => {
    var mobileMenu = document.getElementsByTagName("NAV")[0];
    if (mobileMenu.classList == "" || mobileMenu.classList == "desactivate-menu") {
        mobileMenu.classList.remove("desactivate-menu");
        mobileMenu.classList.add("active-menu");
    } else {
        mobileMenu.classList.add("desactivate-menu");
        setTimeout(function () {
            mobileMenu.classList.remove("active-menu");
            mobileMenu.classList.remove("desactivate-menu");
        }, 500);
    }
});

document.getElementById("close-btn").addEventListener("click", () => {
    var mobileMenu = document.getElementsByTagName("NAV")[0];
    if (mobileMenu.classList == "" || mobileMenu.classList == "desactivate-menu") {
        mobileMenu.classList.remove("desactivate-menu");
        mobileMenu.classList.add("active-menu");
    } else {
        mobileMenu.classList.add("desactivate-menu");
        setTimeout(function () {
            mobileMenu.classList.remove("active-menu");
            mobileMenu.classList.remove("desactivate-menu");
        }, 500);
    }
});

document.getElementsByTagName("MAIN")[0].addEventListener("click", () => {
    var mobileMenu = document.getElementsByTagName("NAV")[0];
    if (mobileMenu.classList == "") {

    } else {
        mobileMenu.classList.add("desactivate-menu");
        setTimeout(function () {
            mobileMenu.classList.remove("active-menu");
            mobileMenu.classList.remove("desactivate-menu");
        }, 500);
    }
});

window.onload = function() {
    getCurrentLink();
  };
//Get the Current Link
function getCurrentLink() {
	var urlString, urlArray, pageHREF, menu, i, currentURL;
    urlString = document.location.href;
    urlArray = urlString.split('/');
    pageHREF = urlArray[urlArray.length - 1];

    if (pageHREF !== "") {
        menu = document.querySelectorAll('ul li a');
        for (i = 0; i < menu.length; i++) {
            currentURL = (menu[i].getAttribute('href'));
            menu[i].className = '';
            if (currentURL === pageHREF) {
                menu[i].className = 'active';
            }
        }
    }
}
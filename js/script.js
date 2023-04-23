//header scroll
var prevScroll = window.pageYOffset;

window.onscroll = function () {
    var currentScroll = window.pageYOffset;

    if (prevScroll > currentScroll) {
        document.getElementById('header').style.top = '0';
    } else {
        document.getElementById('header').style.top = '-200px';
    }
    prevScroll = currentScroll
}

//hamburger animation | navigational menu

var navbar = document.getElementById('navbarnav');
var iconbar = document.getElementById('iconbar');
var body = document.getElementById('body');
var contact = document.getElementById('contact');

function myFunction(x) {
    if (navbar.style.opacity === '1') {
        navbar.style.opacity = '0';

        body.style.overflowY = 'scroll';
    } else {
        navbar.style.opacity = '1';
    }
    x.classList.toggle('display');



}


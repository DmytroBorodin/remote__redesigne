"use strict"
let win = document.querySelector('html');
let nav = document.querySelector('.nav');
let menu = document.querySelector('.header__nav');
let login = document.querySelector('.header__login');

let lastScrollTop = 0;

window.onscroll = onScroll;
function onScroll (e) {
    var top = window.pageYOffset;
    if (lastScrollTop > top) {
    	 nav.classList.remove('transparent');
		menu.classList.remove('transparent__content');
		login.classList.remove('transparent__content');
    } else if (lastScrollTop < top) {
		nav.classList.add('transparent');
		menu.classList.add('transparent__content');
		login.classList.add('transparent__content');
    }
    lastScrollTop = top;
}

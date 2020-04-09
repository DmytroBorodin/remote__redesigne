"use strict"
let win = document.querySelector('html');
let nav = document.querySelector('.nav');
let menu = document.querySelector('.header__nav');
let login = document.querySelector('.header__login');
let body = document.querySelector('body');

let lastScrollTop = 0;

//hide navbar vy scrolling

window.onscroll = onScroll;
function onScroll (e) {
    var top = window.pageYOffset; // how much scroll from top;
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

// show/hide navbar menu window 

let winWrap = document.querySelector('.windows__wrap'); // navbar menu window
let listItem = document.querySelector('.list__item');   // navbar menu item
let closeBtn = document.querySelector('.close__btn');   // button to close menu window

listItem.addEventListener('mouseover', function(){
	winWrap.classList.remove('hidden__block');
	nav.classList.add("border__nav");
	body.classList.add('lock');
})

closeBtn.addEventListener('click', function(){
	winWrap.classList.add('hidden__block');
	nav.classList.remove('border__nav');
	body.classList.remove('lock');
})

// show/hide second-submenu of first-submenu 

let firstMenuItem = document.querySelectorAll('.first__link'); // select menu items
let secondMenu = document.getElementsByClassName('second-inner__menu__block'); // select array of blocks with second submenu
firstMenuItem.forEach(function(entry){
	entry.addEventListener('mouseover', function(){     // entry - first-submenu list item with own id
		let indent = entry.id;
		for (let i = 0; i<secondMenu.length; i++){      // finds array items with the idname = id of entry and shows this block
			if (secondMenu[i].classList.contains('shown__block')){
				secondMenu[i].classList.remove('shown__block');
			}
			secondMenu[i].classList.add('hidden__block');
			let idName = secondMenu[i].getAttribute('idname');
			if (indent == idName){
				secondMenu[i].classList.add('shown__block');
			}
		}
	});
})

// show/hide info__blocks of second-submenu`s items.

let workflowLink = document.querySelectorAll('.workflow__list__link');
let innerInfo = document.getElementsByClassName('inner-info__block');
workflowLink.forEach(function(entry){
	entry.addEventListener('mouseover', function(){
		let indent = entry.id;
		for (let i = 0; i < innerInfo.length; i++){
			console.log(innerInfo);
			if (innerInfo[i].classList.contains('shown__block')){
				innerInfo[i].classList.remove('shown__block');
			}
			let idName = innerInfo[i].getAttribute('idname');
			innerInfo[i].classList.add('hidden__block');
			if(indent ==idName){
				innerInfo[i].classList.add('shown__block');
			}
		}
	});
});

// add class active to first-submenus's item with 'mousover'

let firstMenuList = document.querySelector('.first__menu__list');
let listItems = firstMenuList.getElementsByClassName('first__menu__item');

for(let i = 0; i < listItems.length; i++){
	listItems[i].addEventListener('mouseover', function(){
		let current = document.getElementsByClassName('active');
		console.log(current);
		current[0].className = current[0].className.replace(" active", "");
    	this.className += " active";
	})
}

// add class active to second-submenus's item with 'mousover'

let secondMenuLists = document.getElementsByClassName('itworkflow__list');
for (let i = 0; i < secondMenuLists.length; i++){
	let secondMenuList = secondMenuLists[i];
	let secondListItems = secondMenuList.getElementsByClassName('first__menu__item'); 
	for (let j = 0; j < secondListItems.length; j++){
		secondListItems[j].addEventListener('mouseover', function(){
			let current = secondMenuList.getElementsByClassName('active');
			current[0].className = current[0].className.replace(" active", "");
    		this.className += " active";
		})
		

	}
};

//video modal window
let videoBtn = document.querySelector('.video__btn');
let videoCloseBtn = document.querySelector('.video__close__btn');
let modalVideo = document.querySelector('.video__block');
let video  = document.querySelector('.video');
let url = video.getAttribute('src');

videoBtn.addEventListener('click', function(){
	video.setAttribute('src', url);
	modalVideo.classList.remove('video__hidden');
	body.classList.add('lock');
})
videoCloseBtn.addEventListener('click', function(){
	video.setAttribute('src', '');
	modalVideo.classList.add('video__hidden');
	body.classList.remove('lock');
})
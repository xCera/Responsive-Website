const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-links li');

navLinks.forEach((link) => link.addEventListener('click', removeMenu));

var isMobile;

function removeMenu() {
	if (window.screen.width < 1280) {
		isMobile = true;
	} else {
		isMobile = false;
		return;
	}
	let nav = document.querySelector('.nav-links');
	nav.classList.toggle('nav-active');
	burger.classList.toggle('burgerAnim');
	document.querySelector('body').classList.toggle('disableScroll');
}

burger.addEventListener('click', () => {
	let nav = document.querySelector('.nav-links');
	nav.classList.toggle('nav-active');
	burger.classList.toggle('burgerAnim');
	document.querySelector('body').classList.toggle('disableScroll');
});

window.onscroll = function() {
	stickyNavbar();
};

var navbar = document.querySelector('#navbar');
var scrollIcon = document.querySelector('.scrolltotop');

function stickyNavbar() {
	let sticky = navbar.offsetTop + 350;
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
		scrollIcon.style.display = 'inline';
	} else {
		navbar.classList.remove('sticky');
		scrollIcon.style.display = 'none';
	}
}

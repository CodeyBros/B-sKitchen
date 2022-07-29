const hamburgerIcon = document.querySelector('.hamburger-icon');
const closeIcon = document.querySelector('.close-icon');
const navList = document.querySelector('.nav-list');
const navBgOverlay = document.querySelector('.navBgOverlay');


hamburgerIcon.addEventListener('click', navOpen);
closeIcon.addEventListener('click', navClose);
navBgOverlay.addEventListener('click', navClose);

function navOpen() {
    navList.classList.add('show');
    navBgOverlay.classList.add('active');
    document.body.style = 'visibility: visible; height: 100vh; width: 100vw; overflow: hidden;';
}
function navClose() {
    navList.classList.remove('show');
    navBgOverlay.classList.remove('active');
    document.body.style = 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}


// AOS Animation
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-buttom'
});


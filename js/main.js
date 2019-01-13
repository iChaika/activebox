let menuBlock = document.querySelector('.header-nav'),
    menuButton = document.querySelector('.menu-responsive'),
    menuButtonClose = document.querySelector('.menu-responsive-close'), 
    menuHref = document.querySelectorAll('.menu li a');

menuButton.addEventListener('click', function() {
    menuBlock.classList.add('show');
    document.body.classList.add('no-scroll');
});

menuButtonClose.addEventListener('click', function() {
    menuBlock.classList.remove('show');
    document.body.classList.remove('no-scroll');
});

for(let i = 0; i < menuHref.length; i++) {
    menuHref[i].addEventListener('click', function(e) {
        menuBlock.classList.remove('show');
        document.body.classList.remove('no-scroll');
    });
};
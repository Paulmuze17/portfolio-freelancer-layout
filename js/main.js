const headerMenu = document.querySelector('#header-menu');
const headerMenuMobileBtn = document.querySelector('#header-menu-mobile-btn');
const headerMenuMobileBtnImage = document.querySelector('#header-menu-mobile-btn__image');

function headerMenuMobileBtnClick() {
    if(headerMenu.classList.toggle('mobile-menu-open')) {
        headerMenuMobileBtnImage.src = '/img/icons/nav-close.svg';
        // console.log('1')
    } else {
        headerMenuMobileBtnImage.src = '/img/icons/nav-open.svg';
        // console.log('2')

    }
}

// AOS.init();
AOS.init(
    {once: true,
    disable: 'mobile'}
);
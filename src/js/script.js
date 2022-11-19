'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    hamburger = document.querySelector('.hamburger');
    const lang = document.querySelector('.lang');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    

    lang.addEventListener('click', () => {
        let a = lang.classList.toggle('lang_active');
        if(a) {
            document.querySelector('.name').innerHTML = 'Константин Машков';
            document.querySelector('.lang2').innerHTML = 'ENG';
            document.querySelector('.home').innerHTML = 'Главная';
            document.querySelector('.portf').innerHTML = 'Портфолио';
            document.querySelector('.contact').innerHTML = 'Контакты';
            document.querySelector('.header__subtitle').innerHTML = 'Верстка, создание сайтов, веб-разработка';
        }
        else {
            document.querySelector('.name').innerHTML = 'Konstantin Maschkov';
            document.querySelector('.lang2').innerHTML = 'RU';
            document.querySelector('.home').innerHTML = 'Home';
            document.querySelector('.portf').innerHTML = 'Portfolio';
            document.querySelector('.contact').innerHTML = 'Contact';
            document.querySelector('.header__subtitle').innerHTML = 'Layout, Website creation, Web-development';
        }
    });
});

// document.querySelector('.name').innerHTML = 'dsada';








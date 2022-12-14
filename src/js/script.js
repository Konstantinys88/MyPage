'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    hamburger = document.querySelector('.hamburger');
    const lang = document.querySelector('.lang');

    // Всплывающее меню
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });

    // Смена языка
    lang.addEventListener('click', () => {
        let languageСhange = lang.classList.toggle('lang_active');
        if(languageСhange) {
            // Header
            document.querySelector('.name').innerHTML = 'Константин Машков';
            document.querySelector('.lang2').innerHTML = 'ENG';
            document.querySelector('.home').innerHTML = 'Главная';
            document.querySelector('.portf').innerHTML = 'Портфолио';
            document.querySelector('.contact').innerHTML = 'Контакты';
            document.querySelector('.header__subtitle').innerHTML = 'Верстка, создание сайтов, веб-разработка';
            // Portfolio
            document.querySelector('.portfolio__header').innerHTML = 'Мои работы';
            // Footer
            document.querySelector('.footer__copyright_name').innerHTML = '© Константин Машков';
            document.querySelector('.footer__copyright_title').innerHTML = 'HTML-верстка и веб-разработка';
            document.querySelector('.footer__icons_title').innerHTML = 'Мои социальные сети:';
            document.querySelector('.footer__button').innerHTML = 'ВКонтакте';
            document.querySelector('.footer__contacts_title').innerHTML = 'Напишите мне, чтобы заказать или узнать стоимость верстки вашего проекта.';
        }
        else {
            // Header
            document.querySelector('.name').innerHTML = 'Konstantin Maschkov';
            document.querySelector('.lang2').innerHTML = 'RU';
            document.querySelector('.home').innerHTML = 'Home';
            document.querySelector('.portf').innerHTML = 'Portfolio';
            document.querySelector('.contact').innerHTML = 'Contacts';
            document.querySelector('.header__subtitle').innerHTML = 'Layout, Website creation, Web-development';
            // Portfolio
            document.querySelector('.portfolio__header').innerHTML = 'Portfolio';
            // Footer
            document.querySelector('.footer__copyright_name').innerHTML = '© Konstantin Maschkov';
            document.querySelector('.footer__copyright_title').innerHTML = 'HTML layout and website development';
            document.querySelector('.footer__icons_title').innerHTML = 'My Social media Profiles:';
            document.querySelector('.footer__button').innerHTML = 'Contact Vkontakte';
            document.querySelector('.footer__contacts_title').innerHTML = 'Write to me to order or find out the cost of the layout of your project.';
        }
    });
});










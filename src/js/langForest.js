'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const lang = document.querySelector('.lang');

    lang.addEventListener('click', () => {
        let languageСhange = lang.classList.toggle('lang_active');
        if(languageСhange) {
            // Header
            document.querySelector('.contact').innerHTML = 'Контакты';
            document.querySelector('.lang2').innerHTML = 'ENG';
            //Main
            document.querySelector('.project__header').innerHTML = 'Макет веб сайта Мёда';
            document.querySelector('.project__description_title').innerHTML = 'Макет адаптивного веб сайта Мёда.';
            document.querySelector('.project__description_email').innerHTML = 'Адрес веб-сайта: <a href="https://honey.mkvweb.ru/">Honey</a>';
            document.querySelector('.project__back').innerHTML = '← На главную страницу';
            // Footer
            document.querySelector('.footer__copyright_name').innerHTML = '© Константин Машков';
            document.querySelector('.footer__copyright_title').innerHTML = 'HTML-верстка и веб-разработка';
            document.querySelector('.footer__icons_title').innerHTML = 'Мои социальные сети:';
            document.querySelector('.footer__button').innerHTML = 'ВКонтакте';
            document.querySelector('.footer__contacts_title').innerHTML = 'Напишите мне, чтобы заказать или узнать стоимость верстки вашего проекта.';
        }
        else {
            // Header
            document.querySelector('.contact').innerHTML = 'Contacts';
            document.querySelector('.lang2').innerHTML = 'RU';
            //Main
            document.querySelector('.project__header').innerHTML = 'Layout of the Honey website';
            document.querySelector('.project__description_title').innerHTML = 'Layout of an adaptive Honey website.';
            document.querySelector('.project__description_email').innerHTML = 'Website address: <a href="https://honey.mkvweb.ru/">Honey</a>';
            document.querySelector('.project__back').innerHTML = '← GO BACK TO THE MAIN PAGE';
            // Footer
            document.querySelector('.footer__copyright_name').innerHTML = '© Konstantin Maschkov';
            document.querySelector('.footer__copyright_title').innerHTML = 'HTML layout and website development';
            document.querySelector('.footer__icons_title').innerHTML = 'My Social media Profiles:';
            document.querySelector('.footer__button').innerHTML = 'Contact Vkontakte';
            document.querySelector('.footer__contacts_title').innerHTML = 'Write to me to order or find out the cost of the layout of your project.';
        }
    });
});    
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__list_active');
    });
});




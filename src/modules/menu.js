const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');

    const activeMenu = () => menu.classList.toggle('active-menu');

    document.addEventListener('click', event => {
        let target = event.target;
        menu.classList.contains('active-menu') && !target.closest('.active-menu') ? activeMenu() : '';
        target.closest('.menu') ? activeMenu() : '';
        target.classList.contains('close-btn') || target.matches('ul>li>a') ? activeMenu() : '';
    });
};

export default menu;
const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const activeMenu = () => menu.classList.toggle('active-menu');
    const popup = document.querySelector('.popup');
    const popupClose = popup.querySelector('.popup-close');
    const activePopupBtn = document.querySelectorAll('.service .popup-btn');
    
    menuBtn.addEventListener('click', activeMenu);
    closeBtn.addEventListener('click', activeMenu);
    menuItems.forEach( item => item.addEventListener('click', activeMenu));
    activePopupBtn.forEach( item => item.addEventListener('click', () => {
        let stepAnimate = 0;
        let animatePopup;

        popup.style.opacity = 0;
        popup.style.display = 'block';
        if(!(document.documentElement.clientWidth < 768)) {
            let animatePopupRun = () => {
                stepAnimate += 0.03;
                animatePopup = requestAnimationFrame(animatePopupRun);
                if(stepAnimate < 1) {
                    popup.style.opacity = stepAnimate;
                } else {
                    cancelAnimationFrame(animatePopup);
                }
            };
            animatePopupRun();
        } else {
            popup.style.opacity = 1;
        }
        
        console.dir(document.documentElement.clientWidth);
    }));
    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    console.log(activePopupBtn);
};

export default menu;
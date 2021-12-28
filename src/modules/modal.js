const modal = () => {
    const serviceBlock = document.querySelector('.service');
    const popup = document.querySelector('.popup');

    serviceBlock.addEventListener('click', event => {
        let target = event.target;
        if(target.classList.contains('popup-btn')) {
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
        }

        popup.addEventListener('click', event => {
            let target = event.target;
            target.classList.contains('popup') || target.classList.contains('popup-close') ? popup.style.display = 'none' : '';
        });
    });
};

export default modal;
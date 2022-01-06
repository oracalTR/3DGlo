import { animate } from './helpers';

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
                animate({
                    duration: 500,
                    timing(timeFraction) {
                      return timeFraction;
                    },
                    draw(progress) {
                      popup.style.opacity = progress;
                    }
                  });
                // Старый вариант анимации
                // let animatePopupRun = () => {
                //     stepAnimate += 0.03;
                //     animatePopup = requestAnimationFrame(animatePopupRun);
                //     if(stepAnimate < 1) {
                //         popup.style.opacity = stepAnimate;
                //     } else {
                //         cancelAnimationFrame(animatePopup);
                //     }
                // };
                // animatePopupRun();
                // Конец сарого варианта анимации
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
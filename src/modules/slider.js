const slider = () => {
    const allProgects = document.querySelector('#all-progects');
    const portfolioItem = document.querySelectorAll('.portfolio-item');
    const portfolioDots = document.querySelector('.portfolio-dots');
    
    for(let i = 0; i < portfolioItem.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
        if(i == 0) {
            li.classList.add('dot-active');
        }
        portfolioDots.insertAdjacentElement('beforeend', li);
    }

    const dot = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let interval;

    const prevSlide = () => {
        //console.log('prev');
        stopSlides();
        portfolioItem[currentSlide].classList.remove('portfolio-item-active');
        dot[currentSlide].classList.remove('dot-active');
        if(currentSlide == 0) {
            currentSlide = portfolioItem.length - 1;
            portfolioItem[currentSlide].classList.add('portfolio-item-active');
            dot[currentSlide].classList.add('dot-active');
        } else {
            currentSlide--;
            portfolioItem[currentSlide].classList.add('portfolio-item-active');
            dot[currentSlide].classList.add('dot-active');
        }
        intervalSlides();
    };
    const nextSlide = () => {
        //console.log('next');
        //console.log(currentSlide);
        stopSlides();
        portfolioItem[currentSlide].classList.remove('portfolio-item-active');
        dot[currentSlide].classList.remove('dot-active');
        if(currentSlide == portfolioItem.length - 1) {
            currentSlide = 0;
            portfolioItem[currentSlide].classList.add('portfolio-item-active');
            dot[currentSlide].classList.add('dot-active');
        } else {
            currentSlide++;
            portfolioItem[currentSlide].classList.add('portfolio-item-active');
            dot[currentSlide].classList.add('dot-active');
        }
        intervalSlides();
    };
    const dotsSlide = (target) => {
        stopSlides();
        //console.log('dot');
        //console.log(target);
        dot.forEach((elem, index) => {
            if(target == elem) {
                portfolioItem[currentSlide].classList.remove('portfolio-item-active');
                dot[currentSlide].classList.remove('dot-active');
                currentSlide = index;
                portfolioItem[currentSlide].classList.add('portfolio-item-active');
                dot[currentSlide].classList.add('dot-active');
                intervalSlides();
            }
        });
    };


    const startSlides = () => {
        if(currentSlide == portfolioItem.length - 1) {
            //console.log('currentSlide', currentSlide);
            dot[currentSlide].classList.remove('dot-active');
            portfolioItem[currentSlide].classList.remove('portfolio-item-active');
            currentSlide = 0;
            portfolioItem[currentSlide].classList.add('portfolio-item-active');
            dot[currentSlide].classList.add('dot-active');
        } else {
            //console.log('currentSlide', currentSlide);
            portfolioItem[currentSlide].classList.remove('portfolio-item-active');
            dot[currentSlide].classList.remove('dot-active');
            currentSlide++;
            portfolioItem[currentSlide].classList.add('portfolio-item-active');
            dot[currentSlide].classList.add('dot-active');
        }
    };

    const stopSlides = () => {
        clearInterval(interval);
    };


    const intervalSlides = () => {
        interval = setInterval(startSlides, 2500);
    };

    allProgects.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        if(target.classList.contains('prev')) {
            prevSlide();
        } else if(target.classList.contains('next')) {
            nextSlide();
        } else if(target.classList.contains('dot')) {
            dotsSlide(target);
        }
    });

    allProgects.addEventListener('mouseenter', event => {
        event.preventDefault();
        let target = event.target;
        if(target.classList.contains('prev') || target.classList.contains('next') || target.classList.contains('dot')) {
            console.log('Стоп сладер');
            stopSlides();
        }
    }, true);
    allProgects.addEventListener('mouseleave', event => {
        event.preventDefault();
        let target = event.target;
        if(target.classList.contains('prev') || target.classList.contains('next') || target.classList.contains('dot')) {
            console.log('Старт сладер');
            stopSlides();
            intervalSlides();
        }
    }, true);

    intervalSlides();
};

export default slider;
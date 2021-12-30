const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const calcTotal = calcBlock.querySelector('#total');
    let totalPrice = 0;
    let interval;

    const animateTotalPrice = () => {
        let nullPrice = 0;
        interval = setInterval( () => {
            calcTotal.textContent = nullPrice;
            if(nullPrice >= totalPrice) {
                calcTotal.textContent = totalPrice;
                clearInterval(interval);
            } else {
                nullPrice += 111;
            }
        }, 5 );
    }; 

    const calcTotalPrice = (price) => {
        let calcTypeCoeff = 1;
        let calcCountCoeff = 1;
        let calcDayCoeff = 1;

        if(+calcCount.value > 1) {
            for(let i = 0; i < +calcCount.value; i++) {
                calcCountCoeff += 0.1;
            }
        }
        if(calcDay.value && +calcDay.value < 5) {
            calcDayCoeff = 2;
        } else if(calcDay.value && +calcDay.value < 10) {
            calcDayCoeff = 1.5;
        }
        
        console.dir(calcType);
        if(calcType.options[calcType.selectedIndex].dataset.price) {
            price = calcType.options[calcType.selectedIndex].dataset.price;
        }
        calcTypeCoeff = calcType.options[calcType.selectedIndex].value;
        totalPrice = Math.round(price * +calcTypeCoeff * +calcSquare.value * calcCountCoeff * calcDayCoeff);
        console.log(price);
        console.log('calcTypeCoeff: ', calcTypeCoeff);
        console.log('calcCountCoeff: ', calcCountCoeff);
        console.log('calcDayCoeff: ', calcDayCoeff);
        console.log('totalPrice: ', totalPrice);
        if(totalPrice) {
            animateTotalPrice();
        }
    };

    calcBlock.addEventListener('input', event => {
        let target = event.target;
        if(target === calcType || target === calcSquare || 
            target === calcCount || target === calcDay) {
                clearInterval(interval);
                calcTotalPrice(price);
        }
    });
};

export default calc;
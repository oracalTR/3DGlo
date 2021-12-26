const inpCheck = () => {
    const form = document.querySelectorAll('form');
    const formBtn = document.querySelectorAll('.form-btn');

    const inputName = document.querySelectorAll('input[name=user_name]');
    const inputEmail = document.querySelectorAll('input[name=user_email]');
    const inputPhone = document.querySelectorAll('input[name=user_phone]');
    const calcItem = document.querySelectorAll('input.calc-item');
    const formMess = document.querySelector('.mess');

    console.log(calcItem);
    
    let  checkName = (value) => {
        return !/([^а-я-\s]+)/gi.test(value);
    };
    let checkEmail = (value) => {
        return /^([a-z0-9_~'*!-]+\.)*[a-z0-9_~'*!-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/g.test(value);
    };
    let checkPhone = (value) => {
        return /^\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/g.test(value);
    };
    let  checkMess = (value) => {
        return !/([^а-я-,\s]+)/gi.test(value);
    };
    let checkCalc = /\D/g;

    let isError = true;

    inputName.forEach(elem => {
        elem.addEventListener('input', event => {
            let nameTest = checkName(event.target.value);
            console.log('checkName', checkName(event.target.value));
            if(nameTest) {
                isError = false;
                console.log('event', event.target);
                event.target.style.backgroundColor = '#fff';
            } else {
                isError = true;
                event.target.style.backgroundColor = '#FF7F50';
                
            }
            console.log('event.target.value: ', event.target.value);
            console.log('isError', isError);
        });
    });
    inputPhone.forEach(elem => {
        elem.addEventListener('input', event => {
            console.dir(event);
            console.log('checkPhone', checkPhone(event.target.value));
            let phoneTest = checkPhone(event.target.value);
            if(phoneTest) {
                isError = false;
                event.target.style.backgroundColor = '#fff';
            } else {
                isError = true;
                event.target.style.backgroundColor = '#FF7F50';
            }
            console.log('event.target.value: ', event.target.value);
            console.log('isError', isError);
        });
    });
    inputEmail.forEach(elem => {
        elem.addEventListener('input', event => {
            console.log(elem);
            console.log('checkEmail', checkEmail(event.target.value));
            let emailTest = checkEmail(event.target.value);
            if(emailTest) {
                isError = false;
                event.target.style.backgroundColor = '#fff';
            } else {
                isError = true;
                event.target.style.backgroundColor = '#FF7F50';
            }
            console.log('event.target.value: ', event.target.value);
            console.log('isError', isError);
        });
    });
    formMess.addEventListener('input', event => {
        let messTest = checkMess(event.target.value);
        console.log('checkName', checkName(event.target.value));
        if(messTest) {
            isError = false;
            console.log('event', event.target);
            event.target.style.backgroundColor = '#fff';
        } else {
            isError = true;
            event.target.style.backgroundColor = '#FF7F50';
            
        }
        console.log('event.target.value: ', event.target.value);
        console.log('isError', isError);
    });

    formBtn.forEach(elem => {
        elem.addEventListener('click', event => {
            console.log(event.target);
            event.preventDefault();
            console.log('isError', isError);
            if(!isError) {
                console.log('Отправка формы');
            }
        });
    });
    
    calcItem.forEach(elem => {
        elem.addEventListener('input', event => {
            event.target.value = event.target.value.replace(checkCalc, '');
        });
    });
};

export default inpCheck;
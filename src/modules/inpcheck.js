import sendForm from "./sendForm";

const inpCheck = () => {
    const form = document.querySelectorAll('form');
    const formBtn = document.querySelectorAll('.form-btn');

    const inputName = document.querySelectorAll('input[name=user_name]');
    const inputEmail = document.querySelectorAll('input[name=user_email]');
    const inputPhone = document.querySelectorAll('input[name=user_phone]');
    const calcType = document.querySelector('.calc-type');
    const calcItem = document.querySelectorAll('input.calc-item');
    const formMess = document.querySelector('.mess');

    
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

    let isErrorName = false;
    let isErrorPhone = false;
    let isErrorEmail = false;
    let isErrorMess = false;

    inputName.forEach(elem => {
        elem.addEventListener('input', event => {
            let inputName = '';
            if(/([^а-я-\s]+)/gi.test(event.target.value)) {
                inputName = event.target.value.replace(/([^а-я-\s]+)/gi, ($1) => {
                    let newName = '';
                    newName = ``;
                    return newName;
                });
                event.target.value = inputName;
            }

            let nameTest = checkName(event.target.value);
            if(nameTest) {
                isErrorName = false;
                event.target.style.backgroundColor = '#fff';
            } else {
                isErrorName = true;
                event.target.style.backgroundColor = '#FF7F50';
                
            }
        });
    });
    inputPhone.forEach(elem => {
        elem.addEventListener('input', event => {
            let phone = '';
            if(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2}$)/g.test(event.target.value)) {
                phone = event.target.value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/g, ($1, $2, $3, $4, $5, $6) => {
                    let newPhone = '';
                    newPhone = `${$2}(${$3})${$4}-${$5}-${$6}`;
                    return newPhone;
                });
                event.target.value = phone;
            }
            
            let phoneTest = checkPhone(event.target.value);
            if(phoneTest) {
                isErrorPhone = false;
                event.target.style.backgroundColor = '#fff';
            } else {
                isErrorPhone = true;
                event.target.style.backgroundColor = '#FF7F50';
            }
        });
    });
    inputEmail.forEach(elem => {
        elem.addEventListener('input', event => {
            let emailTest = checkEmail(event.target.value);
            if(emailTest || event.target.value.trim() == '') {
                isErrorEmail = false;
                event.target.style.backgroundColor = '#fff';
            } else {
                isErrorEmail = true;
                event.target.style.backgroundColor = '#FF7F50';
            }
        });
    });
    formMess.addEventListener('input', event => {
        let messTest = checkMess(event.target.value);
        if(messTest) {
            isErrorMess = false;
            event.target.style.backgroundColor = '#fff';
        } else {
            isErrorMess = true;
            event.target.style.backgroundColor = '#FF7F50';
        }
    });

    form.forEach(elem => {
        elem.addEventListener('submit', event => {
            event.preventDefault();
            if(!isErrorName && !isErrorPhone && !isErrorEmail && !isErrorMess) {
                sendForm(event.target, [{
                    type: 'block',
                    id: 'total'
                }]);
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
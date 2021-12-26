const inpCheck = () => {
    //const form = document.querySelectorAll('form');

    const inputName = document.querySelectorAll('input[name=user_name]');
    const inputEmail = document.querySelectorAll('input[name=user_email]');
    const inputPhone = document.querySelectorAll('input[name=user_phone]');
    
    const checkName = /[^а-яА-Я-]+/g;
    const checkEmail = /\d+/;
    const checkPhone = /\D+/;

    let isError = false;

    inputName.forEach(elem => {
        elem.addEventListener('input', event => {
            if(checkName.test(event.target.value)) {
                console.log('Проверка прошла');
            } else {
                console.log('Проверка не прошла');
            }
            // event.target.value = event.target.value.replace(checkName, '');
            console.log('event.target.value: ', event.target.value);
        });
    });
    inputPhone.forEach(elem => {
        elem.addEventListener('input', event => {
            event.target.value = event.target.value.replace(checkPhone, '');
            console.log('event.target.value: ', event.target.value);
        });
    });

    console.log('inputUserName', inputName);
    console.log('inputUserEmail', inputEmail);
    console.log('inputUserPhone', inputPhone);

    // form.forEach( elem => {
    //     elem.addEventListener('click', event => {
    //         console.log(event.target.parentNode);
    //     });
    // });

    // form.addEventListener('click', event => {
    //     console.log('event.target: ', event.target);
    // });
    //console.log(form);
};

export default inpCheck;
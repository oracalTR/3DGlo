const sendForm = (formId, someElem = []) => {
    const divMess = document.createElement('div');
    const sendMes = 'Отправка...';
    const sendError = 'Ошибка отправки, попробуйте позже...';
    const successMess = 'Ваше сообщение успешно отправлено! Наш менеджер скоро свяжется с Вами!';
    const popup = document.querySelector('.popup');
    let formBody = {};
    let formData = new FormData(formId);
    
    divMess.style.color = '#fff';
    divMess.classList.add('message');
    
    formData.forEach((value, key) => {
        formBody[key] = value;
    });
    
    someElem.forEach(elem => {
        const element = document.querySelector(`#${elem.id}`);
        formBody[elem.id] = element.textContent;
    });

    try {
        const send = formBody => {
            if(formId.querySelector('.message')) {
                formId.removeChild(formId.querySelector('.message'));
            }
            formId.append(divMess);
            divMess.textContent = sendMes;
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                const input = formId.querySelectorAll('input');
                input.forEach(elem => {
                    elem.value = '';
                });
                divMess.textContent = successMess;
                setTimeout(() => {
                    formId.querySelector('.message') ? formId.removeChild(formId.querySelector('.message')) : '';
                }, 3000);
                setTimeout(() => {
                    popup.style.display == 'block' ? popup.style.display = 'none' : '';
                }, 4000);
                console.log('Отправка формы');
            })
            .catch(errror => {
                divMess.textContent = sendError;
                setTimeout(() => {
                    formId.querySelector('.message') ? formId.removeChild(formId.querySelector('.message')) : '';
                }, 3000);
            });
        };
        send(formBody);
    } catch (error) {
        console.log(error, 'Что то пошло не так!');
    }
};

export default sendForm;
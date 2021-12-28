const tabs = () => {
    const serviceHeader = document.querySelector('.service-header');
    const serviceHeaderTab = document.querySelectorAll('.service-header-tab');
    const serviceTab = document.querySelectorAll('.service-tab');
    
    serviceHeader.addEventListener('click', event => {
        let target = event.target.closest('.service-header-tab');
        if(target) {
            serviceHeaderTab.forEach((elem, index) => {
                if(elem == target) {
                    elem.classList.add('active');
                    serviceTab[index].classList.remove('d-none');

                } else {
                    elem.classList.remove('active');
                    serviceTab[index].classList.add('d-none');
                }
            });
        }
    });
};

export default tabs;
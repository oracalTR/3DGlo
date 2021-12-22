const timer = (deadLine) => {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.querySelector('#timer-minutes');
    const timerSeconds = document.querySelector('#timer-seconds');
    
    const countTimer = () => {
        let dateStop = new Date(deadLine).getTime();
        let daateNow = new Date().getTime();
        let timeRemaining = (dateStop - daateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if(timeRemaining > 0) {
            timerHours.textContent = hours < 10 ? '0' + hours : hours;
            timerMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
            timerSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        } else {
            clearInterval(runTimer);
        }
    };
    const runTimer = setInterval(countTimer, 1000);

};

export default timer;
const dateTime = document.querySelector('.date-time');
const nowDate = new Date();
let dayWeek = nowDate.toLocaleString('default', { weekday: 'long' });
let dateNowA = `${dayWeek.toUpperCase().substr(0, 1) + dayWeek.substr(1)}`; 
const newDate = parseInt(nowDate.getHours());
let timeOfDay = '';
const dateEnd = new Date('2022 1 1').getTime();
const daysNewYear = Math.floor((dateEnd - nowDate.getTime()) / 1000 / 60 / 60 / 24);

if(newDate > 3 && newDate < 12) {
    timeOfDay = 'Доброе утро';
} else if(newDate > 11 && newDate < 16) {
    timeOfDay = 'Добрый день';
} else if(newDate > 15 && newDate < 24) {
    timeOfDay = 'Добрый вечер';
} else {
    timeOfDay = 'Доброй ночи';
}

dateTime.insertAdjacentHTML('afterbegin', `
${timeOfDay} </br>
Сегодня: ${dateNowA} </br>
Текущее время: ${nowDate.toLocaleString('en-US', { hour: 'numeric', 
minute: 'numeric', second: 'numeric', hour12: true })} </br>
До новго года осталось ${daysNewYear} дней.
`);
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import inpCheck from './modules/inpcheck';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded', () => {
    timer('13 January 2022');
    menu();
    modal();
    inpCheck();
    tabs();
    slider();
    calc(100);
});
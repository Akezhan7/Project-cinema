import  search from './modules/search';
import  stock from './modules/stock';
import  timer from './modules/timer';
import  slider from './modules/slider';
import  shablon from './modules/shablon';
import  sliderFilm from './modules/sliderFilm';
import  tabs from './modules/movies';
import  newFilms from './modules/newFilms';

window.addEventListener ('DOMContentLoaded', () => {
    search ();
    stock ();
    timer ('.timers', '2021-04-20');
    slider ({
        blocks: '#hit',
        btnLeft: '#hit-left',
        btnRight: '#hit-right',
        numberBlocks: '.hit__number-block',
        container: '.hit__item',
        field: '.hit__field'
    });
    shablon ();
    sliderFilm ();
    tabs ('.mov__column', '.mov__blocks-block', '.mov__blocks', 'mov-active');
    newFilms ();
});


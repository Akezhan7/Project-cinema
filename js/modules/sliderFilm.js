function sliderFilm () {
    const filmItem = document.querySelector ('.slidefilms__item'),
    filmfield = document.querySelector ('.slidefilms__field'),
    filmBlock = document.querySelectorAll ('.slidefilms__body'),
    filmWidth = window.getComputedStyle (filmItem).width;

    let indexFilm = 1;
    let filmOffset = 0;

    function tehWidth (i) {
    return parseInt (i.replace(/\D/g, ''));
    }

        
    filmfield.style.width = 100 * filmBlock + '%';

    filmBlock.forEach (item => {
    item.style.width = filmWidth;
    });

    const newIndicator = document.createElement ('ul'),
        newNumbers = [];
    newIndicator.classList.add ('slidefilms__number');
    filmItem.append (newIndicator);

    for (let i = 0; i < filmBlock.length; i++) {
    const newNumberBlock = document.createElement ('li');
    newNumberBlock.setAttribute ('data-slide-to', i + 1);
    newNumberBlock.classList.add ('slidefilms__number-block');

    if (i == 0) {
        newNumberBlock.style.opacity = 1;
    }
    
    newIndicator.append (newNumberBlock);
    newNumbers.push (newNumberBlock);
    }

    function filmIntervalSlides () {
    if (filmOffset == tehWidth (filmWidth) * (filmBlock.length - 1)) {
        filmOffset = 0;
    }
    else {
        filmOffset += tehWidth (filmWidth);
    }

    filmfield.style.transform = `translateX(-${filmOffset}px)`;

    }

    function filmShowIndexBlock () {
    newNumbers.forEach (item => item.style.opacity = '.5');
    newNumbers[indexFilm - 1].style.opacity = 1;
    }

    let filmTimerBlock = setInterval (() => {
    filmIntervalSlides();
    if (indexFilm == filmBlock.length) {
        indexFilm = 1;
    } else {
        indexFilm++;
    }
    filmShowIndexBlock ();
    }, 4000);

    filmShowIndexBlock ();

    newNumbers.forEach (item => {
    item.addEventListener ('click', (e) => {
        const filmSlideTo = e.target.getAttribute ('data-slide-to');

        indexFilm = filmSlideTo;
        filmOffset = tehWidth (filmWidth) * (filmSlideTo - 1);
        filmfield.style.transform = `translateX(-${filmOffset}px)`;

        filmShowIndexBlock ();
    });
    });
}
export default sliderFilm;
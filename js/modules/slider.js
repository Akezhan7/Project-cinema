function slider ({blocks, btnLeft, btnRight, numberBlocks, container, field}) {
    
    const hits = document.querySelectorAll (blocks),
        hitLeft = document.querySelector (btnLeft),
        hitRight = document.querySelector (btnRight),
        hitNumber = document.querySelectorAll (numberBlocks),
        hitItem = document.querySelector (container),
        hitField = document.querySelector (field),
        width = window.getComputedStyle (hitItem).width;
        
    let indexBlock = 1;
    let offset = 0;


    hitField.style.width = 100 * hits.length + '%';
    hits.forEach (item => {
    item.style.width = width;
    });

    const indicator = document.createElement ('ul'),
        numbers = [];
    indicator.classList.add ('hit__number');
    hitItem.append (indicator);

    for (let i = 0; i < hits.length; i++) {
    const numberBlock = document.createElement ('li');
    numberBlock.setAttribute ('data-slide-to', i + 1);
    numberBlock.classList.add (numberBlocks.slice(1));

    if (i == 0) {
        numberBlock.style.opacity = 1;
    }
    
    indicator.append (numberBlock);
    numbers.push (numberBlock);
    }

    function intervalSlides () {
    if (offset == +width.slice (0, width.length - 2) * (hits.length - 1)) {
        offset = 0;
    }
    else {
        offset += +width.slice (0, width.length - 2);
    }

    hitField.style.transform = `translateX(-${offset}px)`;

    }

    function showIndexBlock () {
    numbers.forEach (item => item.style.opacity = '.5');
    numbers[indexBlock - 1].style.opacity = 1;
    }

    let timerBlock = setInterval (() => {
    intervalSlides();
    if (indexBlock == hits.length) {
        indexBlock = 1;
    } else {
        indexBlock++;
    }
    showIndexBlock ();
    }, 4000);

    hitRight.addEventListener ('click', () => {
    intervalSlides ();
    if (indexBlock == hits.length) {
        indexBlock = 1;
    } else {
        indexBlock++;
    }
    showIndexBlock ();
    });

    hitLeft.addEventListener ('click', () => {
    if (offset == 0) {
        offset = +width.slice (0, width.length - 2) * (hits.length - 1);  
    } else {
        offset -= +width.slice (0, width.length - 2);
    }
    hitField.style.transform = `translateX(-${offset}px)`;

    if (indexBlock == 1) {
        indexBlock = hits.length;
    } else {
        indexBlock--;
    }
    showIndexBlock ();
    });
    showIndexBlock ();

    numbers.forEach (item => {
    item.addEventListener ('click', (e) => {
        const slideTo = e.target.getAttribute ('data-slide-to');

        indexBlock = slideTo;
        offset = +width.slice (0, width.length - 2) * (slideTo - 1);
        hitField.style.transform = `translateX(-${offset}px)`;

        numbers.forEach (item => item.style.opacity = '.5');
        numbers[indexBlock - 1].style.opacity = 1;

        showIndexBlock ();
    });
    });
}
    
export default slider;
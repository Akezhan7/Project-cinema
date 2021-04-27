/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/movies.js":
/*!******************************!*\
  !*** ./js/modules/movies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs (tabsSelector, tabsContent, tabsParent, activeClass) {
    const collections = document.querySelectorAll (tabsSelector),
          nav = document.querySelectorAll (tabsContent),
          link = document.querySelector (tabsParent);
  
    function hideContent () {
    collections.forEach (item => {
    item.style.display = 'none';
    });

    nav.forEach (item => {
    item.classList.remove (activeClass);
    });
    }

    function showContent (i = 0) {
    collections[i].style.display = 'flex';
    nav[i].classList.add (activeClass);
    }

    hideContent ();
    showContent ();

    link.addEventListener ('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains (tabsContent.slice(1))) {
    nav.forEach ((item, num) => {
        if (target == item) {
            hideContent ();
            showContent (num);
        }
    });
    }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/newFilms.js":
/*!********************************!*\
  !*** ./js/modules/newFilms.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function newFilm () {
    class ShablonNew {
        constructor (title, logo, column, ...rest) {
          this.title = title;
          this.logo = logo;
          this.column = document.querySelector (column);
          this.rest = rest;
        }
      
        newClass () {
          let newFilmsBlock = document.createElement ('div');
          newFilmsBlock.classList.add ('newfilms__block');
      
          newFilmsBlock.innerHTML = `
                    <div class="popular__logo ${this.logo}">
                        <div class="logo-play-bg">
                            <div class="logo-play-g">
                                <a href="#" class="logo-play"></a>
                            </div>
                        </div>
                        <div class="popular__name-bg">
                            <div class="newfilms__time">
                                <p>1ч. 4 мин</p>
                            </div>
                        </div>
                      </div>
                      <div class="newfilms__info">
                          <div class="newfilms__title">${this.title}</div>
                          <div class="newfilms__subtitle">Lorem ipsum dolor sit amet <br> consectetur adipisicing. <br></div>
                          <div class="newfilms__watch">
                              <button class="newfilms__watch-btn">Смотреть сейчас</button>
                          </div>
                      </div>
          `;
      
          this.column.append (newFilmsBlock);
        }
      }
      // axios.get ('http://localhost:3000/newFilms')
      // .then (data => {
      //     data.data.forEach (({title, logo, column}) => {
      //       new ShablonNew (title, logo, column,).newClass();
      //     });
      // });
      new ShablonNew (
      'Том и Джерри',
      'n1',
      '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Ванда-Вижн',
        'n2',
        '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Бэтмен',
        'n3',
        '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Тор: любовь и гром',
        'n4',
        '.newfilms__column'
        ).newClass ();
      new ShablonNew (
        'Годзилла vs Конг',
        'n5',
        '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Стражи Галактики',
        'n6',
        '.newfilms__column'
        ).newClass ();
      new ShablonNew (
        'Огонь',
        'n7',
        '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Рэмпейдж',
        'n8',
        '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Лига',
        'n9',
        '.newfilms__column'
        ).newClass ();
      new ShablonNew (
        'Аватар',
        'n10',
        '.newfilms__column'
      ).newClass ();new ShablonNew (
        'Аватар',
        'n10',
        '.newfilms__column'
      ).newClass ();
      new ShablonNew (
        'Аватар',
        'n10',
        '.newfilms__column'
      ).newClass ();
      
      // slider NEW Films
      // let offset = 0;
      
      
      // hitField.style.width = 100 * hits.length + '%';
      // hits.forEach (item => {
      //   item.style.width = width;
      // });
      
      
      
      // function intervalSlides () {
      //   if (offset == +width.slice (0, width.length - 2) * (hits.length - 1)) {
      //     offset = 0;
      //   }
      //   else {
      //     offset += +width.slice (0, width.length - 2);
      //   }
      
      //   hitField.style.transform = `translateX(-${offset}px)`;
      
      // }
      const newFilmsItem = document.querySelector ('.newfilms__item'),
            newFilmsColumn = document.querySelector ('.newfilms__column'),
            blocks = document.querySelectorAll ('.newfilms__block'),
            newFilmsBlock = document.querySelector ('.newfilms__block'),
            newWidth = window.getComputedStyle (newFilmsBlock).width;
      
      let newOffset = 0;
      blocks.forEach (item => {
        item.style.width = newWidth;
      });
      
      console.log (blocks.length);
      
      
      function newIntervalSlides () {
        if (newOffset == +newWidth.slice (0, newWidth.length - 2) * (blocks.length - 1)) {
          newOffset = 0;
        }
        else {
          newOffset += +newWidth.slice (0, newWidth.length - 2);
        }
      
        if (newOffset == 1400) {
          newOffset = 0;
        }
        newFilmsColumn.style.transform = `translateX(-${newOffset}px)`;
      }
      
      let newSlidesInterval = setInterval (() => {
        newIntervalSlides ();
      }, 4000);
}
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newFilm);

/***/ }),

/***/ "./js/modules/search.js":
/*!******************************!*\
  !*** ./js/modules/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function search () {
const btnSearch = document.querySelector ('.header__search'),
    modalSearch = document.querySelector ('.modal-search'),
    modaClose = document.querySelector ('.modal__close');

    btnSearch.addEventListener ('click', (e) => {
    modalSearch.classList.remove ('hidden');
    modalSearch.classList.add ('show');
    document.body.style.overflow = 'hidden';
    });

    function closeModal () {
    modalSearch.classList.remove ('show');
    modalSearch.classList.add ('hidden');
    document.body.style.overflow = '';
    }
    modaClose.addEventListener ('click', closeModal);

    modalSearch.addEventListener ('click', (e) => {
    if (e.target === modalSearch) {
        closeModal ();
    }
    });

    document.addEventListener ('keydown', (e) => {
    if (e.code === 'Escape' && modalSearch.classList.contains('show')) {
        closeModal ();
    }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);

/***/ }),

/***/ "./js/modules/shablon.js":
/*!*******************************!*\
  !*** ./js/modules/shablon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function shablon () {
    class Shablon {
        constructor (block, logo, l1, playBg, ...rest) {
          this.block = block;
          this.logo = logo;
          this.l1 = l1;
          this.playBg = document.querySelector (playBg);
          this.rest = rest;
        }
        // <div class="popular__block">
        //       </div>
        classThis () {
          let div = document.createElement ('div');
          if (this.rest.length === 0) {
            div.classList.add ('popular__block');
          } else {
            this.rest.forEach (name => {
              div.classList.add (name);
            });
          }
          div.innerHTML = `
          <div class="popular__logo ${this.l1}">
              <div class="logo-play-bg">
                  <div class="logo-play-g">
                      <a href="#" class="logo-play"></a>
                  </div>
              </div>
              <div class="popular__name-bg">
                  <div class="popular__name">
                      <p>${this.block}</p>
                  </div>
                  <div class="popular__time">
                      <p>${this.logo}</p>
                  </div>
              </div>
          </div>
          `;
          this.playBg.append (div);
        }
      }
      
      const getShablon = async (url) => {
        const res = await fetch (url);
        if (!res.ok) {
          throw new Error (`Что-то пошло не так ${url}, статус ${res.status}`);
        }
       return await res.json();
      };
      
      // getShablon ('http://localhost:3000/menu')
      // .then (data => {
      //   data.forEach (({block, logo, l1, playBg}) => {
      //     new Shablon (block, logo, l1, playBg, 'popular__block').classThis();
      //   });
      // });
      axios.get ('http://localhost:3000/menu')
      .then (data => {
          data.data.forEach (({block, logo, l1, playBg}) => {
            new Shablon (block, logo, l1, playBg, 'popular__block').classThis();
          });
        });
      
      // getShablon ('http://localhost:3000/menu')
      // .then (data => createCard(data));
      
      // function createCard (data) {
      //   data.forEach (({block, logo, l1, playBg}) => {
      //     const element = document.createElement ('div');
      //     element.classList.add ('popular__block');
      
      //     element.innerHTML = `
      //       <div class="popular__logo ${l1}">
      //       <div class="logo-play-bg">
      //           <div class="logo-play-g">
      //               <a href="#" class="logo-play"></a>
      //           </div>
      //       </div>
      //       <div class="popular__name-bg">
      //           <div class="popular__name">
      //               <p>${block}</p>
      //           </div>
      //           <div class="popular__time">
      //               <p>${logo}</p>
      //           </div>
      //       </div>
      //     </div>
      //     `;
      //     document.querySelector ('.popular__column').append (element);
      //   });
      // }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shablon);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/sliderFilm.js":
/*!**********************************!*\
  !*** ./js/modules/sliderFilm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderFilm);

/***/ }),

/***/ "./js/modules/stock.js":
/*!*****************************!*\
  !*** ./js/modules/stock.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function stock () {
    const btnStock = document.querySelector ('.sub__text'),
          modalStock = document.querySelector ('.stock'),
          stockClose = document.querySelector ('.stock__close');

    function openStock () {
    modalStock.classList.remove ('hidden');
    modalStock.classList.add ('show');
    document.body.style.overflow = 'hidden';
    
    }
    stockClose.addEventListener ('click', closeStock);
    btnStock.addEventListener ('click', () => {
    openStock();
    clearInterval(timerStock);
    });

    function closeStock () {
    modalStock.classList.remove ('show');
    modalStock.classList.add ('hidden');
    document.body.style.overflow = '';
    }
    modalStock.addEventListener ('click', (e) => {
    if (e.target === modalStock) {
        closeStock ();  
    }
    });

    document.addEventListener ('keydown', (e) => {
    if (e.code === 'Escape' && modalStock.classList.contains('show')) {
        closeStock ();
    }
    });

    const timerStock = setTimeout (openStock, 10000);
}
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stock);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer (id, deadLine) {
    // const deadLine = '2021-03-29';

    function getTime (endtime) {
    const t = Date.parse (endtime) - new Date (),
            days = Math.floor (t / (1000 * 60 * 60 * 24)),
            hours = Math.floor ((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor ((t / 1000 / 60) % 60),
            seconds = Math.floor ((t / 1000) % 60);
        
    return {
        'total':t,
        'd':days,
        'hours':hours,
        'minutes':minutes,
        'seconds':seconds
    };

    }
    function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
    }

    function setTime (selector, endtime) {
    const time = document.querySelector (selector),
            days = document.querySelector ('#days'),
            hours = document.querySelector ('#hours'),
            minutes = document.querySelector ('#minutes'),
            seconds = document.querySelector ('#seconds'),
            timeInterval = setInterval (updatetime, 1000);
            updatetime ();
            
    function updatetime () {
        const t = getTime (endtime);

        days.innerHTML = getZero (t.d);
        minutes.innerHTML = getZero (t.minutes);
        hours.innerHTML = getZero (t.hours);
        seconds.innerHTML = getZero (t.seconds);

        if (t.total <= 0) {
        clearInterval (timeInterval);
        }
    }
    }
    setTime (id, deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/search */ "./js/modules/search.js");
/* harmony import */ var _modules_stock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/stock */ "./js/modules/stock.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_shablon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/shablon */ "./js/modules/shablon.js");
/* harmony import */ var _modules_sliderFilm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sliderFilm */ "./js/modules/sliderFilm.js");
/* harmony import */ var _modules_movies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/movies */ "./js/modules/movies.js");
/* harmony import */ var _modules_newFilms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/newFilms */ "./js/modules/newFilms.js");









window.addEventListener ('DOMContentLoaded', () => {
    (0,_modules_search__WEBPACK_IMPORTED_MODULE_0__.default) ();
    (0,_modules_stock__WEBPACK_IMPORTED_MODULE_1__.default) ();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.default) ('.timers', '2021-04-20');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__.default) ({
        blocks: '#hit',
        btnLeft: '#hit-left',
        btnRight: '#hit-right',
        numberBlocks: '.hit__number-block',
        container: '.hit__item',
        field: '.hit__field'
    });
    (0,_modules_shablon__WEBPACK_IMPORTED_MODULE_4__.default) ();
    (0,_modules_sliderFilm__WEBPACK_IMPORTED_MODULE_5__.default) ();
    (0,_modules_movies__WEBPACK_IMPORTED_MODULE_6__.default) ('.mov__column', '.mov__blocks-block', '.mov__blocks', 'mov-active');
    (0,_modules_newFilms__WEBPACK_IMPORTED_MODULE_7__.default) ();
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
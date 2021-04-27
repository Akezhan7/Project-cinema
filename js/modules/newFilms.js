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
    
export default newFilm;
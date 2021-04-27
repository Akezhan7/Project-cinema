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

export default shablon;
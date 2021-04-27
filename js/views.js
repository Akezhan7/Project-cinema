'use strict';

document.addEventListener ('DOMContentLoaded', () => {
    let link = document.querySelector ('.ul-nav'),
        addForm = document.querySelector ('form.add'),
        inp = document.querySelector ('.input'),
        check = document.querySelector ('.checkbox');

    let movieDB = {
        movies: [
            'Логан',
            'Лига Справедливости',
            'Мстители',
            'Железный человек',
            'Тор',
            'Тор:Рагнарёк',
            'Мстители:Камни бесконечности',
            'Гарри Поттер:Кубок огня',
        ]
    };

    addForm.addEventListener ('submit', (e) => {
        e.preventDefault ();
        let inputAdd = inp.value,
        che = check.checked;
       
        
        
        if (inputAdd) {
            if (inputAdd.length > 21) {
                inputAdd = `${inputAdd.substring (0, 22)}...`;
            }
            movieDB.movies.push (inputAdd);
            addFilms();
        }

        if (che) {
            console.log (`Добавляем новый фильм: ${inputAdd} ...`);
        }
        
    });

    function sort (a) {
        a.sort();
    }
    function addFilms () {
        movieDB.movies.forEach ((num, item) => {
            link.textContent = '';
            sort (movieDB.movies);
            movieDB.movies.forEach ((item, num) => {
                link.innerHTML += `<li class="views__nav">${num+1}: ${item}
                <div class="delete"></div>
                </li>`;
            
            });
        });

        // document.querySelectorAll ('.delete').addEventListener ('click', (e) => {
            
        // });
        let del = document.querySelectorAll ('.delete');
        del.forEach ((item, num) => {
            item.addEventListener ('click', (e) => {
                item.parentElement.remove();
                movieDB.movies.splice (num, 1);
                // console.log (movieDB.movies);
            });
        });
    }
    addFilms();
});

// search
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

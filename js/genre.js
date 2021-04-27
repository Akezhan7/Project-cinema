'use strict';
document.addEventListener ('DOMContentLoaded', (e) => {
     
    const collections = document.querySelectorAll ('.collections__logo'),
          nav = document.querySelectorAll ('.tab__nav'),
          link = document.querySelector ('.tab__link');
        
   function hideContent () {
       collections.forEach (item => {
        item.style.display = 'none';
       });

       nav.forEach (item => {
        item.classList.remove ('tab__nav-active');
       });
   }

   function showContent (i = 0) {
        collections[i].style.display = 'block';
        nav[i].classList.add ('tab__nav-active');
   }

   hideContent ();
   showContent ();

   link.addEventListener ('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains ('tab__nav')) {
        nav.forEach ((item, num) => {
            if (target == item) {
                hideContent ();
                showContent (num);
            }
        });
    }
   });
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

// genre
let sh = document.getElementsByClassName("service__accordion");

for (let i = 0; i < sh.length; i++) {
  sh[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


// slider

const newItem = document.querySelector ('.newpopular__item'),
      newField = document.querySelector ('.newpopular__field'),
      newBody = document.querySelectorAll ('.newpopular__body'),
      newBlock = document.querySelector ('.newpopular__body'),
      newLeft = document.querySelector ('.newpopular__btn-left'),
      newRight = document.querySelector ('.newpopular__btn-right'),
      newWidth = window.getComputedStyle (newBlock).width;

let newIndex = 1,
    newOffset = 0;

newField.style.width = 100 * newBody.length + '%';
newBody.forEach (item => {
  item.style.width = newWidth;
});

function intervalSlides () {
  if (newOffset == +newWidth.slice (0, newWidth.length - 2) * (newBody.length - 1)) {
      newOffset = 0;
  }
  else {
      newOffset += +newWidth.slice (0, newWidth.length - 2);
  }

  newField.style.transform = `translateX(-${newOffset}px)`;

  }

let timerBlock = setInterval (() => {
  intervalSlides();
  if (newIndex == newBody.length) {
    newIndex = 1;
  } else {
    newIndex++;
  }
}, 4000);

newRight.addEventListener ('click', () => {
    intervalSlides ();
    if (newIndex == newBody.length) {
        newIndex = 1;
    } else {
        newIndex++;
    }
});

newLeft.addEventListener ('click', () => {
  if (newOffset == 0) {
      newOffset = +newWidth.slice (0, newWidth.length - 2) * (newBody.length - 1);  
  } else {
      newOffset -= +newWidth.slice (0, newWidth.length - 2);
  }
  newField.style.transform = `translateX(-${newOffset}px)`;

  if (newIndex == 1) {
    newIndex = newBody.length;
  } else {
    newIndex--;
  }
});

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd;
} 

if(mm<10) {
    mm = '0'+mm;
} 
if (mm == 4) {
  mm = 'апреля';
} else if (mm == 5) {
  mm = 'мая';
}

today = dd + ' ' + mm;

const div = document.createElement ('div');
div.classList.add ('date');
div.innerHTML = `
   Сегодня ${today}
`;
document.querySelector ('.serial').append (div);

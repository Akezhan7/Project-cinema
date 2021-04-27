'use strict';
const by = document.querySelectorAll ('#by-button'),
      order = document.querySelector ('.order'),
      closeBtn = document.querySelector ('.order__close'),
      orderBlock = document.querySelectorAll ('.order__place-block'),
      titl = document.querySelector ('.title'),
      form = document.querySelector ('.order__form');

// let newDate = new Date ();
// console.log (newDate);

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0!
let yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd;
} 

if(mm<10) {
    mm = '0'+mm;
} 

today = dd + '.' + mm + '.' + yyyy;

const title = document.createElement ('div');
title.classList.add ('title');

title.innerHTML = `
Фильмы на: ${today}
`;
document.querySelector ('.by__item').prepend (title);
      


by.forEach (item => {
    item.addEventListener ('click', () => {
        showOrder();
    });
});
by[0].addEventListener ('click', () => {
    orderBlock[2].classList.add ('free');
    orderBlock[12].classList.add ('free');
    orderBlock[6].classList.add ('free');
    orderBlock[9].classList.add ('free');
    orderBlock[15].classList.add ('free');
});
by[1].addEventListener ('click', () => {
    orderBlock[17].classList.add ('free');
});
by[2].addEventListener ('click', () => {
    orderBlock[5].classList.add ('free');
});
by[3].addEventListener ('click', () => {
    orderBlock[13].classList.add ('free');
});
function showOrder () {
    order.classList.remove ('hidden');
    order.classList.add ('show');
    document.body.style.overflow = 'hidden';
}

function hiddenOrder () {
    order.classList.remove ('show');
    order.classList.add ('hidden');
    document.body.style.overflow = '';
}

closeBtn.addEventListener ('click', () => {
    hiddenOrder ();
});

// order.addEventListener ('click', (e) => {
//     if (e.target === order) {
//       hiddenOrder ();  
//     }
// });
  
document.addEventListener ('keydown', (e) => {
    if (e.code === 'Escape' && order.classList.contains('show')) {
      hiddenOrder ();
    }
});

orderBlock.forEach (item => {
    item.classList.add ('occ');
    item.addEventListener ('click', () => {
        if (item.classList.contains ('free') == true) {
            item.classList.remove ('occ');
            item.classList.add ('select');
            if (item.classList.contains ('select').length >= 2) {
                console.log ('asdasd');
            }
        }
    });
});

const inpGen = document.createElement ('span'),
      inpStock = document.createElement ('span'),
      ticket = document.querySelector ('.inp-ticket'),
      checkBox = document.querySelector ('.inp-check'),
      btn1 = document.querySelector ('.btn-list-1'),
      btn2 = document.querySelector ('.btn-list-2'),
      btn3 = document.querySelector ('.btn-list-3'),
      btnOp = document.querySelector ('.btn-op');

      inpStock.classList.add ('stock');
      document.querySelector ('.order__sum').append (inpStock);
      btn1.addEventListener ('click', () => {
        inpStock.innerHTML = `
        Просмотрено довольно мало фильмов
        `;

      });
      btn2.addEventListener ('click', () => {
        inpStock.innerHTML = `
        Вы классический зритель
        `;
      });
      btn3.addEventListener ('click', () => {
        inpStock.innerHTML = `
        Вы киноман!
        `;
      });

// form.addEventListener ('submit', (e) => {
//     e.preventDefault ();

// });

postData (form);

const statusMessage = {
    loading:'Загрузка...',
    success: 'Успешно! Красавчик',
    fail: 'Error'
};

const postObj = async (url, data) => {
    const res = await fetch (url, {
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body:data
    });
    return await res.json ();
};

btnOp.addEventListener ('click', () => {
    let tick;
    if (checkBox.checked) {
        tick = ticket.value * 1800 + 1000;
    }
     else {
        tick = ticket.value * 1800;
    }
    inpGen.classList.add ('gen');
    inpGen.innerHTML = `
    Итоговая сумма: ${tick}
    `;
    document.querySelector ('.order__sum').prepend (inpGen);
});

function dateToEpoch(thedate) {
    var time = thedate.getTime();
    return time - (time % 86400000);
}

function postData (form) {
    form.addEventListener ('submit', (e) => {
        e.preventDefault ();


        const div = document.createElement ('div');
        div.innerHTML = `
         <img src="/img/load/aa1.gif" alt="">        
        `;
        div.classList.add ('oval');
        // div.textContent = statusMessage.loading;
        form.append (div);

        const newForm = new FormData (form);

        const jsonObj = JSON.stringify (Object.fromEntries(newForm.entries()));

        postObj ('http://localhost:3000/dan', jsonObj)
        .then (data => {
            form.reset();
            div.remove ();
            showSuc ();
        }) 
        .catch (() => {
            showFail ();
            div.remove();
        })
        .finally (() => {
            form.reset();
        });
    });
}


function showSuc () {
    const suc = document.querySelector ('.success');
    order.classList.remove ('show');
    order.classList.add ('hidden');
    suc.classList.remove ('hidden');
    suc.classList.add ('show');
    setTimeout (() => {
        suc.classList.add ('hidden');
        document.body.style.overflow = '';
    }, 4000);
    document.querySelector ('.success__close').addEventListener ('click', () => {
        suc.classList.remove ('show');
        suc.classList.add ('hidden');
    });
}


function showFail () {
    const fail = document.querySelector ('.fail');
    order.classList.remove ('show');
    order.classList.add ('hidden');
    fail.classList.remove ('hidden');
    fail.classList.add ('show');
    setTimeout (() => {
        fail.classList.add ('hidden');
        document.body.style.overflow = '';
    }, 4000);
    document.querySelector ('.fail__close').addEventListener ('click', () => {
        fail.classList.add ('hidden');
    });
}

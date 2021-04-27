'use strict';
const btnReg = document.querySelector ('.reg-1'),
      btnVh = document.querySelector ('.vh-1'),
      blockVh = document.querySelector ('.reg__vh'),
      blockReg = document.querySelector ('.reg__reg'),
      raz = document.querySelector ('.raz');

btnVh.addEventListener ('click', () => {
    blockVh.classList.remove ('hidden');
    blockVh.classList.add ('show');
    blockReg.classList.add ('hidden');
    btnVh.style.color = '#d50082';
    btnReg.style.color = 'white';
});
function openReg () {
    blockReg.classList.remove ('hidden');
    blockReg.classList.add ('show');
    blockVh.classList.add ('hidden');
    btnVh.style.color = 'white';
    btnReg.style.color = '#d50082';
}
btnReg.addEventListener ('click', () => {
openReg();
});
// console.log (btnVh);

const forms = document.querySelectorAll ('form');

forms.forEach (item => {
    postData (item);
});
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
        body: data
    });
   return await res.json();
};

function postData (item) {
    
    item.addEventListener ('submit', (e) => {
        e.preventDefault ();

        const div = document.createElement ('div');
        div.innerHTML = `
         <img src="/img/load/oval.svg" alt="">        
        `;
        div.classList.add ('oval');
        // div.textContent = statusMessage.loading;
        item.append (div);

        // для формата json
        // request.setRequestHeader ('Content-type', 'application/json'); 

        const formData = new FormData(item);

        // для формата json
        const jsonObj = JSON.stringify (Object.fromEntries(formData.entries()));
        // для формата json

        postObj ('http://localhost:3000/requests', jsonObj)
        .then (data => {
            console.log (data);
            item.reset();
            div.remove();
            showFinalSuc();
        })
        .catch (()=> {
            showFinalFail ();
            div.remove();
        })
        .finally (() => {
            item.reset();
        });

    });
}
function deleteItem () {
    btnVh.classList.add ('hidden');
    btnReg.classList.add ('hidden');
    raz.classList.add ('hidden');
    blockReg.classList.add ('hidden');
    blockVh.classList.add ('hidden');
}
function showItem () {
    blockVh.classList.remove ('hidden');
    blockVh.classList.add ('show');
    btnVh.classList.remove ('hidden');
    btnVh.classList.add ('show');
    btnReg.classList.remove ('hidden');
    btnReg.classList.add ('show');
    raz.classList.remove ('hidden');
    raz.classList.add ('show');
}
function showFinalSuc () {
    const suc = document.querySelector ('.suc');
    deleteItem ();
    suc.classList.remove ('hidden');
    suc.classList.add ('show');
    setTimeout (() => {
        suc.classList.add ('hidden');
        showItem ();
    }, 4000);
}
function showFinalFail () {
    const fail = document.querySelector ('.fal');

    deleteItem ();
    fail.classList.remove ('hidden');
    fail.classList.add ('show');
    setTimeout (() => {
        fail.classList.add ('hidden');
        showItem ();
    }, 4000);
}
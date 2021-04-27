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

const div = document.createElement ('div');
div.classList.add ('date');
div.innerHTML = `
    ${today}
`;
document.querySelector ('.main__date').append (div);
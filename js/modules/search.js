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

export default search;
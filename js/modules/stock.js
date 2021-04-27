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
    
export default stock;
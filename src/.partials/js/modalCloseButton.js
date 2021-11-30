import modalFilmTmp from '../.hbs';
import ApiService from '../js/apiService.js';

const openModalEl = document.querySelector('.');
const closeModalEl = document.querySelector('.js-close-modal');
const modalEl = document.querySelector('.js-modal');
const bodyEl = document.querySelector('body');
const modalFilmCardEl = document.querySelector('.js-film');


openModalEl.addEventListener('click', onClick);


function onClick (event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
        return;
    }
    openModal ();  
}
  
function openModal () {
    modalEl.classList.remove('visually-hidden');
    if (!modalEl.classList.contains('visually-hidden')) {
        bodyEl.classList.add('overflow-hidden');
    } 
    closeModalEl.addEventListener('click', closeModal);
    modalEl.addEventListener('click', closeModal);
    window.addEventListener('keydown', closeModalByEsc);
}

function closeModal (event) {
    if (event.target == this) {
    modalEl.classList.add('visually-hidden');
    bodyEl.classList.remove('overflow-hidden');
    removeModalListener();}
   
    
}
  
function closeModalByEsc (event) {
    if (event.code === 'Escape') {
        modalEl.classList.add('visually-hidden');
        bodyEl.classList.remove('overflow-hidden');
        removeModalListener();
    }
};
    
function removeModalListener () {
    closeModalEl.removeEventListener('click', closeModal);
    modalEl.removeEventListener('click', closeModal);
    window.removeEventListener('keydown', closeModalByEsc);
  
};

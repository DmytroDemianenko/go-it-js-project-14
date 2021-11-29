import modalFilmDescription from '../modal-film-description.hbs';
import createCardMovies from '../film-card.hbs';
import TmdbApiService from './apiService';
// const list = document.querySelector('.collection');
// list.insertAdjacentHTML('beforeend', createCardMovies);

export default function modalMovie() {
  const refs = {
    galleryList: document.querySelector('.collection'),
    movieModal: document.querySelector('.backdrop'),
    movieContent: document.querySelector('.modal__content'),
    closeModal: document.querySelector('.button-modal--close'),
    //   cardFilm: document.querySelector('.film-card')
  };

  refs.movieModal.addEventListener('click', onModalClick);
  refs.galleryList.addEventListener('click', onPictureClick);
  refs.closeModal.addEventListener('click', onCloseModalClick);

  function appendImgMarkup(i) {
    refs.movieContent.insertAdjacentHTML('beforeend', modalFilmDescription(i));
  }
  appendImgMarkup();
  function onPictureClick(evt) {
    evt.preventDefault();
    // console.log(evt);
    //   if (!evt.target.classList.contains('film-card')) {
    //     return;
    //   }
    refs.movieModal.classList.remove('is-hidden');
    //   console.log(modalMarkup(evt.path[3]));
    //   refs.movieContent.innerHTML = '';
    //   refs.movieContent.insertAdjacentHTML('afterbegin', modalMarkup(evt.path[3]));
  }

  // закрывается по кнопке
  function onCloseModalClick() {
    refs.movieModal.classList.add('is-hidden');
    refs.movieContent.src = '';
  }

  // при клике на пустое место закрывается модалка
  function onModalClick(evt) {
    if (refs.movieModal) {
      onCloseModalClick();
    }
  }

  // при клике на ESC закрывается модалка
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      onCloseModalClick();
    }
  });
}
modalMovie();

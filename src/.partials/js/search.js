export default function getRefs() {
    return {
      searchForm: document.querySelector('.header__form'),
      galleryList: document.querySelector('.collection'),
    };
  };

import imgTemp from '../film-card.hbs';
const refs=getRefs();
import TmdbSearchApiService from './apiServiceSearch';
const tmdbSearchApiService = new TmdbSearchApiService();
refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e){
  e.preventDefault();
    refs.galleryList.innerHTML = '';
    tmdbSearchApiService.query = e.currentTarget.query.value;
    if (tmdbSearchApiService.query === '') {
      return error({
        text: 'Enter text!',
        delay: 300,
      });
    }
clearHitsContainer();
    tmdbSearchApiService.resetPage();
    tmdbSearchApiService.fetchFilms().then(appendImgMarkup);
  }
  
  function appendImgMarkup(image) {
    refs.galleryList.insertAdjacentHTML('beforeend', imgTemp(image));
  }
  
  function clearHitsContainer() {
     refs.galleryList.innerHTML = '';
  }
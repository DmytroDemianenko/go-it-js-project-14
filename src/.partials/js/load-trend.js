export default function getRefs() {
    return {
      searchForm: document.querySelector('.header-form'),
      galleryList: document.querySelector('.collection'),
    };
  };
  
  import imgTemp from '../film-card.hbs';
  const refs = getRefs();
  import TmdbApiService from './apiServiceTrend';
  const tmdbApiService = new TmdbApiService();
  
  // refs.loadMore.addEventListener('click', onLoadMore);
  // refs.galleryList.addEventListener('click', openLargeImage);
  // refs.loadMore.style.display = 'none';

  function onLoadTrend(){
      clearHitsContainer();
    tmdbApiService.resetPage();
    tmdbApiService.fetchFilms().then(appendImgMarkup);
  }
    onLoadTrend();
  
  // function onLoadMore() {
  //   tmdbApiService.fetchFilms().then(appendImgMarkup);
  // }
  
  function appendImgMarkup(image) {
    // refs.loadMore.style.display = 'block';
    refs.galleryList.insertAdjacentHTML('beforeend', imgTemp(image));
    // scrollInto();
  }
  
  function clearHitsContainer() {
    refs.galleryList.innerHTML = '';
  }
  
//   function scrollInto() {
//     // refs.loadMore.scrollIntoView
//     ({
//       behavior: 'smooth',
//       block: 'end',
//     });
//   }

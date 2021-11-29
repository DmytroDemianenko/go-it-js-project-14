const BASE_URL = 'https://api.themoviedb.org';
const API_URL = '070151ea430b4e74dbca9bca592b262c';

export default class TmdbSearchApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    
    fetchFilms() {
        return fetch(
          `${BASE_URL}/3/search/movie?api_key=${API_URL}&query=${this.searchQuery}&language=en-US&include_adult=false`
          )
          .then(response => response.json())
          .then(({ results }) => {
            this.incrementPage();
            return results;
          });
    }
      
      incrementPage() {
        this.page += 1;
      }
      resetPage() {
        this.page = 1;
      }
      get query() {
        return this.searchQuery;
      }
      set query(newQuery) {
        this.searchQuery = newQuery;
      }
    }
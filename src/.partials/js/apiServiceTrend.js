export default class TmdbApiService{

fetchFilms() {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=070151ea430b4e74dbca9bca592b262c`
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
}

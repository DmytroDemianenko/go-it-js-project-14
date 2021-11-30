const axios = require('axios').default;
import libElements from './refsLib'
  import card from '../.partials/film-card-lib.hbs';
const refs = libElements();


(function checkLogin() {
  
  
  if (refs.loggedStatus === 'true') {
    refs.queueLibBtn.addEventListener('click', (e) => {
      e.preventDefault();
      

    })
    
  }
})()

let userName = localStorage.getItem('accName');
let userToken = localStorage.getItem('token');
fetchFilms(userName, userToken).then(res => {
  let data = res.data
  console.log(card(data))
})

function fetchFilms(name, token) {
  return axios.get(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}.json?auth=${token}`, )
}
const axios = require('axios').default;
  import libElements from './refsLib'
const refs = libElements();


(function checkLogin() {
  
  
  if (refs.loggedStatus === 'true') {
    refs.queueLibBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('hello queue');
    })
    refs.watchedLibBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('hello watched');
    })
  }
})()

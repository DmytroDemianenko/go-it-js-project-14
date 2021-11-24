const refs = {
  justBtn: document.querySelector('#just-btn'),
}



refs.justBtn.addEventListener('click', (e) => {
  e.preventDefault();
  create('her').then(console.log)
})

const create = function (token, data) {
  // if (!token) {
  //   return Promise.resolve(console.log('такого токена  нет'))
  // }
  return fetch(`https://kinoteka-hd-default-rtdb.europe-west1.firebasedatabase.app/registr.json/auth=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
  }).then(res => res.json()).then(console.log)
}
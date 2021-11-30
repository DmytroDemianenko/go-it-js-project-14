export default function refsLib() {
  return {
   
    queueLibBtn: document.querySelector('#btn-queue'),
      watchedLibBtn: document.querySelector('#btn-watched'),
      loggedStatus : localStorage.getItem('logged'),
  }
}
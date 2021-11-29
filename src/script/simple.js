import refs from "./refs";

const refsMain = {
  headerInput: document.querySelector('.header__input'),
  inputText: document.querySelector('.header__input-text'),
  iconSearch: document.querySelector('.icon-search'),
  
  
  modalReg: document.querySelector('#modal'),
  regCloseBtn: document.querySelector('#reg-close-btn'),
  singupBtn: document.querySelector('#singup-btn'),
  
  
  
  modalLog: document.querySelector('#modal-log'),
  logCloseBtn: document.querySelector('#log-close-btn'),
  loginBtn: document.querySelector('#login-btn'),
  
  headerMainBtn: document.querySelector('#main-home-btn'),
  headerLibraryBtn: document.querySelector('#my-lib-btn'),
  headerLibrary: document.querySelector('.header-lib'),
  headerMain: document.querySelector('.header'),
}

refsMain.headerLibraryBtn.addEventListener('click', (e) => {
  e.preventDefault()
  refsMain.headerMain.classList.add('invisible')
  refsMain.headerLibrary.classList.remove('invisible')
})

refsMain.headerMainBtn.addEventListener('click', (e) => {
  e.preventDefault()
  refsMain.headerMain.classList.remove('invisible')
  refsMain.headerLibrary.classList.add('invisible')
})
// console.log(refsMain.loginBtn);




refsMain.headerInput.addEventListener('focus', (e) => {
  e.preventDefault();
  
  refsMain.inputText.classList.add('invsbl');
})
refsMain.headerInput.addEventListener('blur', (e) => {
  if (e.target.value.length > 0) {
    return;
  }
    refsMain.inputText.classList.remove('invsbl')
  
   
})
  refsMain.iconSearch.addEventListener('click', () => {
 
  refsMain.headerInput.value = '';
  refsMain.inputText.classList.remove('invsbl')
})
refsMain.singupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalReg.classList.add('visible');
  // console.log('hello');
})
refsMain.loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalLog.classList.add('visible');
  // console.log('hello');
})
refsMain.regCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalReg.classList.remove('visible');
})
refsMain.logCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalLog.classList.remove('visible');
})



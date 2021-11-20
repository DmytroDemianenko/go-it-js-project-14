const refs = {
  headerInput: document.querySelector('.header__input'),
  inputText: document.querySelector('.header__input-text'),
  iconSearch: document.querySelector('.icon-search')
}

refs.headerInput.addEventListener('focus', (e) => {
  e.preventDefault();
  
  refs.inputText.classList.add('invsbl');
})
refs.headerInput.addEventListener('blur', (e) => {
  if (e.target.value.length > 0) {
    return;
  }
    refs.inputText.classList.remove('invsbl')
  
   
})
refs.iconSearch.addEventListener('click', () => {
 
  console.log(refs.headerInput.value);
  refs.headerInput.value = '';
  refs.inputText.classList.remove('invsbl')
})
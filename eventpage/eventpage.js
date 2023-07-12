const readMoreBtn = document.querySelector('.ver-card-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Read More'){
    readMoreBtn.innerText = 'Read Less';
  }else{
    readMoreBtn.innerText = 'Read More';
  }
})

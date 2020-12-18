const burgerBtn = document.querySelector('.burger');
const about = document.querySelector('#about-me');
about.style.top = '-1500px';

burgerBtn.addEventListener('click', () => {
  if (about.style.top === '-1500px') {
    about.style.top = '0';
    burgerBtn.classList.remove('burger');
    burgerBtn.classList.add('burgerX');
  } else {
    about.style.top = '-1500px';
    burgerBtn.classList.remove('burgerX');
    burgerBtn.classList.add('burger');
  }
});
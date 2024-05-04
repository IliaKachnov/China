const openCallModal = document.getElementById('popupCall__open');
const closeCallModal = document.getElementById('popupCall__close');
const modalCall = document.querySelector('.popup__call');


openCallModal.addEventListener('click', () => {
  modalCall.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeCallModal.addEventListener('click', () => {
  modalCall.classList.remove('open')
  document.body.style.overflow = 'visible';
});


const navBurger = document.querySelector('.nav');
const burgerToggle = document.querySelector('.burger')

burgerToggle.addEventListener('click', () => {
  navBurger.classList.toggle('open');
});





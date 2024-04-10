var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

var swiper = new Swiper(".mySwiperReviews", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});


const input = document.querySelector("#phone");

window.intlTelInput(input, {
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});

const button = document.querySelector("#btn");
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");

const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];



const reset = () => {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};



input.addEventListener('change', reset);
input.addEventListener('keyup', reset);


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



const firstStep = document.querySelector('.first__step')
const secondStep = document.querySelector('.second__step')
const finalStep = document.querySelector('.final__step')

const calcBtnNextFirst = document.querySelector('.calc__button.first');
const calcBtnNextSecond = document.querySelector('.calc__button.second');
const calcBtnPrevFirst = document.querySelector('.calc__button.prev.first');
const calcBtnPrevSecond = document.querySelector('.calc__button.prev.second');
const calcBtnSend = document.querySelector('.calc__button.send')

calcBtnNextFirst.addEventListener('click', () => {
  firstStep.classList.add('close');
  calcBtnNextFirst.classList.add('hide');
  calcBtnNextSecond.classList.remove('hide')
  secondStep.classList.remove('close');
  calcBtnPrevFirst.classList.remove('hide')
})
calcBtnPrevFirst.addEventListener('click', () => {
  calcBtnPrevFirst.classList.add('hide')
  firstStep.classList.remove('close');
  calcBtnNextFirst.classList.remove('hide');
  calcBtnNextSecond.classList.add('hide')
  secondStep.classList.add('close');
});

calcBtnNextSecond.addEventListener('click', () => {
  finalStep.classList.remove('close')
  calcBtnPrevSecond.classList.remove('hide');
  calcBtnSend.classList.remove('hide')
  calcBtnNextSecond.classList.add('hide')
  calcBtnPrevFirst.classList.add('hide');
  secondStep.classList.add('close')
})
calcBtnPrevSecond.addEventListener('click', () => {
  calcBtnNextSecond.classList.remove('hide')
  calcBtnPrevFirst.classList.remove('hide');
  calcBtnPrevSecond.classList.add('hide');
  calcBtnSend.classList.add('hide')
  finalStep.classList.add('close')
  secondStep.classList.remove('close');
})

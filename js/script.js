const slider = document.querySelector('.slider');

const formLink = document.querySelector('.button-contacts');
const formPopup = document.querySelector('.modal');
const formClose = formPopup.querySelector('.modal-close');
const formName = formPopup.querySelector('.name-user');
const formForm = formPopup.querySelector('.modal-form');
const formEmail = formPopup.querySelector('.email-user');


if (slider) {
  const slideOne = slider.querySelector('.slide-one');
  const slideTwo = slider.querySelector('.slide-two');
  const slideThree = slider.querySelector('.slide-three');
  const switchOne = slider.querySelector('.slider-switch-one');
  const switchTwo = slider.querySelector('.slider-switch-two');
  const switchThree = slider.querySelector('.slider-switch-three');
  switchOne.addEventListener('click', function(evt) {
    evt.preventDefault();

    switchOne.classList.add('slider-switch-active');
    slideOne.classList.add('slide-visible');

    switchTwo.classList.remove('slider-switch-active');
    slideTwo.classList.remove('slide-visible');
    switchThree.classList.remove('slider-switch-active');
    slideThree.classList.remove('slide-visible');
  });

  switchTwo.addEventListener('click', function(evt) {
    evt.preventDefault();

    switchTwo.classList.add('slider-switch-active');
    slideTwo.classList.add('slide-visible');

    switchOne.classList.remove('slider-switch-active');
    slideOne.classList.remove('slide-visible');
    switchThree.classList.remove('slider-switch-active');
    slideThree.classList.remove('slide-visible');
  });

  switchThree.addEventListener('click', function(evt) {
    evt.preventDefault();

    switchThree.classList.add('slider-switch-active');
    slideThree.classList.add('slide-visible');

    switchOne.classList.remove('slider-switch-active');
    slideOne.classList.remove('slide-visible');
    switchTwo.classList.remove('slider-switch-active');
    slideTwo.classList.remove('slide-visible');
  });
}

let isStorageSupport = true;
let storage = '';


try {
  storage = localStorage.getItem('form');
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.add('modal-show');

  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
    formName.focus();
  }
});

formClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  formPopup.classList.remove('modal-show');
  formPopup.classList.remove('modal-error');
});

formForm.addEventListener('submit', function (evt) {
  if (!formName.value || !formEmail.value) {
    evt.preventDefault();
    formPopup.classList.add('modal-error');
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add('modal-error');
  } else {
    localStorage.setItem('form', formName.value);
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (formPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      formPopup.classList.remove('modal-show');
      formPopup.classList.remove('modal-error');
    }
  }
});

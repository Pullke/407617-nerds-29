const slider = document.querySelector('.slider');
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

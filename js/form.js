const formLink = document.querySelector('.button-contacts');
const formPopup = document.querySelector('.modal');
const formClose = formPopup.querySelector('.modal-close');
const formName = formPopup.querySelector('.name-user');
const formForm = formPopup.querySelector('.modal-form');
const formEmail = formPopup.querySelector('.email-user');

let isStorageSupport = true;
const storage = '';


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

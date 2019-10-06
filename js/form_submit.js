'use strict';
(function () {
  // валидация имени персонажа
  window.userNameInput.setAttribute('minlength', '2');
  // отправка формы при нажатии на кнопку СОХРАНИТЬ
  var formSetup = document.querySelector('.setup-wizard-form');
  var formSetupButton = formSetup.querySelector('.setup-submit');

  var onformSetupButtonClick = function () {
    formSetup.action = 'https://js.dump.academy/code-and-magick';
    formSetup.method = 'post';
    formSetup.enctype = 'multipart/form-data';
    if (window.userNameInput.validity.valid) {
      formSetup.submit();
    }
  };

  formSetupButton.addEventListener('click', onformSetupButtonClick);

  // отправка формы при нажатии на кнопку ENTER
  var onformSetupPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE && evt.target === formSetupButton) {
      onformSetupButtonClick();
    }
  };
  formSetupButton.addEventListener('keydown', onformSetupPress);
})()
;

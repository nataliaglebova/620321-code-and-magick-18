'use strict';
(function () {
// открытие/закрытие окнa
// открытие окна настройки персонажа
  var openSetupWindow = function () {
    window.util.setupBlock.classList.remove('hidden');
  };

  // -- по клику
  var setupOpenBlock = document.querySelector('.setup-open');
  setupOpenBlock.addEventListener('click', openSetupWindow);

  // -- по кнопкам на клавиатуре ENTER
  setupOpenBlock.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openSetupWindow();
    }
  }
  );

  // закрытие окна настройки персонажа
  var closeSetupWindow = function () {
    window.util.setupBlock.classList.add('hidden');
  };

  // -- по клику
  var setupCloseBlock = window.util.setupBlock.querySelector('.setup-close');
  setupCloseBlock.addEventListener('click', closeSetupWindow);

  // -- по кнопкам на клавиатуре ESC
  window.userNameInput = window.util.setupBlock.querySelector('.setup-user-name');
  var onSetupBlockEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE && evt.target !== window.userNameInput) {
      closeSetupWindow();
    }
  };
  document.addEventListener('keydown', onSetupBlockEscPress);

  // -- по кнопкам на клавиатуре ENTER на крестике
  var onCloseBlockEnterPress = function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE && evt.target === setupCloseBlock) {
      closeSetupWindow();
    }
  };
  document.addEventListener('keydown', onCloseBlockEnterPress);
})();
// перемещение окна
var uploadBlock = document.querySelector('.upload');
uploadBlock.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var dragged = false;
  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    window.util.setupBlock.style.top = (window.util.setupBlock.offsetTop - shift.y) + 'px';
    window.util.setupBlock.style.left = (window.util.setupBlock.offsetLeft - shift.x) + 'px';
  };
  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventDefault = function () {
        evt.preventDefault();
        uploadBlock.removeEventListener('click', onClickPreventDefault);
      };
      uploadBlock.addEventListener('click', onClickPreventDefault);
    }

  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

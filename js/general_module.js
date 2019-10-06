'use strict';
//  родительский модуль со всеми важными значениями
(function () {
  var setupBlock = document.querySelector('.setup');
  var PLAYERS_NUMBER = 4;
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  // функция генерации случайного элемента массива
  var getRandomElement = function (arr) {
    var j = Math.floor(Math.random() * arr.length);
    return arr[j];
  };
  // массивы данных
  var namesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnamesList = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
  var colorsForCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorsForEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  // массив цветов фаерболов
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.util = {
    setupBlock: setupBlock,
    PLAYERS_NUMBER: PLAYERS_NUMBER,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    getRandomElement: getRandomElement,
    namesList: namesList,
    surnamesList: surnamesList,
    colorsForCoat: colorsForCoat,
    colorsForEyes: colorsForEyes,
    fireballColor: fireballColor,

  };
})();

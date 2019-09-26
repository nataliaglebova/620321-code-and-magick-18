'use strict';
var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');

// массив имен
var namesList = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamesList = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var colorsForCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorsForEyes = ['black', 'red', 'blue', 'yellow', 'green'];

// функция генерации случайного элемента массива
var getRandomElement = function (arr) {
  var j = Math.floor(Math.random() * arr.length);
  return arr[j];
};

// генерация массива персонажей
var characters = [];
var PLAYERS_NUMBER = 4;
for (var i = 0; i < PLAYERS_NUMBER; i++) {
  characters [i] = {
    name: getRandomElement(namesList) + getRandomElement(surnamesList),
    coatColor: getRandomElement(colorsForCoat),
    eyesColor: getRandomElement(colorsForEyes)
  };
}
// открытие блока с персонажами
var similarListElement = document.querySelector('.setup-similar');
similarListElement.classList.remove('hidden');
//
// создание из шаблона фигурок игроков
var wizardTemplate = document.querySelector('#similar-wizard-template').content
    .querySelector('.setup-similar-item');

// функция для создания типовых персонажей
var renderWizard = function (wizard, q) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard[q].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard[q].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard[q].eyesColor;
  return wizardElement;
};
// копирование шаблона в нужном количестве
var fragment = document.createDocumentFragment();
for (var k = 0; k < PLAYERS_NUMBER; k++) {
  fragment.appendChild(renderWizard(characters, k));
}
// вставка фрагмента
var setupSimilarList = document.querySelector('.setup-similar-list');
setupSimilarList.appendChild(fragment);

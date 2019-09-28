'use strict';
var setupBlock = document.querySelector('.setup');
// setupBlock.classList.remove('hidden');

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

// открытие/закрытие окна
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

// открытие окна настройки персонажа
var openSetupWindow = function () {
  setupBlock.classList.remove('hidden');
};
// -- по клику
var setupOpenBlock = document.querySelector('.setup-open');
setupOpenBlock.addEventListener('click', function () {
  openSetupWindow();
});

// -- по кнопкам на клавиатуре ENTER
setupOpenBlock.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetupWindow();
  }
}
);

// закрытие окна настройки персонажа
var closeSetupWindow = function () {
  setupBlock.classList.add('hidden');
  document.removeEventListener('keydown', onSetupBlockEscPress);
};

// -- по клику
var setupCloseBlock = setupBlock.querySelector('.setup-close');
setupCloseBlock.addEventListener('click', function () {
  closeSetupWindow();
});

// -- по кнопкам на клавиатуре ESC
var userNameInput = setupBlock.querySelector('.setup-user-name');
var onSetupBlockEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== userNameInput) {
    closeSetupWindow();
  }
};
document.addEventListener('keydown', onSetupBlockEscPress);

// -- по кнопкам на клавиатуре ENTER на крестике
var onCloseBlockEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE && evt.target === setupCloseBlock) {
    closeSetupWindow();
  }
};
document.addEventListener('keydown', onCloseBlockEnterPress);

// отправка формы при нажатии на кнопку СОХРАНИТЬ
var formSetup = document.querySelector('.setup-wizard-form');
var formSetupButton = formSetup.querySelector('.setup-submit');
var onformSetupButtonClick = function () {
  formSetup.action = 'https://js.dump.academy/code-and-magick';
  formSetup.method = 'post';
  formSetup.enctype = 'multipart/form-data';
  formSetup.submit();
};
formSetupButton.addEventListener('click', onformSetupButtonClick);

// отправка формы при нажатии на кнопку ENTER
var onformSetupPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE && evt.target === formSetupButton) {
    onformSetupButtonClick();
  }
};
formSetupButton.addEventListener('keydown', onformSetupPress);

// валидация имени персонажа
userNameInput.setAttribute('minlength', '2');

// массив цветов фаерболов
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// изменение цвета плаща
var setupPlayerWizard = document.querySelector('.setup-player');
var setupWizardPicture = setupPlayerWizard.querySelector('.setup-wizard');
var setupWizardCoat = setupWizardPicture.querySelector('.wizard-coat');
var wizardCoatInput = setupPlayerWizard.querySelector('input[name = coat-color]');

var onSetupWizardPictureClick = function () {
  var currentCoatColor = getRandomElement(colorsForCoat);
  setupWizardCoat.style.fill = currentCoatColor;
  wizardCoatInput.setAttribute('value', currentCoatColor);
};

setupWizardCoat.addEventListener('click', onSetupWizardPictureClick);

// измение цвета глаз
var playerWizardEyes = setupPlayerWizard.querySelector('.wizard-eyes');
var wizardEyesInput = setupPlayerWizard.querySelector('input[name = eyes-color]');

var onPlayerWizardEyesClick = function () {
  var currentEyesColor = getRandomElement(colorsForEyes);
  playerWizardEyes.style.fill = currentEyesColor;
  wizardEyesInput.setAttribute('value', currentEyesColor);
};

playerWizardEyes.addEventListener('click', onPlayerWizardEyesClick);

// изменение фаербола

var setupWizardFireball = setupPlayerWizard.querySelector('.setup-fireball-wrap');
var wizardFireballInput = setupPlayerWizard.querySelector('input[name = fireball-color]');

var onWizardFireballClick = function () {
  var currentFireballColor = getRandomElement(fireballColor);
  setupWizardFireball.style.background = currentFireballColor;
  wizardFireballInput.setAttribute('value', currentFireballColor);
};

setupWizardFireball.addEventListener('click', onWizardFireballClick);

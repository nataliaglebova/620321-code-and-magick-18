'use strict';
(function () {
  // setupBlock.classList.remove('hidden');
  // генерация массива персонажей
  var characters = [];
  for (var i = 0; i < window.util.PLAYERS_NUMBER; i++) {
    characters [i] = {
      name: window.util.getRandomElement(window.util.namesList) + window.util.getRandomElement(window.util.surnamesList),
      coatColor: window.util.getRandomElement(window.util.colorsForCoat),
      eyesColor: window.util.getRandomElement(window.util.colorsForEyes)
    };
  }
  // открытие блока с персонажами
  var similarListElement = document.querySelector('.setup-similar');
  similarListElement.classList.remove('hidden');

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
  for (var k = 0; k < window.util.PLAYERS_NUMBER; k++) {
    fragment.appendChild(renderWizard(characters, k));
  }
  // вставка фрагмента
  var setupSimilarList = document.querySelector('.setup-similar-list');
  setupSimilarList.appendChild(fragment);

  // изменение цвета плаща
  var setupPlayerWizard = document.querySelector('.setup-player');
  var setupWizardPicture = setupPlayerWizard.querySelector('.setup-wizard');
  var setupWizardCoat = setupWizardPicture.querySelector('.wizard-coat');
  var wizardCoatInput = setupPlayerWizard.querySelector('input[name = coat-color]');
  var onSetupWizardPictureClick = function () {
    var currentCoatColor = window.util.getRandomElement(window.util.colorsForCoat);
    setupWizardCoat.style.fill = currentCoatColor;
    wizardCoatInput.setAttribute('value', currentCoatColor);
  };

  setupWizardCoat.addEventListener('click', onSetupWizardPictureClick);

  // измение цвета глаз
  var playerWizardEyes = setupPlayerWizard.querySelector('.wizard-eyes');
  var wizardEyesInput = setupPlayerWizard.querySelector('input[name = eyes-color]');

  var onPlayerWizardEyesClick = function () {
    var currentEyesColor = window.util.getRandomElement(window.util.colorsForEyes);
    playerWizardEyes.style.fill = currentEyesColor;
    wizardEyesInput.setAttribute('value', currentEyesColor);
  };
  playerWizardEyes.addEventListener('click', onPlayerWizardEyesClick);

  // изменение фаербола
  var setupWizardFireball = setupPlayerWizard.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = setupPlayerWizard.querySelector('input[name = fireball-color]');
  var onWizardFireballClick = function () {
    var currentFireballColor = window.util.getRandomElement(window.util.fireballColor);
    setupWizardFireball.style.background = currentFireballColor;
    wizardFireballInput.setAttribute('value', currentFireballColor);
  };
  setupWizardFireball.addEventListener('click', onWizardFireballClick);
})();

'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_X = 100;
  var CLOUD_WIDTH = 420;
  var CLOUD_HIGHT = 270;
// рисование тени облака со статистикой
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(320, 10);
  ctx.lineTo(CLOUD_X + 10, 50);
  ctx.lineTo(CLOUD_X + 10, CLOUD_HIGHT + 10);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + 10, CLOUD_HIGHT + 10);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + 10, 240);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + 10, 50);
  ctx.fill();

// рисование самого облака
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(310, 0);
  ctx.lineTo(CLOUD_X, 40);
  ctx.lineTo(CLOUD_X, CLOUD_HIGHT);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH, CLOUD_HIGHT);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH, 230);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH, 40);
  ctx.fill();
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 220, 30);
  ctx.fillText('Список результатов:', 210, 60);
// поиск максимального времени в массиве

  var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
  times = [1500, 1480, 3060, 2590];

  var maxTime = getMaxElement(times);
// отрисовка гистограммы
  var GAP = 50;
  var GRAPH_WIDTH = 40;
  var GRAPH_X = 150;
  var GRAPH_HIGHT = 150;
  var STAT_HIGHT = 240;
  // var saturation = Math.floor(Math.random() * 100);
  // var hslColor= 'hsl('200',+ saturation +'%'+","+ '40'+'%')';

  names = ['Вы', 'Сириус', 'Арктур', 'Капелла'];
  for (var i = 0; i < names.length; i++) {
  ctx.fillStyle = 'black';
  ctx.fillText(names[i], GRAPH_X + (GRAPH_WIDTH + GAP) * i, STAT_HIGHT + GAP / 2);
  ctx.fillText(times[i], GRAPH_X + (GRAPH_WIDTH + GAP) * i, STAT_HIGHT - GRAPH_HIGHT * times[i] / maxTime - 10);
  if (names[i] === 'Вы') {
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  } else {
  ctx.fillStyle = 'blue';
}
  ctx.fillRect(GRAPH_X + (GRAPH_WIDTH + GAP) * i, STAT_HIGHT - GRAPH_HIGHT * times[i] / maxTime, GRAPH_WIDTH, GRAPH_HIGHT * times[i] / maxTime);
  }
};

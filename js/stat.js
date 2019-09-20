'use strict';

window.renderStatistics = function (ctx, names, times) {
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
  var maxTime = getMaxElement(times);
  // отрисовка гистограммы
  var GAP = 50;
  var GRAPH_WIDTH = 40;
  var GRAPH_X = 150;
  var GRAPH_HIGHT = 150;
  var STAT_HIGHT = 240;

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], GRAPH_X + (GRAPH_WIDTH + GAP) * i, STAT_HIGHT + GAP / 2);
    ctx.fillText(Math.round(times[i]), GRAPH_X + (GRAPH_WIDTH + GAP) * i, STAT_HIGHT - GRAPH_HIGHT * Math.round(times[i]) / maxTime - 10);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturation = Math.round(Math.random() * 100);
      var hslColor = 'hsl(240,' + saturation + '%, 50%)';
      ctx.fillStyle = hslColor;
    }
    ctx.fillRect(GRAPH_X + (GRAPH_WIDTH + GAP) * i, STAT_HIGHT - GRAPH_HIGHT * Math.round(times[i]) / maxTime, GRAPH_WIDTH, GRAPH_HIGHT * Math.round(times[i]) / maxTime);
  }
};
// функция для рисования облака и тени
var paintCloudAndShadow = function (CLOUD_X, CLOUD_HIGHT, CLOUD_WIDTH, START_POINT, ANGLE_POINT, SHADOW_MOVE, cloudColor, ctx) {
  ctx.beginPath();
  ctx.moveTo(START_POINT, SHADOW_MOVE);
  ctx.lineTo(CLOUD_X + SHADOW_MOVE, ANGLE_POINT + SHADOW_MOVE);
  ctx.lineTo(CLOUD_X + SHADOW_MOVE, CLOUD_HIGHT + SHADOW_MOVE);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + SHADOW_MOVE, CLOUD_HIGHT + SHADOW_MOVE);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + SHADOW_MOVE, CLOUD_HIGHT - ANGLE_POINT + SHADOW_MOVE);
  ctx.lineTo(CLOUD_X + CLOUD_WIDTH + SHADOW_MOVE, ANGLE_POINT + SHADOW_MOVE);
  ctx.fill();
  ctx.fillStyle = cloudColor;
};

// рисование тени облака
var CLOUD_X = 100;
var CLOUD_HIGHT = 270;
var CLOUD_WIDTH = 420;
var START_POINT = 320;
var ANGLE_POINT = 40;
var SHADOW_MOVE = 10;
var cloudColor = 'rgba(0, 0, 0, 0.7)';

// вынужденное объявление , т.к.  иначе lint считает что переменная не определена
var ctx;
paintCloudAndShadow(CLOUD_X, CLOUD_HIGHT, CLOUD_WIDTH, START_POINT, ANGLE_POINT, SHADOW_MOVE, cloudColor, ctx);
// рисование самого облака
SHADOW_MOVE = 10;
cloudColor = '#fff';
paintCloudAndShadow(CLOUD_X, CLOUD_HIGHT, CLOUD_WIDTH, START_POINT, ANGLE_POINT, SHADOW_MOVE, cloudColor, ctx);

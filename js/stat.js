'use strict';
window.renderStatistics = function (ctx, names, times) {
  var CLOUD_X = 100;
  var CLOUD_HIGHT = 270;
  var CLOUD_WIDTH = 420;
  var START_POINT = 320;
  var ANGLE_POINT = 50;
  var SHADOW_MOVE = 10;
  var CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';
  // рисование тени
  paintCloudAndShadow(CLOUD_X, CLOUD_HIGHT, CLOUD_WIDTH, START_POINT, ANGLE_POINT, SHADOW_MOVE, CLOUD_COLOR, ctx);
  // рисование облака
  SHADOW_MOVE = 0;
  CLOUD_COLOR = '#FFF';
  paintCloudAndShadow(CLOUD_X, CLOUD_HIGHT, CLOUD_WIDTH, START_POINT, ANGLE_POINT, SHADOW_MOVE, CLOUD_COLOR, ctx);

  // надписи в облаке
  var FONT_STYLE = '16px PT Mono';
  var TEXT_COLOR = '#000';
  var WINNER_TEXT = 'Ура вы победили!';
  var WINNER_TEXT_X = 220;
  var WINNER_TEXT_Y = 35;
  var RESULT_TEXT = 'Список результатов:';
  var RESULT_TEXT_X = 210;
  var RESULT_TEXT_Y = 60;
  printWelcomeWords(FONT_STYLE, TEXT_COLOR, WINNER_TEXT, WINNER_TEXT_X, WINNER_TEXT_Y, RESULT_TEXT, RESULT_TEXT_X, RESULT_TEXT_Y, ctx);

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
    ctx.fillStyle = '#000';
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
var paintCloudAndShadow = function (CLOUD_X, CLOUD_HIGHT, CLOUD_WIDTH, START_POINT, ANGLE_POINT, SHADOW_MOVE, CLOUD_COLOR, ctx) {
  ctx.beginPath();
  ctx.moveTo(START_POINT, SHADOW_MOVE);
  ctx.lineTo((CLOUD_X + SHADOW_MOVE), (ANGLE_POINT + SHADOW_MOVE));
  ctx.lineTo((CLOUD_X + SHADOW_MOVE), CLOUD_HIGHT + SHADOW_MOVE);
  ctx.lineTo((CLOUD_X + CLOUD_WIDTH + SHADOW_MOVE), (CLOUD_HIGHT + SHADOW_MOVE));
  ctx.lineTo((CLOUD_X + CLOUD_WIDTH + SHADOW_MOVE), (CLOUD_HIGHT - ANGLE_POINT + SHADOW_MOVE));
  ctx.lineTo((CLOUD_X + CLOUD_WIDTH + SHADOW_MOVE), (ANGLE_POINT + SHADOW_MOVE));
  ctx.fillStyle = CLOUD_COLOR;
  ctx.fill();
};

// функция вывода текста в облаке
var printWelcomeWords = function (FONT_STYLE, TEXT_COLOR, WINNER_TEXT, WINNER_TEXT_X, WINNER_TEXT_Y, RESULT_TEXT, RESULT_TEXT_X, RESULT_TEXT_Y, ctx) {
  ctx.font = FONT_STYLE;
  ctx.fillStyle = TEXT_COLOR;
  ctx.fillText(WINNER_TEXT, WINNER_TEXT_X, WINNER_TEXT_Y);
  ctx.fillText(RESULT_TEXT, RESULT_TEXT_X, RESULT_TEXT_Y);
};

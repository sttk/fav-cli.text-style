'use strict';

var ansi = require('./ansi');
var controlByColorDepth = require('./control-by-color-depth');
var defineProperties = require('./define-properties');

function defineMoreColors(obj, env) {
  var colors256 = {
    color: ansi.fg256Color,
    bgColor: ansi.bg256Color,
  };
  controlByColorDepth(colors256, env.colorDepth, 8, getNoEffect);
  defineProperties(obj, colors256);

  var colors16m = {
    rgb: ansi.fg16mColor,
    bgRgb: ansi.bg16mColor,
  };
  controlByColorDepth(colors16m, env.colorDepth, 24, getNoEffect);
  defineProperties(obj, colors16m);
}

function getNoEffect() {
  return ansi.noEffect;
}

module.exports = defineMoreColors;

'use strict';

var ansi = require('./ansi');
var controlByColorDepth = require('./control-by-color-depth');
var defineProperties = require('./define-properties');

function defineBg16Colors(obj, env) {
  var colors = {
    bgBlack: ansi.bg16Color(40),
    bgRed: ansi.bg16Color(41),
    bgGreen: ansi.bg16Color(42),
    bgYellow: ansi.bg16Color(43),
    bgBlue: ansi.bg16Color(44),
    bgMagenta: ansi.bg16Color(45),
    bgCyan: ansi.bg16Color(46),
    bgWhite: ansi.bg16Color(47),

    bgBrightBlack: ansi.bg16Color(100),
    bgBrightRed: ansi.bg16Color(101),
    bgBrightGreen: ansi.bg16Color(102),
    bgBrightYellow: ansi.bg16Color(103),
    bgBrightBlue: ansi.bg16Color(104),
    bgBrightMagenta: ansi.bg16Color(105),
    bgBrightCyan: ansi.bg16Color(106),
    bgBrightWhite: ansi.bg16Color(107),
  };

  // Follow APIs of chalk
  colors.bgGray = colors.bgBrightBlack;
  colors.bgGrey = colors.bgBrightBlack;
  colors.bgBlackBright = colors.bgBrightBlack;
  colors.bgRedBright = colors.bgBrightRed;
  colors.bgGreenBright = colors.bgBrightGreen;
  colors.bgYellowBright = colors.bgBrightYellow;
  colors.bgBlueBright = colors.bgBrightBlue;
  colors.bgMagentaBright = colors.bgBrightMagenta;
  colors.bgCyanBright = colors.bgBrightCyan;
  colors.bgWhiteBright = colors.bgBrightWhite;

  controlByColorDepth(colors, env.colorDepth, 4, ansi.noEffect);
  defineProperties(obj, colors);
}

module.exports = defineBg16Colors;

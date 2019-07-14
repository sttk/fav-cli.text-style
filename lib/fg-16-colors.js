'use strict';

var ansi = require('./ansi');
var controlByColorDepth = require('./control-by-color-depth');
var defineProperties = require('./define-properties');

function defineFg16Colors(obj, env) {
  var colors = {
    black: ansi.fg16Color(30),
    red: ansi.fg16Color(31),
    green: ansi.fg16Color(32),
    yellow: ansi.fg16Color(33),
    blue: ansi.fg16Color(34),
    magenta: ansi.fg16Color(35),
    cyan: ansi.fg16Color(36),
    white: ansi.fg16Color(37),

    brightBlack: ansi.fg16Color(90),
    brightRed: ansi.fg16Color(91),
    brightGreen: ansi.fg16Color(92),
    brightYellow: ansi.fg16Color(93),
    brightBlue: ansi.fg16Color(94),
    brightMagenta: ansi.fg16Color(95),
    brightCyan: ansi.fg16Color(96),
    brightWhite: ansi.fg16Color(97),
  };

  // Follow APIs of chalk
  colors.gray = colors.brightBlack;
  colors.grey = colors.brightBlack;
  colors.blackBright = colors.brightBlack;
  colors.redBright = colors.brightRed;
  colors.greenBright = colors.brightGreen;
  colors.yellowBright = colors.brightYellow;
  colors.blueBright = colors.brightBlue;
  colors.magentaBright = colors.brightMagenta;
  colors.cyanBright = colors.brightCyan;
  colors.whiteBright = colors.brightWhite;

  controlByColorDepth(colors, env.colorDepth, 4, ansi.noEffect);
  defineProperties(obj, colors);
}

module.exports = defineFg16Colors;

'use strict';

var ansi = require('./ansi');
var controlByColorDepth = require('./control-by-color-depth');
var defineProperties = require('./define-properties');

function defineModifiers(obj, env) {
  var modifiers = {
    bold: ansi.wrap(1, 22, /(\u001b\[22m|\u001b\[0m|\n)/),
    faint: ansi.wrap(2, 22, /(\u001b\[22m|\u001b\[0m|\n)/),
    italic: ansi.wrap(3, 23, /(\u001b\[23m|\u001b\[0m|\n)/),
    underline: ansi.wrap(4, 24, /(\u001b\[24m|\u001b\[0m|\n)/),
    slowBlink: ansi.wrap(5, 25, /(\u001b\[25m|\u001b\[0m|\n)/),
    reverse: ansi.wrap(7, 27, /(\u001b\[27m|\u001b\[0m|\n)/),
    conceal: ansi.wrap(8, 28, /(\u001b\[28m|\u001b\[0m|\n)/),
    crossedOut: ansi.wrap(9, 29, /(\u001b\[29m|\u001b\[0m|\n)/),
    doublyUnderline: ansi.wrap(21, 24, /(\u001b\[24m|\u001b\[0m|\n)/),
    reset: reset,
  };

  // On Windows, faint is ineffective and a combination of bold and faint make
  // disabled to be off bold. So this package adds no style on Windows.
  if (env.isWindows) {
    modifiers.faint = ansi.noEffect;
  }

  // Follow APIs of chalk
  modifiers.dim = modifiers.faint;
  modifiers.blink = modifiers.slowBlink;
  modifiers.inverse = modifiers.reverse;
  modifiers.hidden = modifiers.conceal;
  modifiers.strikethrough = modifiers.crossedOut;

  controlByColorDepth(modifiers, env.colorDepth, 4, ansi.noEffect);
  defineProperties(obj, modifiers);
}

function reset(text) {
  if (text == null) {
    text = '';
  }
  return ansi.esc(0) + text;
}

module.exports = defineModifiers;

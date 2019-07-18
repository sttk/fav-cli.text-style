'use strict';

function wrap(openCd, closeCd, groupRe) {
  groupRe = groupRe || new RegExp('\\u001b\\[' + openCd + 'm');

  var openEsc = esc(openCd);
  var closeEsc = esc(closeCd);

  var startRe = new RegExp('^' + groupRe.source);
  var endRe = new RegExp('\\u001b\\[' + closeCd + 'm$');
  var closeRe = new RegExp(
    '(\\u001b\\[' + closeCd + 'm|\\u001b\\[0m|\\n)' +
    '(?!' + groupRe.source + ').+');

  return function(text) {
    if (text == null || text === '') {
      return '';
    }
    text = resolveNest(text, openEsc, closeEsc, closeRe);
    if (!startRe.test(text)) {
      text = openEsc + text;
    }
    if (!endRe.test(text)) {
      text = text + closeEsc;
    }
    return text;
  };
}

function esc(cd) {
  return '\u001b[' + cd + 'm';
}

function resolveNest(text, openEsc, closeEsc, closeRe) {
  var m, ret = '';
  while (m = text.match(closeRe)) {
    switch (m[1]) {
      case '\n': {
        ret += text.slice(0, m.index) + closeEsc + m[1] + openEsc;
        break;
      }
      default: {
        ret += text.slice(0, m.index + m[1].length) + openEsc;
        break;
      }
    }
    text = text.slice(m.index + m[1].length);
  }
  return ret + text;
}

function fgColor(openCd) {
  return wrap(openCd, 39, /\u001b\[3[\d][^m]*m/);
}

function bgColor(openCd) {
  return wrap(openCd, 49, /\u001b\[4[\d][^m]*m/);
}

function fg256Color(code) {
  return fgColor('38;' + code);
}

function bg256Color(code) {
  return bgColor('48;' + code);
}

function fg16mColor(r, g, b) {
  return fgColor('38;2;' + r + ';' + g + ';' + b);
}

function bg16mColor(r, g, b) {
  return bgColor('48;2;' + r + ';' + g + ';' + b);
}

function noEffect(text) {
  if (text == null) {
    text = '';
  }
  return '' + text;
}

module.exports = {
  wrap: wrap,
  esc: esc,
  noEffect: noEffect,

  fg16Color: fgColor,
  bg16Color: bgColor,

  fg256Color: fg256Color,
  bg256Color: bg256Color,

  fg16mColor: fg16mColor,
  bg16mColor: bg16mColor,
};

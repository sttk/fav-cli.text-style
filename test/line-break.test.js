'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('Line break', function() {

  describe('Modifiers', function() {
    var styles = textStyles(4);

    it('Underline', function() {
      expect(styles.underline('abc\ndef')).to
        .equal('\u001b[4mabc\u001b[24m\n\u001b[4mdef\u001b[24m');
    });

  });

  describe('Colors', function() {
    var styles = textStyles(4);

    it('Red', function() {
      expect(styles.red('abc\ndef')).to
        .equal('\u001b[31mabc\u001b[39m\n\u001b[31mdef\u001b[39m');
    });
  });

  describe('Bg colors', function() {
    var styles = textStyles(4);

    it('Bg red', function() {
      expect(styles.bgRed('abc\ndef')).to
        .equal('\u001b[41mabc\u001b[49m\n\u001b[41mdef\u001b[49m');
    });
  });
});

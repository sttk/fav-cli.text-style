'use strict';

var chai = require('chai');
var expect = chai.expect;
var os = require('os');
var textStyles = require('..');

describe('Nest', function() {

  describe('Modifiers', function() {
    var styles = textStyles(4);

    it('Bold & faint', function() {
      if (os.platform() === 'win32') {
        expect(styles.bold('ABC' + styles.faint('DEF') + 'GHI')).to
          .equal('\u001b[1mABCDEFGHI\u001b[22m');
      } else {
        expect(styles.bold('ABC' + styles.faint('DEF') + 'GHI')).to
          .equal('\u001b[1mABC\u001b[2mDEF\u001b[22m\u001b[1mGHI\u001b[22m');
      }
    });

    it('Faint & bold', function() {
      if (os.platform() === 'win32') {
        expect(styles.faint('ABC' + styles.bold('DEF') + 'GHI')).to
          .equal('ABC\u001b[1mDEF\u001b[22mGHI');
      } else {
        expect(styles.faint('ABC' + styles.bold('DEF') + 'GHI')).to
          .equal('\u001b[2mABC\u001b[1mDEF\u001b[22m\u001b[2mGHI\u001b[22m');
      }
    });

    it('Underline & bold', function() {
      expect(styles.underline('ABC' + styles.bold('DEF') + 'GHI')).to
        .equal('\u001b[4mABC\u001b[1mDEF\u001b[22mGHI\u001b[24m');
    });
  });

  describe('Colors', function() {
    var styles = textStyles(4);

    it('Red & Green', function() {
      expect(styles.red('ABC' + styles.green('DEF') + 'GHI')).to
        .equal('\u001b[31mABC\u001b[32mDEF\u001b[39m\u001b[31mGHI\u001b[39m');
    });
  });

  describe('Bg colors', function() {
    var styles = textStyles(4);

    it('Red & Green', function() {
      expect(styles.bgRed('ABC' + styles.bgGreen('DEF') + 'GHI')).to
        .equal('\u001b[41mABC\u001b[42mDEF\u001b[49m\u001b[41mGHI\u001b[49m');
    });
  });
});

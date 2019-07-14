'use strict';

var chai = require('chai');
var expect = chai.expect;
var os = require('os');
var textStyles = require('..');

describe('Modifiers', function() {

  describe('textStyles(1)', function() {
    var styles = textStyles(1);

    it('.bold', function() {
      expect(styles.bold('abc')).to.equal('abc');
      expect(styles.bold('')).to.equal('');
      expect(styles.bold()).to.equal('');
    });

    it('.faint', function() {
      expect(styles.faint('abc')).to.equal('abc');
    });

    it('.dim', function() {
      expect(styles.dim('abc')).to.equal('abc');
    });

    it('.italic', function() {
      expect(styles.italic('abc')).to.equal('abc');
    });

    it('.underline', function() {
      expect(styles.underline('abc')).to.equal('abc');
    });

    it('.slowBlink', function() {
      expect(styles.slowBlink('abc')).to.equal('abc');
    });

    it('.blink', function() {
      expect(styles.blink('abc')).to.equal('abc');
    });

    it('.reverse', function() {
      expect(styles.reverse('abc')).to.equal('abc');
    });

    it('.inverse', function() {
      expect(styles.inverse('abc')).to.equal('abc');
    });

    it('.conceal', function() {
      expect(styles.conceal('abc')).to.equal('abc');
    });

    it('.hidden', function() {
      expect(styles.hidden('abc')).to.equal('abc');
    });

    it('.crossedOut', function() {
      expect(styles.crossedOut('abc')).to.equal('abc');
    });

    it('.strikethrough', function() {
      expect(styles.strikethrough('abc')).to.equal('abc');
    });

    it('.doublyUnderline', function() {
      expect(styles.doublyUnderline('abc')).to.equal('abc');
    });

    it('.reset', function() {
      expect('abc' + styles.reset('def')).to.equal('abcdef');
      expect('abc' + styles.reset('')).to.equal('abc');
      expect('abc' + styles.reset()).to.equal('abc');
    });
  });

  [4, 8, 24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {
      var styles = textStyles(colorDepth);

      it('.bold', function() {
        expect(styles.bold('abc')).to.equal('\u001b[1mabc\u001b[22m');
        expect(styles.bold('')).to.equal('');
        expect(styles.bold()).to.equal('');
      });

      it('.faint', function() {
        if (os.platform() === 'win32') {
          expect(styles.faint('abc')).to.equal('abc');
        } else {
          expect(styles.faint('abc')).to.equal('\u001b[2mabc\u001b[22m');
        }
      });

      it('.dim', function() {
        if (os.platform() === 'win32') {
          expect(styles.dim('abc')).to.equal('abc');
        } else {
          expect(styles.dim('abc')).to.equal('\u001b[2mabc\u001b[22m');
        }
      });

      it('.italic', function() {
        expect(styles.italic('abc')).to.equal('\u001b[3mabc\u001b[23m');
      });

      it('.underline', function() {
        expect(styles.underline('abc')).to.equal('\u001b[4mabc\u001b[24m');
      });

      it('.slowBlink', function() {
        expect(styles.slowBlink('abc')).to.equal('\u001b[5mabc\u001b[25m');
      });

      it('.blink', function() {
        expect(styles.blink('abc')).to.equal('\u001b[5mabc\u001b[25m');
      });

      it('.reverse', function() {
        expect(styles.reverse('abc')).to.equal('\u001b[7mabc\u001b[27m');
      });

      it('.inverse', function() {
        expect(styles.inverse('abc')).to.equal('\u001b[7mabc\u001b[27m');
      });

      it('.conceal', function() {
        expect(styles.conceal('abc')).to.equal('\u001b[8mabc\u001b[28m');
      });

      it('.hidden', function() {
        expect(styles.hidden('abc')).to.equal('\u001b[8mabc\u001b[28m');
      });

      it('.crossedOut', function() {
        expect(styles.crossedOut('abc')).to.equal('\u001b[9mabc\u001b[29m');
      });

      it('.strikethrough', function() {
        expect(styles.strikethrough('abc')).to.equal('\u001b[9mabc\u001b[29m');
      });

      it('.doublyUnderline', function() {
        expect(styles.doublyUnderline('ab')).to.equal('\u001b[21mab\u001b[24m');
      });

      it('.reset', function() {
        expect('abc' + styles.reset('def')).to.equal('abc\u001b[0mdef');
        expect('abc' + styles.reset('')).to.equal('abc\u001b[0m');
        expect('abc' + styles.reset()).to.equal('abc\u001b[0m');
      });
    });
  });

});

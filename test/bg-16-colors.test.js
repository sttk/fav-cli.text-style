'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('16 Bg Colors', function() {

  describe('textStyles(1)', function() {
    var styles = textStyles(1);

    it('.black', function() {
      expect(styles.bgBlack('abc')).to.equal('abc');
    });

    it('.red', function() {
      expect(styles.bgRed('abc')).to.equal('abc');
    });

    it('.green', function() {
      expect(styles.bgGreen('abc')).to.equal('abc');
    });

    it('.yellow', function() {
      expect(styles.bgYellow('abc')).to.equal('abc');
    });

    it('.blue', function() {
      expect(styles.bgBlue('abc')).to.equal('abc');
    });

    it('.magenta', function() {
      expect(styles.bgMagenta('abc')).to.equal('abc');
    });

    it('.cyan', function() {
      expect(styles.bgCyan('abc')).to.equal('abc');
    });

    it('.white', function() {
      expect(styles.bgWhite('abc')).to.equal('abc');
    });

    it('.gray', function() {
      expect(styles.bgGray('abc')).to.equal('abc');
    });

    it('.grey', function() {
      expect(styles.bgGrey('abc')).to.equal('abc');
    });

    it('.brightBlack', function() {
      expect(styles.bgBrightBlack('abc')).to.equal('abc');
    });

    it('.blackBright', function() {
      expect(styles.bgBlackBright('abc')).to.equal('abc');
    });

    it('.brightRed', function() {
      expect(styles.bgBrightRed('abc')).to.equal('abc');
    });

    it('.redBright', function() {
      expect(styles.bgRedBright('abc')).to.equal('abc');
    });

    it('.brightGreen', function() {
      expect(styles.bgBrightGreen('abc')).to.equal('abc');
    });

    it('.greenBright', function() {
      expect(styles.bgGreenBright('abc')).to.equal('abc');
    });

    it('.brightYellow', function() {
      expect(styles.bgBrightYellow('abc')).to.equal('abc');
    });

    it('.yellowBright', function() {
      expect(styles.bgYellowBright('abc')).to.equal('abc');
    });

    it('.brightBlue', function() {
      expect(styles.bgBrightBlue('abc')).to.equal('abc');
    });

    it('.blueBright', function() {
      expect(styles.bgBlueBright('abc')).to.equal('abc');
    });

    it('.brightMagenta', function() {
      expect(styles.bgBrightMagenta('abc')).to.equal('abc');
    });

    it('.magentaBright', function() {
      expect(styles.bgMagentaBright('abc')).to.equal('abc');
    });

    it('.brightCyan', function() {
      expect(styles.bgBrightCyan('abc')).to.equal('abc');
    });

    it('.cyanBright', function() {
      expect(styles.bgCyanBright('abc')).to.equal('abc');
    });

    it('.brightWhite', function() {
      expect(styles.bgBrightWhite('abc')).to.equal('abc');
    });

    it('.whiteBright', function() {
      expect(styles.bgWhiteBright('abc')).to.equal('abc');
    });
  });

  [4, 8, 24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {
      var styles = textStyles(colorDepth);

      it('.black', function() {
        expect(styles.bgBlack('abc')).to.equal('\u001b[40mabc\u001b[49m');
      });

      it('.red', function() {
        expect(styles.bgRed('abc')).to.equal('\u001b[41mabc\u001b[49m');
      });

      it('.green', function() {
        expect(styles.bgGreen('abc')).to.equal('\u001b[42mabc\u001b[49m');
      });

      it('.yellow', function() {
        expect(styles.bgYellow('abc')).to.equal('\u001b[43mabc\u001b[49m');
      });

      it('.blue', function() {
        expect(styles.bgBlue('abc')).to.equal('\u001b[44mabc\u001b[49m');
      });

      it('.magenta', function() {
        expect(styles.bgMagenta('abc')).to.equal('\u001b[45mabc\u001b[49m');
      });

      it('.cyan', function() {
        expect(styles.bgCyan('abc')).to.equal('\u001b[46mabc\u001b[49m');
      });

      it('.white', function() {
        expect(styles.bgWhite('abc')).to.equal('\u001b[47mabc\u001b[49m');
      });

      it('.gray', function() {
        expect(styles.bgGray('abc')).to.equal('\u001b[100mabc\u001b[49m');
      });

      it('.grey', function() {
        expect(styles.bgGrey('abc')).to.equal('\u001b[100mabc\u001b[49m');
      });

      it('.brightBlack', function() {
        expect(styles.bgBrightBlack('ab')).to.equal('\u001b[100mab\u001b[49m');
      });

      it('.blackBright', function() {
        expect(styles.bgBlackBright('ab')).to.equal('\u001b[100mab\u001b[49m');
      });

      it('.brightRed', function() {
        expect(styles.bgBrightRed('abc')).to.equal('\u001b[101mabc\u001b[49m');
      });

      it('.redBright', function() {
        expect(styles.bgRedBright('abc')).to.equal('\u001b[101mabc\u001b[49m');
      });

      it('.brightGreen', function() {
        expect(styles.bgBrightGreen('ab')).to.equal('\u001b[102mab\u001b[49m');
      });

      it('.greenBright', function() {
        expect(styles.bgGreenBright('ab')).to.equal('\u001b[102mab\u001b[49m');
      });

      it('.brightYellow', function() {
        expect(styles.bgBrightYellow('abc')).to
          .equal('\u001b[103mabc\u001b[49m');
      });

      it('.yellowBright', function() {
        expect(styles.bgYellowBright('abc')).to
          .equal('\u001b[103mabc\u001b[49m');
      });

      it('.brightBlue', function() {
        expect(styles.bgBrightBlue('abc')).to.equal('\u001b[104mabc\u001b[49m');
      });

      it('.blueBright', function() {
        expect(styles.bgBlueBright('abc')).to.equal('\u001b[104mabc\u001b[49m');
      });

      it('.brightMagenta', function() {
        expect(styles.bgBrightMagenta('abc')).to
          .equal('\u001b[105mabc\u001b[49m');
      });

      it('.magentaBright', function() {
        expect(styles.bgMagentaBright('abc')).to
          .equal('\u001b[105mabc\u001b[49m');
      });

      it('.brightCyan', function() {
        expect(styles.bgBrightCyan('abc')).to
          .equal('\u001b[106mabc\u001b[49m');
      });

      it('.cyanBright', function() {
        expect(styles.bgCyanBright('abc')).to
          .equal('\u001b[106mabc\u001b[49m');
      });

      it('.brightWhite', function() {
        expect(styles.bgBrightWhite('abc')).to
          .equal('\u001b[107mabc\u001b[49m');
      });

      it('.whiteBright', function() {
        expect(styles.bgWhiteBright('abc')).to
          .equal('\u001b[107mabc\u001b[49m');
      });
    });
  });
});

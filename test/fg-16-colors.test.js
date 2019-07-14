'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('16 Colors', function() {

  describe('textStyles(1)', function() {
    var styles = textStyles(1);

    it('.black', function() {
      expect(styles.black('abc')).to.equal('abc');
    });

    it('.red', function() {
      expect(styles.red('abc')).to.equal('abc');
    });

    it('.green', function() {
      expect(styles.green('abc')).to.equal('abc');
    });

    it('.yellow', function() {
      expect(styles.yellow('abc')).to.equal('abc');
    });

    it('.blue', function() {
      expect(styles.blue('abc')).to.equal('abc');
    });

    it('.magenta', function() {
      expect(styles.magenta('abc')).to.equal('abc');
    });

    it('.cyan', function() {
      expect(styles.cyan('abc')).to.equal('abc');
    });

    it('.white', function() {
      expect(styles.white('abc')).to.equal('abc');
    });

    it('.gray', function() {
      expect(styles.gray('abc')).to.equal('abc');
    });

    it('.grey', function() {
      expect(styles.grey('abc')).to.equal('abc');
    });

    it('.brightBlack', function() {
      expect(styles.brightBlack('abc')).to.equal('abc');
    });

    it('.blackBright', function() {
      expect(styles.blackBright('abc')).to.equal('abc');
    });

    it('.brightRed', function() {
      expect(styles.brightRed('abc')).to.equal('abc');
    });

    it('.redBright', function() {
      expect(styles.redBright('abc')).to.equal('abc');
    });

    it('.brightGreen', function() {
      expect(styles.brightGreen('abc')).to.equal('abc');
    });

    it('.greenBright', function() {
      expect(styles.greenBright('abc')).to.equal('abc');
    });

    it('.brightYellow', function() {
      expect(styles.brightYellow('abc')).to.equal('abc');
    });

    it('.yellowBright', function() {
      expect(styles.yellowBright('abc')).to.equal('abc');
    });

    it('.brightBlue', function() {
      expect(styles.brightBlue('abc')).to.equal('abc');
    });

    it('.blueBright', function() {
      expect(styles.blueBright('abc')).to.equal('abc');
    });

    it('.brightMagenta', function() {
      expect(styles.brightMagenta('abc')).to.equal('abc');
    });

    it('.magentaBright', function() {
      expect(styles.magentaBright('abc')).to.equal('abc');
    });

    it('.brightCyan', function() {
      expect(styles.brightCyan('abc')).to.equal('abc');
    });

    it('.cyanBright', function() {
      expect(styles.cyanBright('abc')).to.equal('abc');
    });

    it('.brightWhite', function() {
      expect(styles.brightWhite('abc')).to.equal('abc');
    });

    it('.whiteBright', function() {
      expect(styles.whiteBright('abc')).to.equal('abc');
    });
  });

  [4, 8, 24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {
      var styles = textStyles(colorDepth);

      it('.black', function() {
        expect(styles.black('abc')).to.equal('\u001b[30mabc\u001b[39m');
      });

      it('.red', function() {
        expect(styles.red('abc')).to.equal('\u001b[31mabc\u001b[39m');
      });

      it('.green', function() {
        expect(styles.green('abc')).to.equal('\u001b[32mabc\u001b[39m');
      });

      it('.yellow', function() {
        expect(styles.yellow('abc')).to.equal('\u001b[33mabc\u001b[39m');
      });

      it('.blue', function() {
        expect(styles.blue('abc')).to.equal('\u001b[34mabc\u001b[39m');
      });

      it('.magenta', function() {
        expect(styles.magenta('abc')).to.equal('\u001b[35mabc\u001b[39m');
      });

      it('.cyan', function() {
        expect(styles.cyan('abc')).to.equal('\u001b[36mabc\u001b[39m');
      });

      it('.white', function() {
        expect(styles.white('abc')).to.equal('\u001b[37mabc\u001b[39m');
      });

      it('.gray', function() {
        expect(styles.gray('abc')).to.equal('\u001b[90mabc\u001b[39m');
      });

      it('.grey', function() {
        expect(styles.grey('abc')).to.equal('\u001b[90mabc\u001b[39m');
      });

      it('.brightBlack', function() {
        expect(styles.brightBlack('abc')).to.equal('\u001b[90mabc\u001b[39m');
      });

      it('.blackBright', function() {
        expect(styles.blackBright('abc')).to.equal('\u001b[90mabc\u001b[39m');
      });

      it('.brightRed', function() {
        expect(styles.brightRed('abc')).to.equal('\u001b[91mabc\u001b[39m');
      });

      it('.redBright', function() {
        expect(styles.redBright('abc')).to.equal('\u001b[91mabc\u001b[39m');
      });

      it('.brightGreen', function() {
        expect(styles.brightGreen('abc')).to.equal('\u001b[92mabc\u001b[39m');
      });

      it('.greenBright', function() {
        expect(styles.greenBright('abc')).to.equal('\u001b[92mabc\u001b[39m');
      });

      it('.brightYellow', function() {
        expect(styles.brightYellow('abc')).to.equal('\u001b[93mabc\u001b[39m');
      });

      it('.yellowBright', function() {
        expect(styles.yellowBright('abc')).to.equal('\u001b[93mabc\u001b[39m');
      });

      it('.brightBlue', function() {
        expect(styles.brightBlue('abc')).to.equal('\u001b[94mabc\u001b[39m');
      });

      it('.blueBright', function() {
        expect(styles.blueBright('abc')).to.equal('\u001b[94mabc\u001b[39m');
      });

      it('.brightMagenta', function() {
        expect(styles.brightMagenta('abc')).to.equal('\u001b[95mabc\u001b[39m');
      });

      it('.magentaBright', function() {
        expect(styles.magentaBright('abc')).to.equal('\u001b[95mabc\u001b[39m');
      });

      it('.brightCyan', function() {
        expect(styles.brightCyan('abc')).to.equal('\u001b[96mabc\u001b[39m');
      });

      it('.cyanBright', function() {
        expect(styles.cyanBright('abc')).to.equal('\u001b[96mabc\u001b[39m');
      });

      it('.brightWhite', function() {
        expect(styles.brightWhite('abc')).to.equal('\u001b[97mabc\u001b[39m');
      });

      it('.whiteBright', function() {
        expect(styles.whiteBright('abc')).to.equal('\u001b[97mabc\u001b[39m');
      });
    });
  });
});

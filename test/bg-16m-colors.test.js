'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('16m Bg Colors', function() {

  [1, 4, 8].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.bgRgb(r,g,b)', function() {
        expect(colors.bgRgb(192, 168, 32)('abc')).to.equal('abc');
      });
    });
  });

  [24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.bgRgb(r,g,b)', function() {
        expect(colors.bgRgb(192, 168, 32)('abc'))
          .equal('\u001b[48;2;192;168;32mabc\u001b[49m');
      });
    });
  });

});

'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('16m Colors', function() {

  [1, 4, 8].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.rgb(r,g,b)', function() {
        expect(colors.rgb(192, 168, 32)('abc')).to.equal('abc');
      });
    });
  });

  [24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.rgb(r,g,b)', function() {
        expect(colors.rgb(192, 168, 32)('abc'))
          .equal('\u001b[38;2;192;168;32mabc\u001b[39m');
      });
    });
  });

});

'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('256 Bg Colors', function() {

  [1, 4].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.bgColor(n)', function() {
        expect(colors.bgColor(222)('abc')).to.equal('abc');
      });
    });
  });

  [8, 24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.bgColor(n)', function() {
        expect(colors.bgColor(222)('abc')).to
          .equal('\u001b[48;222mabc\u001b[49m');
      });
    });
  });

});

'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('256 Colors', function() {

  [1, 4].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.color(n)', function() {
        expect(colors.color(222)('abc')).to.equal('abc');
      });
    });
  });

  [8, 24].forEach(function(colorDepth) {
    describe('textStyles(' + colorDepth + ')', function() {

      var colors = textStyles(colorDepth);

      it('.color(n)', function() {
        expect(colors.color(222)('abc')).to
          .equal('\u001b[38;222mabc\u001b[39m');
      });
    });
  });

});

'use strict';

var chai = require('chai');
var expect = chai.expect;
var textStyles = require('..');

describe('By env', function() {

  describe('textStyles({ TERM: "dumb" })', function() {
    var env = { TERM: 'dumb' };
    var styles = textStyles(env);

    it('Bold', function() {
      expect(styles.bold('abc')).to.equal('abc');
      expect(styles.bold()).to.equal('');
    });
  });

  describe('textStyles({ OS: "Windows_NT" })', function() {
    var env = { OS: 'Windows_NT' };
    var styles = textStyles(env);

    it('Faint', function() {
      expect(styles.faint('abc')).to.equal('abc');
      expect(styles.faint()).to.equal('');
    });
  });

  describe('Ignore illegal type argument', function() {
    var styles = textStyles(true);

    it('Bold', function() {
      expect(styles.bold('abc')).to.equal(textStyles.bold('abc'));
    });

    it('Faint', function() {
      expect(styles.faint('abc')).to.equal(textStyles.faint('abc'));
    });
  });
});

'use strict';

var chai = require('chai');
var expect = chai.expect;

var ansi = require('../../lib/ansi');

describe('lib/ansi', function() {
   describe('esc', function() {
     it('Should return escape sequence of the specified code', function() {
       expect(ansi.esc(31)).to.equal('\u001b[31m');
       expect(ansi.esc(39)).to.equal('\u001b[39m');
     });
   });

   describe('wrap', function() {
     it('Should wrap a text (with groupRe)', function() {
       var fn31 = ansi.wrap(31, 39, /\u001b\[3[\d][^m]*m/);
       var fn32 = ansi.wrap(32, 39, /\u001b\[3[\d][^m]*m/);
       var fn33 = ansi.wrap(33, 39, /\u001b\[3[\d][^m]*m/);

       var text = fn31('AAA');
       expect(text).to.equal('\u001b[31mAAA\u001b[39m');

       text = fn32(text);
       expect(text).to.equal('\u001b[31mAAA\u001b[39m');

       text = fn32('BBB' + text);
       expect(text).to.equal('\u001b[32mBBB\u001b[31mAAA\u001b[39m');

       text = fn33(text + 'CCC');
       expect(text).to.equal(
         '\u001b[32mBBB\u001b[31mAAA\u001b[39m\u001b[33mCCC\u001b[39m');

       text = fn33('D' + text + 'E');
       expect(text).to.equal(
         '\u001b[33mD\u001b[32mBBB\u001b[31mAAA\u001b[39m\u001b[33mCCC' +
         '\u001b[39m\u001b[33mE\u001b[39m');

       text = fn33(text);
       expect(text).to.equal(
         '\u001b[33mD\u001b[32mBBB\u001b[31mAAA\u001b[39m\u001b[33mCCC' +
         '\u001b[39m\u001b[33mE\u001b[39m');
     });

     it('Should wrap a text (with no groupRe)', function() {
       var fn4 = ansi.wrap(4, 24);

       var text = fn4('AAA');
       expect(text).to.equal('\u001b[4mAAA\u001b[24m');

       text = fn4(text);
       expect(text).to.equal('\u001b[4mAAA\u001b[24m');

       text = fn4('BBB' + text);
       expect(text).to.equal('\u001b[4mBBB\u001b[4mAAA\u001b[24m');

       text = fn4(text + 'CCC');
       expect(text).to.equal('\u001b[4mBBB\u001b[4mAAA\u001b[24m\u001b[4m' +
         'CCC\u001b[24m');
     });

     it('Should not wrap an empty text', function() {
       var fn31 = ansi.wrap(31, 39, /\u001b\[3[\d][^m]*m/);
       expect(fn31()).to.equal('');
       expect(fn31('')).to.equal('');
     });

     it('Should wrap a text including line breaks', function() {
       var fn31 = ansi.wrap(31, 39, /\u001b\[3[\d][^m]*m/);
       var text = 'AAA\nBBB\nCCC';

       text = fn31(text);
       expect(text).to.equal(
         '\u001b[31mAAA\u001b[39m\n' +
         '\u001b[31mBBB\u001b[39m\n' +
         '\u001b[31mCCC\u001b[39m');

       text = fn31(text);
       expect(text).to.equal(
         '\u001b[31mAAA\u001b[39m\n' +
         '\u001b[31mBBB\u001b[39m\n' +
         '\u001b[31mCCC\u001b[39m');
     });
   });

   describe('noEffect', function() {
     it('Should add no esc', function() {
       var text = ansi.noEffect('AAA');
       expect(text).to.equal('AAA');

       text = ansi.noEffect(text);
       expect(text).to.equal('AAA');

       text = ansi.noEffect('');
       expect(text).to.equal('');

       text = ansi.noEffect();
       expect(text).to.equal('');
     });
   });

   describe('fg16Color', function() {
     it('Should add fg color esc', function() {
       var fn31 = ansi.fg16Color(31);
       var text = fn31('AAA');
       expect(text).to.equal('\u001b[31mAAA\u001b[39m');
     });
   });

   describe('bg16Color', function() {
     it('Should add bg color esc', function() {
       var fn41 = ansi.bg16Color(41);
       var text = fn41('AAA');
       expect(text).to.equal('\u001b[41mAAA\u001b[49m');
     });
   });

   describe('fg256Color', function() {
     it('Should add fg color esc', function() {
       var fn1 = ansi.fg256Color(1);
       var text = fn1('AAA');
       expect(text).to.equal('\u001b[38;1mAAA\u001b[39m');
     });
   });

   describe('bg256Color', function() {
     it('Should add bg color esc', function() {
       var fn1 = ansi.bg256Color(1);
       var text = fn1('AAA');
       expect(text).to.equal('\u001b[48;1mAAA\u001b[49m');
     });
   });

   describe('fg16mColor', function() {
     it('Should add fg color esc', function() {
       var fn1 = ansi.fg16mColor(1, 2, 3);
       var text = fn1('AAA');
       expect(text).to.equal('\u001b[38;2;1;2;3mAAA\u001b[39m');
     });
   });

   describe('bg16mColor', function() {
     it('Should add bg color esc', function() {
       var fn1 = ansi.bg16mColor(1, 2, 3);
       var text = fn1('AAA');
       expect(text).to.equal('\u001b[48;2;1;2;3mAAA\u001b[49m');
     });
   });
});

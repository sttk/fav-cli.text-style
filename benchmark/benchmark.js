'use strict';

const BenchmarkTester = require('benchmark-tester');

const colors = [
  'reset',
  'bold',
  'dim',
  'italic',
  'underline',
  'inverse',
  'hidden',
  'strikethrough',
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
];

function testColors(styles, names) {
  names.forEach(name => styles[name]('foo'));
}

function testNested(styles, names) {
  names.reduce((result, name) => styles[name](result), 'bar');
}

function testNested2(styles, names) {
  names.reduce((result, name) => 'A' + styles[name](result) + 'B', 'bar');
}

new BenchmarkTester()
  .addTest('@fav/cli.text-style', testColors)
  .addTest('chalk', testColors)
  .addTest('ansi-colors', testColors)
  .runTest('Colors', colors)

  .addTest('@fav/cli.text-style', testNested)
  .addTest('chalk', testNested)
  .addTest('ansi-colors', testNested)
  .runTest('Nested', colors)

  .addTest('@fav/cli.text-style', testNested2)
  .addTest('chalk', testNested2)
  .addTest('ansi-colors', testNested2)
  .runTest('Nested2', colors)

  .print();

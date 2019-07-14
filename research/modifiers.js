'use strict';

// https://en.wikipedia.org/wiki/ANSI_escape_code

var os = require('os');
var log = console.log;

// Bold
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bold:\u001b[1mABC\u001b[22mDEF');

// Faint
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Faint:\u001b[2mABC\u001b[22mDEF');

// Bold & faint
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: faint is ineffective and bold cannot be off
// - Windows MinGW: faint is ineffective and bold cannot be off
if (os.platform() !== 'win32') {
  log('Bold & faint:\u001b[1mABC\u001b[2mDEF\u001b[22m\u001b[1mGHI\u001b[22mIJK');
} else {
  log('Bold & faint:\u001b[1mABC\u001b[2mDEF\u001b[22m\u001b[1mGHI\u001b[22mIJK\u001b[0m -- bold is not off on Windows');
  log('Bold & faint:\u001b[1mABCDEFGHI\u001b[22mIJK');
}

// Faint & bold
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: faint is ineffective
// - Windows MinGW: faint is ineffective
log('Faint & bold:\u001b[2mABC\u001b[1mDEF\u001b[22m\u001b[2mGHI\u001b[22mIJK');

// Italic
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Italic:\u001b[3mABC\u001b[23mDEF');

// Underline
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Underline:\u001b[4mABC\u001b[24mDEF');

// Slow blink
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Slow blink:\u001b[5mABC\u001b[25mDEF');

// Rapid blink
// - maxOS Terminal: ineffective
// - Linux Terminal: ineffective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Rapid blink:\u001b[6mABC\u001b[26mDEF');

// Reverse video
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Reverse video:\u001b[7mABC\u001b[27mDEF');

// Conceal
// - maxOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Conceal:\u001b[8mABC\u001b[28mDEF');

// Crossed-out
// - maxOS Terminal: ineffective
// - Linux Terminal: effective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Crossed-out:\u001b[9mABC\u001b[29mDEF');

// Doubly underline
// - maxOS Terminal: ineffective
// - Linux Terminal: effective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Doubly underline:\u001b[21mABC\u001b[24mDEF');

// Framed
// - maxOS Terminal: ineffective
// - Linux Terminal: ineffective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Framed:\u001b[51mABC\u001b[54mDEF');

// Encircled
// - maxOS Terminal: ineffective
// - Linux Terminal: underlined
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Encircled:\u001b[52mABC\u001b[54mDEF');

// Overlined
// - maxOS Terminal: ineffective
// - Linux Terminal: ineffective
// - Windows Command Prompt: ineffective
// - Windows MinGW: ineffective
log('Overlined:\u001b[53mABC\u001b[55mDEF');

log('\u001b[0m');

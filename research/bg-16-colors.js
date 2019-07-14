'use strict';

// https://en.wikipedia.org/wiki/ANSI_escape_code

var log = console.log;

// Background black
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg black:\u001b[32m\u001b[40mABC\u001b[49mDEF\u001b[39m');

// Background red
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg red:\u001b[41mABC\u001b[49mDEF');

// Background green
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg green:\u001b[42mABC\u001b[49mDEF');

// Background yellow
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg yellow:\u001b[43mABC\u001b[49mDEF');

// Background blue
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg blue:\u001b[44mABC\u001b[49mDEF');

// Background magenta
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg magenta:\u001b[45mABC\u001b[49mDEF');

// Background cyan
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg cyan:\u001b[46mABC\u001b[49mDEF');

// Background white
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg white:\u001b[32m\u001b[47mABC\u001b[49mDEF\u001b[39m');

// Background bright black
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright black:\u001b[100mABC\u001b[49mDEF');

// Background bright red
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright red:\u001b[101mABC\u001b[49mDEF');

// Background bright green
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright green:\u001b[102mABC\u001b[49mDEF');

// Background bright yellow
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright yellow:\u001b[103mABC\u001b[49mDEF');

// Background bright blue
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright blue:\u001b[104mABC\u001b[49mDEF');

// Background bright magenta
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright magenta:\u001b[105mABC\u001b[49mDEF');

// Background bright cyan
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright cyan:\u001b[106mABC\u001b[49mDEF');

// Background bright white
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bg bright white:\u001b[32m\u001b[107mABC\u001b[49mDEF\u001b[39m');

log('\u001b[0m');

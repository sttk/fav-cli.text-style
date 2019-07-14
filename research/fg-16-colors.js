'use strict';

// https://en.wikipedia.org/wiki/ANSI_escape_code

var log = console.log;

// Black
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Black:\u001b[42m\u001b[30mABC\u001b[39mDEF\u001b[49m');

// Red
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Red:\u001b[31mABC\u001b[39mDEF');

// Green
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Green:\u001b[32mABC\u001b[39mDEF');

// Yellow
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Yellow:\u001b[33mABC\u001b[39mDEF');

// Blue
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Blue:\u001b[34mABC\u001b[39mDEF');

// Magenta
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Magenta:\u001b[35mABC\u001b[39mDEF');

// Cyan
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Cyan:\u001b[36mABC\u001b[39mDEF');

// White
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('White:\u001b[42m\u001b[37mABC\u001b[39mDEF\u001b[49m');

// Bright black
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright black:\u001b[90mABC\u001b[39mDEF');

// Bright red
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright red:\u001b[91mABC\u001b[39mDEF');

// Bright green
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright green:\u001b[92mABC\u001b[39mDEF');

// Bright yellow
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright yellow:\u001b[93mABC\u001b[39mDEF');

// Bright blue
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright blue:\u001b[94mABC\u001b[39mDEF');

// Bright magenta
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright magenta:\u001b[95mABC\u001b[39mDEF');

// Bright cyan
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright cyan:\u001b[96mABC\u001b[39mDEF');

// Bright white
// - macOS Terminal: effective
// - Linux Terminal: effective
// - Windows Command Prompt: effective
// - Windows MinGW: effective
log('Bright white:\u001b[100m\u001b[97mABC\u001b[39mDEF\u001b[49m');

log('\u001b[0m');

'use strict';

// https://en.wikipedia.org/wiki/ANSI_escape_code

var log = console.log;

// macOS Terminal: effective
// Linux Terminal: effective
// Windows Command Prompt: effective
// Windows MinGW: effective

for (var i = 0; i < 256; i++) {
  log(i + ':\u001b[48;5;' + i + 'mABC\u001b[49mDEF');
}

log('\u001b[0m');

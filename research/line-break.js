'use strict';

var log = console.log;

// Underline
log('Underline:\u001b[4mABC\nDEF\u001b[24m');

// Bg color
log('Red:\u001b[41mABC\nDEF\u001b[49m');

log('\u001b[0m');

// Underline
log('Underline:\u001b[4mABC\u001b[24m\n\u001b[4mDEF\u001b[24m');

// Bg color
log('Red:\u001b[41mABC\u001b[49m\n\u001b[41mDEF\u001b[49m');

log('\u001b[0m');

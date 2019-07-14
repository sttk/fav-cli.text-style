'use strict';

var log = console.log;

// Modifiers

// Bold & faint
log('Bold & faint:\u001b[1mABC\u001b[2mDEF\u001b[22m\u001b[1mGHI\u001b[22mJKL');

// Dim & bold
log('Dim & bold:\u001b[2mABC\u001b[1mDEF\u001b[22m\u001b[2mGHI\u001b[22mJKL');

// Underline & bold
log('Underline & bold:\u001b[4mABC\u001b[1mDEF\u001b[22mGHI\u001b[24mJKL');


// Colors

// Red & Green
log('Red & Green:\u001b[31mABC\u001b[32mDEF\u001b[39m\u001b[31mGHI\u001b[39mJKL');

// Bg colors
log('Red & Green:\u001b[41mABC\u001b[42mDEF\u001b[49m\u001b[41mGHI\u001b[49mJKL');

log('\u001b[0m');


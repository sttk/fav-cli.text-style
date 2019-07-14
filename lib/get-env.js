'use strict';

var getColorDepth = require('@fav/cli.get-color-depth');

function isWindows(env) {
  return env.OS === 'Windows_NT';
}

function getEnv(envOrColorDepth) {
  if (envOrColorDepth != null) {
    if (typeof envOrColorDepth === 'object') {
      var env = envOrColorDepth;
      return {
        colorDepth: getColorDepth(env),
        isWindows: isWindows(env),
      };

    } else if (typeof envOrColorDepth === 'number') {
      var colorDepth = envOrColorDepth;
      return {
        colorDepth: colorDepth,
        isWindows: isWindows(process.env),
      };
    }
  }

  return {
    colorDepth: getColorDepth(),
    isWindows: isWindows(process.env),
  };
}

module.exports = getEnv;

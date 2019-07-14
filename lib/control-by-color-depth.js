'use strict';

function controlByColorDepth(obj, colorDepth, requiredColorDepth, noEffect) {
  if (colorDepth < requiredColorDepth) {
    Object.keys(obj).forEach(function(key) {
      obj[key] = noEffect;
    });
  }
  return obj;
}


module.exports = controlByColorDepth;

'use strict';

var getEnv = require('./lib/get-env');
var defineModifiers = require('./lib/modifiers');
var defineFg16Colors = require('./lib/fg-16-colors');
var defineBg16Colors = require('./lib/bg-16-colors');
var defineMoreColors = require('./lib/more-colors');

function create(obj, envOrColorDepth) {
  var env = getEnv(envOrColorDepth);
  defineModifiers(obj, env);
  defineFg16Colors(obj, env);
  defineBg16Colors(obj, env);
  defineMoreColors(obj, env);
  return obj;
}

function styles(envOrColorDepth) {
  return create({}, envOrColorDepth);
}

module.exports = create(styles);

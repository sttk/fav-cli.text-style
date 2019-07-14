'use strict';

function defineProperties(obj, props) {
  var propDescs = Object.keys(props).reduce(getPropDesc, {});
  return Object.defineProperties(obj, propDescs);

  function getPropDesc(descs, key) {
    descs[key] = { enumerable: true, value: props[key] };
    return descs;
  }
}

module.exports = defineProperties;

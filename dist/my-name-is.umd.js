(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('foo')) :
  typeof define === 'function' && define.amd ? define(['foo'], factory) :
  (global = global || self, global.factomHarmonyConnectSdk = factory(global.foo));
}(this, function (foo) { 'use strict';

  function whatIsMyName(name) {
    return foo.myName('DORON');
  }

  return whatIsMyName;

}));

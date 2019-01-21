(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.factomHarmonyConnectSdk = factory());
}(this, function () { 'use strict';

  function myName (name) {
    return `My name is ${name}`;
  }

  function whatIsMyName(name) {
    return myName('DORON');
  }

  return whatIsMyName;

}));

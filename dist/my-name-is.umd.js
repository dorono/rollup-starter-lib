(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.factomHarmonyConnectSdk = {}));
}(this, function (exports) { 'use strict';

  function myName(name) {
    return `My name is ${name}`;
  }

  function myNameIs(name) {
    return myName('DORON');
  }

  function iLike(whatILike) {
    return `I like ${whatILike}`;
  }

  exports.myNameIs = myNameIs;
  exports.iLike = iLike;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

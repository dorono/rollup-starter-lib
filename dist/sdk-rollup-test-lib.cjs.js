'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function myName(name) {
  return `My name is ${name}`;
}

function myNameIs(name) {
  return myName(name);
}

function iLike(whatILike) {
  return `I like ${whatILike}`;
}

exports.myNameIs = myNameIs;
exports.iLike = iLike;

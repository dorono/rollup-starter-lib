'use strict';

function myName (name) {
  return `My name is ${name}`;
}

function whatIsMyName(name) {
  return myName('DORON');
}

module.exports = whatIsMyName;

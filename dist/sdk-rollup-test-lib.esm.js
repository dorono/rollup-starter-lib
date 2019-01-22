function myName(name) {
  return `My name is ${name}`;
}

function myNameIs(name) {
  return myName(name);
}

function iLike(whatILike) {
  return `I like ${whatILike}`;
}

export { myNameIs, iLike };

import { myName } from './foo';

export function myNameIs(name) {
  return myName(name);
}

export function iLike(whatILike) {
  return `I like ${whatILike}`;
}

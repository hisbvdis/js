"use strict";

console.log( isEven(-1) );
console.log( isEven(0) );
console.log( isEven(1) );
console.log( isEven(2) );


function isEven(n) {
  if (n === 0) return true;
  else if (n === 1) return false;
  else if (n < 0)   return isEven(-n);
  else return isEven(n - 2);
}
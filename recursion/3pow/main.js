"use strict";

console.log( pow(2, 2) );
console.log( pow(2, 3) );
console.log( pow(2, 4) );
console.log( pow(2, 5) );
console.log( pow(2, 6) );
console.log( pow(2, 7) );
console.log( pow(2, 8) );
console.log( pow(2, 9) );
console.log( pow(2, 10) );


function pow(x, n) {
  if (n === 1) return x;

  else return x * pow(x, n - 1);
}
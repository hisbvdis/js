console.log( sumTo(-1) );
console.log( sumTo(0) );
console.log( sumTo(5) );
console.log( sumTo(10) );
console.log( sumTo(100) );

function sumTo(n) {
  if (n === 0) return 0;
  if (n === 1) return n;
  if (n < 0) return sumTo(-n)
  else return n += sumTo(n - 1);
}
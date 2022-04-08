let arr = [1, 2, 3, 4, 5, 6, 7];


// =====================================
// Фильтр inBetween
// =====================================
let newArr1 = arr.filter( inBetween(3, 6) );
console.log(newArr1);

function inBetween(min, max) {
  return function(value) {
    return value >= min && value <= max
  };
}


// =====================================
// Фильтр inArray
// =====================================
let newArr2 = arr.filter( inArray([1, 2, 10] ));
console.log( newArr2 );

function inArray(arr) {
  return function(value) {
    return arr.includes(value);
  }
}
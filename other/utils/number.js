"use strict";


// Произвольное целое число из заданного диапазона
// https://stackoverflow.com/q/1527803/4956416
export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Произвольный массив чисел из заданного диапазона
function getRandomArray(min, max) {
  let iterations = getRandomInt(min, max)
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    resultSet.add( getRandomInt(min, max) );
  }

  return [...resultSet];
}
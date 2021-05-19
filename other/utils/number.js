"use strict";


// Произвольное целое число из заданного диапазона
export function randomFromRange(min, max) {
  let randomFloat = min - 0.5 + Math.random() * (max - min + 1);
  let randomInteger = Math.round(randomFloat);

  return randomInteger;
}


// Произвольный массив чисел из заданного диапазона
function randomArrayFromRange(min, max) {
  let iterations = randomFromRange(min, max)
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    resultSet.add( randomFromRange(min, max) );
  }

  return [...resultSet];
}
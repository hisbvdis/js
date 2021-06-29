"use strict";

import { randomInt } from "./number.js";


// Произвольный элемент массива
export function randomFromArray(inputArr) {
  let min = 0;
  let max = inputArr.length - 1;
  let random = randomInt(min, max);

  return inputArr[random];
}


// Произвольный массив элементов массива
function randomArrayFromArray(inputArr) {
  let iterations = randomInt(1, inputArr.lenght);
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    let random = randomInt(0, inputArr.length - 1);
    resultSet.add( inputArr[random] );
  }

  return [...resultSet];
}
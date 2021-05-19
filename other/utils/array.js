"use strict";

import { randomFromRange } from "./number.js";


// Произвольный элемент массива
function randomFromArray(inputArr) {
  let randomIndex = randomFromRange(0, inputArr.length - 1);

  return inputArr[randomIndex];
}


// Произвольный массив элементов массива
function randomArrayFromArray(inputArr) {
  let iterations = randomFromRange(1, inputArr.length - 1);
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    let randomIndex = randomFromRange(0, inputArr.length - 1);

    resultSet.add( inputArr[randomIndex] );
  }
  
  return [...resultSet];
}
"use strict";

// =============================================================================
// Произвольное целое число из заданного диапазона
// =============================================================================
// Вариант №1:
// Источник: https://learn.javascript.ru/task/random-int-min-max
export function randomInt(min, max) {
  let randomFloat = min - 0.5 + Math.random() * (max - min + 1);
  let randomInteger = Math.round(randomFloat);

  return randomInteger;
}


// Вариант №2:
// Источник: https://learn.javascript.ru/task/random-int-min-max
function randomInt2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// =============================================================================
// Произвольное дробное из заданного диапазона
// =============================================================================
function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}


// =============================================================================
// Произвольный массив чисел из заданного диапазона
// =============================================================================
function getRandomArray(min, max) {
  let iterations = randomInt(min, max)
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    resultSet.add( randomInt(min, max) );
  }

  return [...resultSet];
}
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
export function randomInt_2(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// =============================================================================
// Произвольное дробное из заданного диапазона
// =============================================================================
export function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}
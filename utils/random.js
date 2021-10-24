// ===========================================================================
// Произвольное целое число из заданного диапазона
// ===========================================================================
// Источник: https://learn.javascript.ru/task/random-int-min-max
export function randomInt(min, max) {
  let randomFloat = min - 0.5 + Math.random() * (max - min + 1);
  let randomInteger = Math.round(randomFloat);

  return randomInteger;
}


// ===========================================================================
// Произвольное дробное из заданного диапазона
// ===========================================================================
export function randomFloat(min, max) {
	return Math.random() * (max - min) + min;
}


// ===========================================================================
// Произвольный элемент массива
// ===========================================================================
export function randomFromArray(inputArr) {
  let min = 0;
  let max = inputArr.length - 1;
  let random = randomInt(min, max);

  return inputArr[random];
}


// ===========================================================================
// Произвольный массив элементов массива
// ===========================================================================
export function randomArrayFromArray(inputArr) {
  let iterations = randomInt(1, inputArr.lenght);
  let resultSet = new Set();

  for (let i = 0; i < iterations; i++) {
    let random = randomInt(0, inputArr.length - 1);
    resultSet.add( inputArr[random] );
  }

  return [...resultSet];
}


// ===========================================================================
// Произвольный булев тип
// ===========================================================================
export function randomBool() {
  // Произвольное 0 или 1
  const randomInteger = randomInt(0, 1)
  // Преобразовать числов в Boolean (0 - false, 1 - true)
  const boolean = Boolean(randomInteger);
  // Вернуть Boolean
  return boolean;

  // Вспомогательная функция для произвольного числа
  function randomInt(min, max) {
    let randomFloat = min - 0.5 + Math.random() * (max - min + 1);
    let randomInteger = Math.round(randomFloat);

    return randomInteger;
  }
}
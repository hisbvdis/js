// Произвольное число в заданном диапазоне
// Source: https://learn.javascript.ru/task/random-int-min-max
function randomIntMinMax(min, max) {
  let randomFloat = min - 0.5 + Math.random() * (max - min + 1);
  let randomInteger = Math.round(randomFloat);
  return randomInteger;
}


// Произвольное значение из массива
function randomFromArray(inputArr) {
  let randomNum = randomIntMinMax(0, inputArr.length - 1);
  let randomValue = inputArr[randomNum];
  
  return randomValue;
}


// Произвольный массив значений из массива
function randomArrayFromArray(inputArr) {
  let result = [];
  
  for (let i = 0; i < inputArr.length; i++) {
    let randomNum = randomIntMinMax(0, inputArr.length - 1);
    let randomValue = inputArr[randomNum];

    if (!result.includes(randomValue)) {
      result.push(randomValue);
    }
  }

  return result;
}


export let utils = {
  randomIntMinMax: randomIntMinMax,
  randomFromArray: randomFromArray,
  randomArrayFromArray: randomArrayFromArray,
}
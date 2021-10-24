// ===========================================================================
// Среднее арифметическое из массива чисел
// ===========================================================================
// Источник: https://stackoverflow.com/a/52139743/4956416
export function arithmeticMean(array) {
  return array.reduce((avg, value, _, array) => avg + value / array.length, 0);
}
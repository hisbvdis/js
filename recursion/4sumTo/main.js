// =============================================================================
// Рекурсивная функция
// =============================================================================
function sumTo(n) {
  // 1. Простейший случай #1
  // 1.1. Если "n" === 0, вернуть 0
  if (n === 0) return 0;

  // 2. Простейший случай #2
  // 2.1. Если "n" === 1, вернуть само число "n"
  if (n === 1) return n;

  // 3. Сложный случай #1
  // 3.1. Если "n" < 0 (отрицательное)
  // 3.2. Вызвать функцию, передав "n" с противоположным знаком
  // 3.3. Вернуть результат вызова функции
  if (n < 0) return sumTo(-n)

  // 4. Сложный случай #2
  // 4.1. Вызвать функцию, передав "n", меньший на 1
  // 4.2. Результат вызова функции сложить с текущим числом "n"
  // 4.3. Вернуть сумму
  return n + sumTo(n - 1);
}



// =============================================================================
// Вызов функции
// =============================================================================
console.log( sumTo(-1) );
console.log( sumTo(0) );
console.log( sumTo(5) );
console.log( sumTo(10) );
console.log( sumTo(100) );
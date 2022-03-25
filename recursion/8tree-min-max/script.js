// =============================================================================
// Входящие данные
// =============================================================================
const tree = 
{
  values: [13, 14, 15],
  children: [
    {
      values: [1, 2, 3],
      children: []
    },
    {
      values: [4, 5, 6],
      children: [
        {
          values: [7, 8, 9],
          children: []
        },
        {
          values: [10, 11, 12],
          children: []
        },
      ]
    },
  ]
}



// =============================================================================
// Рекурсивная функция "min"
// =============================================================================
function min(graph) {
  // 1. Простой случай
  // 1.1. Если: длина массива в свойстве "children" === 0
  if (graph.children.length === 0) {
    // 1.2. Вернуть минимальное значение текущего узла (если значений нет, вернёт Infinity)
    return Math.min(...graph.values);
  }
  
  // 2. Сложный случай
  // 2.1. Если: все остальные случаи
  // 2.2. Определить минимальное из значений текущего узла
  const currMin = Math.min(...graph.values);
  // 2.3. Вызвать функцию для каждого дочернего узла
  // 2.4. Результаты вызова функций собрать в общий массив
  const childValues = graph.children.map(child => min(child));
  // 2.5. Определить минимальное из значений дочерних узлов
  const childMin = Math.min(...childValues);
  // 2.6. Вернуть меньшее из значений текущего и дочерних узлов
  return Math.min(currMin, childMin);
};



// =============================================================================
// Рекурсивная функция "max"
// =============================================================================
function max(graph) {
  // 1. Простой случай
  // 1.1. Если: длина массива в свойстве "children" === 0
  if (graph.children.length === 0) {
    // 1.2. Вернуть максимальное значение текущего узла (если значений нет, вернёт -Infinity)
    return Math.max(...graph.values);
  }
  
  // 2. Сложный случай
  // 2.1. Если: все остальные случаи
  // 2.2. Определить максимальное из значений текущего узла
  const currMax = Math.max(...graph.values);
  // 2.3. Вызвать функцию для каждого дочернего узла
  // 2.4. Результаты вызова функций собрать в общий массив
  const childValues = graph.children.map(child => max(child));
  // 2.5. Определить максимальное из значений дочерних узлов
  const childMax = Math.max(...childValues);
  // 2.6. Вернуть большее из значений текущего и дочерних узлов
  return Math.max(currMax, childMax);
};



// =============================================================================
// Вызов функции
// =============================================================================
console.log( "min: ", min(tree) );
console.log( "max: ", max(tree) );
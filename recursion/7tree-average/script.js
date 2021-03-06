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
// Рекурсивная функция
// =============================================================================
function averageValue(graph) {
  // Рекурсивная функция сбора всех значений дерева
  const collectValues = (graph) => {
    // 1. Простой случай
    // 1.1. Если дочерних узлов нет (длина массива в свойстве "children" === 0)
    if (graph.children.length === 0) {
      // 1.2. Вернуть массив значений текуущего узла
      return graph.values;
    }

    // 2. Сложный случай
    // 2.1. Если: все остальные случаи
    // 2.2. Получить массив значений "values" текущего узла
    const currentValues = graph.values;
    // 2.3. Вызвать функцию для каждого дочернего узла
    // 2.4. Результаты вызова функций собрать в общий массив
    const childValues = graph.children.reduce((accum, child) => accum.concat(collectValues(child)), []);
    // 2.5. Вернуть общий массив "текущих значений" и "значений потомков"
    return [...currentValues, ...childValues];
  }


  // Собрать все значения дерева
  const allValues = collectValues(graph);

  
  // Вернуть среднее арифметическое из собранных значений
  return allValues.reduce((avg, value, _, array) => avg + value / array.length, 0);
}



// =============================================================================
// Вызов функции
// =============================================================================
console.log( averageValue(tree) );
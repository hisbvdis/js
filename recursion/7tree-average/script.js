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
    // 1. Простейший случай
    if (graph.children.length === 0) {
      return graph.values;
    }

    // 2. Сложный случай
    const currentValues = graph.values;
    const childValues = graph.children.reduce((accum, child) => accum.concat(collectValues(child)), []);
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
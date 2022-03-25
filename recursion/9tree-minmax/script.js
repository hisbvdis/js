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
function minmax(graph) {
  // 1. Простой случай
  // 1.1. Если дочерних узлов нет
  if (graph.children.length === 0) {
    return [
      Math.min(...graph.values),
      Math.max(...graph.values)
    ]
  }
  
  // 2. Сложный случай
  // 2.1. Вычислить минимум и максимум из значений текущего узла
  const currentMinMax = [
    Math.min(...graph.values),
    Math.max(...graph.values)
  ]

  const childMinMax = graph.children.reduce((accum, child) => {
    const [childMin, childMax] = minmax(child);
    const [accumMin, accumMax] = accum;
    if (accum.length === 0) return [childMin, childMax];
    return [
      (childMin < accumMin) ? childMin : accumMin,
      (childMax > accumMax) ? childMax : accumMax,
    ]
  }, [])
  
  return [
    Math.min(currentMinMax[0], childMinMax[0]),
    Math.max(currentMinMax[1], childMinMax[1]),
  ];
}



// =============================================================================
// Вызов функции
// =============================================================================
console.log( "minmax: ", minmax(tree) );
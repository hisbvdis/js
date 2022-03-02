const tree = 
{
  values: [10, 11, 12],
  children: [
    {
      values: [1, 2, 3],
      children: []
    },
    {
      values: [4, 5, 6],
      children: []
    },
    {
      values: [7, 8, 9],
      children: []
    },
  ]
}

console.log( "min: ", min(tree) );
console.log( "max: ", max(tree) );
console.log( "minmax: ", minmax(tree) );


function min(graph) {
  // 1. Простейший случай — если нет дочерних узлов (то есть, дочернее свойство "children" — это пустой массив длиной = 0)
  if (graph.children.length === 0) {
    // 1.1. Вернуть минимальное значение текущего узла (если значений нет, вернёт 0)
    return Math.min(...graph.values);
  }
  // 2. Другие случаи (если есть дочерние узлы)
  else {
    // 2.1. Минимальное значение текущего узла
    const currMin = Math.min(...graph.values);
    
    // 2.2. Минимальное значение дочерних узлов
    const childValues = graph.children.map(child => min(child));
    const childMin = Math.min(...childValues);
      
    // 2.3. Минимальное из текущего и дочерних минимальных значений
    const result = Math.min(currMin, childMin);

    return result;
  }
};


function max(graph) {
  // 1. Простейший случай — если нет дочерних узлов (то есть, дочернее свойство "children" — это пустой массив длиной = 0)
  if (graph.children.length === 0) {
    // 1.1. Вернуть максимальное значение текущего узла (если значений нет, вернёт 0)
    return Math.max(...graph.values);
  }
  // 2. Другие случаи (если есть дочерние узлы)
  else {
    // 2.1. Максимальное значение текущего узла
    const currMin = Math.max(...graph.values);
    
    // 2.2. Максимальное значение дочерних узлов
    const childValues = graph.children.map(child => min(child));
    const childMin = Math.max(...childValues);
      
    // 2.3. Максимальное из текущего и дочерних максимальных значений
    const result = Math.max(currMin, childMin);

    return result;
  }
};


function minmax(graph) {
  // 1. Простейший случай (нет дочерних узлов и значений)
  if (graph.children.length === 0 && graph.values.length === 0) {
    return 0;
  } 
  // 2. Простейший случай (нет дочерних узлов, но есть значения)
  else if (graph.children.length === 0 && graph.values.length > 0) {
    return {
      min: Math.min(...graph.values),
      max: Math.max(...graph.values)
    }
  }
  // 2. Сложный случай
  else {
    // 2.1. Минимум и максимум значений дочерних узлов
    const childMinMax = graph.children
      .map(child => minmax(child))
      .filter(child => child !== undefined)
      .reduce((accum, child) => {
        accum.min = Math.min(accum.min, child.min) || child.min;
        accum.max = Math.max(accum.max, child.max) || child.max;
        return accum;
      }, {})
          
    
    // 2.2. Минимум и максимум значений текущего узла
    const currentMinMax = {
      min: Math.min(...graph.values),
      max: Math.max(...graph.values)
    }
    
    // 2.3. Минимум и максимум дочерних и текущих значений
    const totalMinMax = {
      min: Math.min(currentMinMax.min, childMinMax.min) || currentMinMax.min,
      max: Math.max(currentMinMax.max, childMinMax.max) || currentMinMax.max,
    }
    
    return totalMinMax;
  }
}
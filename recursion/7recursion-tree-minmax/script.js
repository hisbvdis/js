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


function min(tree) {
  // 1. Простейший случай — если нет дочерних узлов (то есть, дочернее свойство "children" — это пустой массив длиной = 0)
  if (tree.children.length === 0) {
    // 1.1. Вернуть минимальное значение текущего узла (если значений нет, вернёт 0)
    return Math.min(...tree.values);
  }
  // 2. Другие случаи (если есть дочерние узлы)
  else {
    // 2.1. Минимальное значение текущего узла
    const currMin = Math.min(...tree.values);
    
    // 2.2. Минимальное значение дочерних узлов
    const childValues = tree.children.map(child => min(child));
    const childMin = Math.min(...childValues);
      
    // 2.3. Минимальное из текущего и дочерних минимальных значений
    const result = Math.min(currMin, childMin);

    return result;
  }
};

function max(tree) {
  // 1. Простейший случай — если нет дочерних узлов (то есть, дочернее свойство "children" — это пустой массив длиной = 0)
  if (tree.children.length === 0) {
    // 1.1. Вернуть максимальное значение текущего узла (если значений нет, вернёт 0)
    return Math.max(...tree.values);
  }
  // 2. Другие случаи (если есть дочерние узлы)
  else {
    // 2.1. Максимальное значение текущего узла
    const currMin = Math.max(...tree.values);
    
    // 2.2. Максимальное значение дочерних узлов
    const childValues = tree.children.map(child => min(child));
    const childMin = Math.max(...childValues);
      
    // 2.3. Максимальное из текущего и дочерних максимальных значений
    const result = Math.max(currMin, childMin);

    return result;
  }
};
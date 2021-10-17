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

console.log( average(tree) );


function average(tree) {
  // 1. Простейший случай — если нет дочерних узлов (то есть, дочернее свойство "children" — это пустой массив длиной = 0)
  if (tree.children.length === 0) {
    // 1.1. Вернуть среднее арифметическое из значений текущего узла (если значений нет, вернёт 0)
    return tree.values.reduce((avg, value, index, array) => avg + value / array.length, 0);
  } 
  // 2. Другие случаи (если есть дочерние узлы)
  else {
    // 2.1. Среднее арифметическое из значений текущего узла
    const currAvg = tree.values.reduce((avg, value, index, array) => avg + value / array.length, 0)
    
    // 2.2. Среднее арифметическое из значений дочерних узлов
    const childAvg = tree.children
      // 2.2.1. Для каждого дочернего узла вызвать функцию
      .map(child => average(child))
      // 2.2.2. Оставить значения, не равные нулю
      .filter(value => value !== 0)
      // 2.2.3. Посчитать среднее арифметическое из оставшихся значений
      .reduce((avg, value, index, array) => avg + value / array.length, 0)

    // 2.3. Среднее арифметическое из средних значений текущего и дочерних узлов
    const result = [currAvg, childAvg]
      .reduce((avg, value, index, array) => avg + value / array.length, 0);

    return result;
  }
}
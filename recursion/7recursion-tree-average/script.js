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


const average = graph => {
  const values = inner(graph);
  const avg = values.reduce((avg, value, index, array) => avg + value / array.length, 0);
  return avg;

  function inner(graph) {
    // 1. Простейший случай
    if (graph.children.length === 0) {
      return graph.values;
    } 
    // 2. Другие случаи
    else {
      // 2.1. Массив значений "values" текущего узла
      const currentNodeValues = graph.values;

      // 2.2. Массив значений "values" дочерних узлов
      const childNodesValues = graph.children
        .map(child => inner(child))
        .filter(value => value !== undefined)
        .reduce((accum, child) => [...accum, ...child], [])
      // console.log( childNodesValues );

      // 2.3. Массив значений текущего и дочерних узлов
      const totalValues = [...currentNodeValues, ...childNodesValues]

      // 2.4. Среднее арифметическое из итогового массива
      // const avg = totalValues.reduce((avg, value, _, array) => avg + value / array.length, 0);

      return totalValues;
    }
  }
}
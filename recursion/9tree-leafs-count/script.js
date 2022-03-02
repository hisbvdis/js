/* 
  Дано дерево, узлы которого представлены объектами 
    Node = {
        value: number,
        children?: Node[]
    }
  Посчитать количество лепестков (узлов без дочерних объектов)
 */

const leafs = tree => {
  // Простейший случай
  if ("children" in tree === false) {
    return 1;
  }
  // Сложный случай
  else {
    const result = tree.children.reduce((sum, child) => {
      return sum += leafs(child)
    }, 0);

    return result;
  }
};

// Должно получиться: 1
const testTree = {value: 1}

// Должно получиться: 1
// const testTree = {value: 1, children: [{value: 2}]}

// Должно получиться: 2
// const testTree = {value: 1, children: [{value: 2}, {value: 3}]}

// Должно получиться: 2
// const testTree = {value: 1, children: [{value: 2, children: [{value: 4}]}, {value: 3}]}

console.log( leafs(testTree) );
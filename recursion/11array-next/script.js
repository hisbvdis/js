// =============================================================================
// Входящие данные
// =============================================================================
const response = await fetch("./config.json");
const questions = await response.json();



// =============================================================================
// Рекурсивная функция
// =============================================================================
const getPaths = (index) => {
  if (index === null) return null;
  
  // Простой случай
  if (questions[index].answers.every(answer => answer.next === null)) {
    return index;
  }

  // Сложный случай
  return questions[index].answers.map(answer => {
    let result = getPaths(answer.next)
    
    if (Array.isArray(result) && result.some(item => Array.isArray(item))) {
      result = result.flat();
    }
    
    if (result === null) return String(index);

    if (typeof result === "number") return `${index}, ${result}`;

    if (Array.isArray(result)) return result.map(item => `${index}, ${item}`);
  })
}



// =============================================================================
// Вызов функции
// =============================================================================
console.log( getPaths(0).flat() )
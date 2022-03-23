const response = await fetch("./config.json");
const questions = await response.json();

const getPaths = (index) => {
  if (index === null) return null;
  
  const { answers } = questions[index];

  if (answers.every(answer => answer.next === null)) return String(index);

  
  return answers.map(answer => {
    let result = getPaths(answer.next);

    if (Array.isArray(result) && result.some(item => Array.isArray(item))) {
      result = result.flat();
    }

    if (result === null) {
      return String(index);
    }

    if (typeof result === "string") {
      return `${index}, ${result}`;
    }

    if (Array.isArray(result)) {
      return result.map(item => `${index}, ${item}`);
    }
  })
}

const paths = getPaths(0)
  .flat()
  .map(path => path.split(","))
  .map(path => path.map((i) => {
    const {text, answers} = questions[Number(i)];
    const answersStr = answers.map(({answer}) => answer).join("/")
    return {[text]: answersStr};
  }))

console.log( JSON.stringify({
  paths: {
    number: paths.length,
    list: paths
  }
}) )
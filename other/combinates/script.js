const chooseOptimalDistance = (t, k, ls) => {
  if (ls.length <= 1) return null;

  // const ls = [51, 56, 58, 59, 61];
  // const k = 3;
  let curr = [];
  const all = [];

  let nextIndex = 1;

  // debugger;
  for (let i = 0; i < ls.length; i++) {
    curr.length = 0;
    curr.push(ls[i]);

    for (let j = 0; j < ls.length; j++) {
      const value = ls[j];

      if (curr.includes(value)) {
        continue;
      }

      curr.push(value);

      if (curr.length === k && j === ls.length - 1) {
        all.push([...curr]);
        curr = curr.slice(0, k - 2);
        if (nextIndex === ls.length - 2) {
          nextIndex = 1;
        } else {
          j = nextIndex;
          nextIndex++;
        }
        continue;
      }

      if (curr.length === k) {
        all.push([...curr]);
        curr = curr.slice(0, k - 1);
        continue;
      }
    }
  }

  return all
    .map(arr => arr.reduce((sum, num) => sum + num, 0))
    .reduce((max, num) => (num > max && num <= t) ? num : max, 0)
}

console.log( chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]) )
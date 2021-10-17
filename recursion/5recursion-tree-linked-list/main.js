let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log( printList(list) );


function printList(item) {
  if (item.next === null) {
    return [item.value];
  } else {
    return printList(item.next).concat(item.value);
  }
}
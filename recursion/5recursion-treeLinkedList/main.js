"
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
  console.log( item.value );
  if (item.next) printList(item.next);
}
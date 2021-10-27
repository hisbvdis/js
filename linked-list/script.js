class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Добавить узел в начало списка
  prepend(value) {
    // Создать экземпляр узла  (узел будет новым "head", поэтому в "next" задать ссылку на текущий "head")
    const newNode = new LinkedListNode(value, this.head);
  
    // Созданный узел назначить в "head" списка
    this.head = newNode;
  
    // Если у списка ещё не было "хвост", новый (и пока единственный) узел сделать хвостом
    if (this.tail === undefined) {
      this.tail = newNode;
    }
  
    // Вернуть список
    return this;
  }

  // Добавить узел в конец списка
  append(value) {
    // Создать экземпляр узла  (будет последним, поэтому в "next" ничего не указывать, чтобы осталось значение "null" по умолчанию)
    const newNode = new LinkedListNode(value);

    // Созданный узел назначить в "head" списка
    this.head = newNode;

    // Если у списка ещё не было "хвост", новый (и пока единственный) узел сделать хвостом
    if (this.tail === undefined) {
      this.tail = newNode;
    }

    // Вернуть список
    return this;
  }
}
// ==================================================
// ВАРИАНТ "САМЫЙ ГРОМОЗДКИЙ"
// ==================================================
// Внешняя функция
function makeCounter() {
  // Переменная "Количество" в пространстве имён внешней функции
  let i = 0;

  // Внутренняя функция - замыкание
  function counter() {
    // Изменяет переменную "Количество" из внешней функции (увеличивает на 1)
    i++;

    // Возвращает переменную "Количество"
    return i;
  }

  // Внешняя функция возвращает не выполнение внутренней функции, а её КОД,
  // ...так как название внутренней функции записано без скобок
  return counter;
}

// Переменной присваивается КОД возвращаемой внутренней
let counter = makeCounter();
 
// Каждый запуск – вызов кода внутренней функции
counter();
counter();



// ======================================================
// ВАРИАНТ "СРЕДНИЙ"  (RETURN ПЕРЕД ВНУТРЕННЕЙ ФУНКЦИИ)
// ======================================================
// Внешняя функция
function makeCounter() {
  // Переменная "Количество" в пространстве имён внешней функции
  let i = 0;
 
  // Внешняя функция возвращает не выполнение внутренней функции, а её КОД
  // Внутренняя функция - замыкание
  return function counter() {
    // Изменяет переменную "Количество" из внешней функции (увеличивает на 1)
    i++;
 
    // Возвращает переменную "Количество"
    return i;
  }
}
 
// Переменной присваивается КОД возвращаемой внутренней
let counter = makeCounter();
 
// Каждый запуск – вызов кода внутренней функции
counter();
counter();



// ======================================================
// ВАРИАНТ "КОМПАКТНЫЙ"  (ВНЕШНЯЯ ФУНКЦИЯ IIFE ПРИСВАИВАЕТСЯ ПЕРЕМЕННОЙ)  
// ...(RETURN ПЕРЕД ВНУТРЕННЕЙ ФУНКЦИЕЙ)
// ======================================================
// Внешняя функция - это IIFE, возвращаемое значение которой сразу присваивается переменной
let counter = (function() {
  // Переменная "Количество" в пространстве имён внешней функции
  let i = 0;

  // Внешняя функция возвращает не выполнение внутренней функции, а её КОД
  // Внутренняя функция - замыкание
  return function counter() {
    // Изменяет переменную "Количество" из внешней функции (увеличивает на 1)
    i++;

    // Возвращает переменную "Количество"
    return i;
  }
})();

// Каждый запуск – вызов кода внутренней функции
counter();
counter();
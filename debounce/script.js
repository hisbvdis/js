// 1. Определение переменных
// 1.1. Поле ввода
let field = document.querySelector(".input");
// 1.2. Элемент, в который выводится результат
let result = document.querySelector(".result");


// 2. Слушатель событий ввода в поле <input>
// 2.1. При наступлении события, слушаетель запускает функцию "Debounce",
// .....которая через 1 секунду вызывает функцию-обработчик
field.addEventListener("input", debounce(field_Input_Handler, 1000));



// 3. Функция "Debounce"
// 3.1. Выполняет код функции "callback" с задержкой "delay"
function debounce(callback, delay) {
  // 3.2. Переменная для ID таймера
  let timeout;

  // 3.3. Возвращает функцию
  // В этом примере функция имеет параметр "evt", так как будет принимать 
  // .."объект события" от слушателя
  return function(evt) {
    // 3.4. Если какой-то таймер уже запущен, сбросить его
    clearTimeout(timeout);
    // 3.5. Создать таймер, который через "delay" время запустит код функции "callback"
    // ID таймера сохраняется в переменной (чтобы его можно было сбросить)
    timeout = setTimeout(() => callback(evt), delay);
  }
}


// 4. Функция-обработчик события, которую запускает "Debounce"
function field_Input_Handler(evt) {
  updateValue(evt.target.value);
}


// 5. Функция, которую вызывает обработчик события
function updateValue(value) {
  result.textContent = value;
}
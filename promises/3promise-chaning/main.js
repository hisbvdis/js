"use strict";

// ПОСЛЕДОВАТЕЛЬНАЯ ЗАГРУЗКА НЕСКОЛЬКИХ СКРИПТОВ С ПОМОЩЬЮ ЦЕПОЧКИ ПРОМИСОВ
// Источки: https://learn.javascript.ru/promise-chaining#primer-loadscript


// 1. Функция, которая при вызове будет создавать и возвращать промис
function loadScript(src) {
  return new Promise((resolve, reject) => {
    // 1.1. В тело функции-исполнителя добавить асинхронный код
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);

    // 1.2. Если скрипт загрузился, вызывается функция ВЫПОЛНЕНИЯ исполнителя
    script.addEventListener("load", resolve());

    // 1.3. Если загрузка не удалась, вызывается функция ОТКЛОНЕНИЯ, в которую
    // .... через аргумент передаётся ОБЪЕКТ ОШИБКИ для обработчиков
    script.addEventListener("error", reject(new Error(`Ошибка загрузки ${src}`)))
  })
}


// 2. Создать промис - здесь его создаёт и возвращает функция "loadScript()"
let promise = loadScript("test1.js")


// 3. В каждом методе "then" вызывается функция "loadScript()", которая
// .. возвращает промис. Только когда завершилось выполенние кода этого 
// .. промиса, начинает выполняться следующий метод, вызывающий функцию
// .. загрузки следующего скрипта
promise
  .then(() => loadScript("test2.js"))
  .then(() => loadScript("test3.js"))
// Промисы: Цепочка промисов (последовательная загрузка нескольких скриптов)
// Источки: https://learn.javascript.ru/promise-chaining#primer-loadscript

// 1. Функция, которая при вызове будет создавать и возвращать промис
function loadScript(src) {
  return new Promise((resolve, reject) => {
    // 1.1. Асинхронный код (здесь асинхронно загружается скрипт из "src")
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);

    // 1.2. Если скрипт загрузился, промис считается "ВЫПОЛНЕНЫМ"
    // .... и вызывается функция "resolve()".
    script.addEventListener("load", resolve());

    // 1.3. Если скрипт не загрузился, промис считается "ОТКЛОНЕННЫМ"
    // .... и вызывается функция "reject()".
    // .... Через параметр в обработчик передаётся "объект ошибки".
    script.addEventListener("error", reject(new Error(`Ошибка загрузки ${src}`)))
  })
}


// 2. Вызов функции "loadScript()" создаёт и возвращает промис
let promise = loadScript("test1.js")


// 3. В каждом методе "then" вызывается функция "loadScript()", которая
// .. возвращает промис. Только когда завершилось выполенние кода текущего
// .. промиса, начинает выполняться следующий метод, вызывающий функцию
// .. загрузки следующего скрипта
promise
  .then(() => loadScript("test2.js"))
  .then(() => loadScript("test3.js"))
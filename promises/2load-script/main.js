"use strict";

// ЗАГРУЗКА СКРИПТА АСИНХРОННО ЧЕРЕЗ ПРОМИС


// 1. Функция, которая при вызове будет создавать и возвращать промис
function loadScript(src) {
  return new Promise((resolve, reject) => {
    // 1.1. В тело функции-исполнителя добавить асинхронный код
    let script = document.createElement("script");
    script.src = src;
    document.head.append(script);

    // 1.2. Если скрипт загрузился, вызывается функция ВЫПОЛНЕНИЯ, в которую
    // .... через аргумент передаётся ЗНАЧЕНИЕ для обработчиков
    script.addEventListener("load", () => {
      resolve(`Скрипт "${src}" успешно загружен`)
    });

    // 1.3. Если загрузка не удалась, вызывается функция ОТКЛОНЕНИЯ, в которую
    // .... через аргумент передаётся ОБЪЕКТ ОШИБКИ для обработчиков
    script.addEventListener("error", () => {
      reject(new Error(`Ошибка загрузки скрипта ${script.src}`))
    });
  })
}


// 2. Создать промис - здесь его создаёт и возвращает функция "loadScript()"
let promise = loadScript("test.js");


// 3. Назначить обработчики ВЫПОЛНЕНИЯ и ОТКЛОНЕНИЯ с помощью метода
promise.then(
  // 3.1. Функция-обработчик ВЫПОЛНЕНИЯ исполнителя
  status => console.log( status ),
  // 3.2. Функция-обработчик ОТКЛОНЕНИЯ исполнителя
  error => console.log( error.message )
)
"use strict";

// ОДНОВРЕМЕННЫЙ ЗАПУСК МАССИВА ЗАПРОСОВ - Promise.allSettled()
// Источинк: https://learn.javascript.ru/promise-api#promise-allsettled

let names = ["hisbvdis", "iliakan"];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// 1. Fetch возвращают промисы, поэтому их можно подставлять в "Promise.all()"
Promise.allSettled(requests)

  // 2. "Promise.allSettled()" возвращает ответ сервера - массив объектов,
  // .. содержащих статус запроса и результат его выполнения

  // 3. В "Promise.all()" можно подставлять только массив рабочих запросов
  .then(response => Promise.all(
    // 3.1. Значит массив объектов "response" из ответа сервера...
    response
    // 3.2. Сначала пропускаем через "filter", оставив только успешные запросы
    .filter(entry => entry.value.status === 200)
    // 3.3. Потом оставшимся добавляем метод "json()" для чтения тела ответа
    .map(entry => entry.value.json())
  ))

  // 4. Отображение результата запроса
  .then(result => console.log( result ));
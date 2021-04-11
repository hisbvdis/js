"use strict";

// ОДНОВРЕМЕННЫЙ ЗАПУСК МАССИВА ЗАПРОСОВ - Promise.all()
// Источинк: https://learn.javascript.ru/promise-api#promise-all

let names = ["hisbvdis", "iliakan"];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// 1. Fetch возвращают промисы, поэтому их можно подставлять в "Promise.all()"
Promise.all(requests)

  // 2. Promise.all() возвращает ответ сервера - массив заголовков

  // 3. В Promise.all() подставляем результат перебора массива заголовков
  // ..  методом "map()", применив метод "json()", который возвращает промисы
  .then(response => Promise.all(response.map(entry => entry.json())))

  // 4. На этот раз Promise.all() возвращает массив тел ответов сервера,
  // .. из которых можно брать содержимое
  .then(result => console.log( result ))
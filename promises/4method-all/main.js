// Промисы: Promise.all() - выполнение массива промисов до первого отклонённого
// Источинк: https://learn.javascript.ru/promise-api#promise-all

// 1. Исходные данные
// 1.1. Массив имён пользователей для запросов
let names = ["hisbvdis", "iliakan"];
// 1.2. Формирование массива Fetch-запросов данных о пользователях
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));


// 2. В Promise.all() подставляем прямо массив Fetch-запросов,
// .. так как Fetch-запросы возвращают промис
Promise.all(requests)
  // 3.   Promise.all() возвращает массив с результатом выполнения (заголовки
  // .... и ответы сервера)
  // 3.1. Перебираем полученный массив, применяя метод ".json()"
  // 3.2. Промисы, возвращаемые методом ".json()", подставляем в "Promise.all()"
  .then(response => Promise.all( 
    response.map(entry => entry.json())
  ))

  // 4. На этот раз Promise.all() возвращает массив с телами ответов сервера,
  // .. из которых можно брать содержимое
  .then(result => console.log(result))
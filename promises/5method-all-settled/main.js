// Промисы: Promise.allSettled() - выполнение массива промисов, несмотря на 
// .. появление отклонённых
// Источинк: https://learn.javascript.ru/promise-api#promise-allsettled

// 1. Исходные данные
// 1.1. Массив имён пользователей для запросов
let names = ["hisbvdis", "iliakan"];
// 1.2. Формирование массива Fetch-запросов данных о пользователях
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));


// 2. В Promise.allSettled() подставляем прямо массив Fetch-запросов,
// .. так как Fetch-запросы возвращают промис
Promise.allSettled(requests)
  // 2.1. Promise.allSettled() возвращает массив объектов, содержащих
  // .. статус запроса и результат выполнения каждого промиса

  // 3.1. В Promise.all() можно подставлять только массив рабочих запросов
  .then(response => Promise.all(
    // 3.2. Значит массив объектов "response" из ответа сервера...
    response
    // 3.3. Сначала пропускаем через "filter", оставив только успешные запросы
    .filter(entry => entry.value.status === 200)
    // 3.4. Потом оставшимся добавляем метод "json()" для чтения тела ответа
    .map(entry => entry.value.json())
  ))

  // 4. Отображение результата запроса
  .then(result => console.log( result ));
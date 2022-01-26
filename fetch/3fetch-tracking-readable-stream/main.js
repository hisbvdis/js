"use strict";

// ПРИМЕР: Отслеживание загрузки тела ответа при fetch-запросе
// ИСТОЧНИК: https://learn.javascript.ru/fetch-progress


// 1. Отправить запрос (сразу придёт первый ответ с заголовками)
let response = await fetch("https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100");


// 2. Создать ридер потока данных  (позволит читать "второй ответ" по частям)
let reader = response.body.getReader();


// 3. Переменные для значений:
// 3.1. Общий размер ответа (может быть неправильным или "null")
let responseSize = response.headers.get("Content-Length");
// 3.2. Количество полученных байт
let receivedSize = 0;
// 3.3. Полученные байты
let byteChunks = [];


// 4. Цикл чтения фрагментов данных и выполнения соответствующих действий
while (true) {
  // 4.1. Получить очередной фрагмент данных и деструктурировать его свойства
  let {done, value} = await reader.read();

  // 4.2. Если фрагмент - последний, прервать цикл
  if (done === true) break;

  // 4.3. Если фрагмент НЕ последний, выполняется код ниже

  // 4.4. Дополнить массив полученных байтов
  byteChunks.push(value);
  
  // 4.5. Дополнить "Количество полученных байтов" размером данного фрагмента
  receivedSize += value.length;

  // 4.6. Вывести обновлённые показатели о полученных данных
  console.log( `Получено ${receivedSize} из ${responseSize}` );
}

// 5. Байты фрагментов ответа сложить в единый массив
let byteArray = byteChunks.reduce((initial, value) => {
  // 5.1. Элемент (Uint8Array-подмассив) преобразовать в обычный массив
  let array = Array.from(value);
  // 5.2. Добавить его к начальному массиву (он же будет возвращён в конце)
  return initial.concat(array);
}, []);

// 6. Преобразовать массив с байтами в Uint8Array-массив
let byte8Array = Uint8Array.from(byteArray);

// 7. Расшифровать Uint8Array-массив в строку
let result = new TextDecoder("utf-8").decode(byte8Array);

// 8. Если нужно, полученную строку можно преобразовать в JS-объект
//    для дальнейшей работы с ним
let commits = JSON.parse(result);
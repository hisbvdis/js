// Fetch-запросы: Базовый пример (через "await")

// 1. Отправить запрос и получить первый ответ с заголовками
let response = await fetch("https://api.github.com/users/hisbvdis");

// 2. Если запрос НЕ успешен, сгенерировать ошибку
if (!response.ok) throw new Error(`Запрос не удался`);

// Если всё в порядке, код продолжит выполнение

// 3. Запросить второй ответ с телом
let user = await response.json();

// 3.1. Добавить изображение на страницу
let img = document.createElement("img");  // Создать элемент <img>
img.src = user.avatar_url;                // Атрибуту "href" присвоить "url"
document.body.append(img);                // Добавить элемент на страницу

// 4. Вывести полученные данные
setTimeout(() => {
  console.log( user.name );
}, 3000);
// 1.RegExp-шаблоны
// 1.1. Шаблон для числа "День" 
// (              Открытие общей группы для числа "День"
//   (0?[1-9])    Числа (от "01" до "09") или (от "1" до "9")
//   |            ИЛИ
//   (1[0-9])     Числа (от "10" до "19")
//   |            ИЛИ
//   (2[0-9])     Числа (от "20" до "29")
//   |            ИЛИ
//   (3[0-1])     Числа (от "30" до "31")
// )              Закрытие общей группы для числа "День"
const dayPattern = /((0?[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))/

// 1.2. Шаблон для числа "Месяц"
// (              Открытие общей группы для числа "День"
//   (0?[1-9])    Числа (от "01" до "09") или (от "1" до "9")
//   |            ИЛИ
//   (1[0-2])     Числа (от "10" до "12")
// )              Закрытие общей группы для числа "День"
const monthPattern = /((0?[1-9])|(1[0-2]))/

// 1.3. Шаблон для числа "Год"
// \d{4}        Число, состоящее из 4 цифр
const yearPattern = /\d{4}/


// 2. Функция преобразования RegExp-шаблона в строку
const regexpToString = (regexp) => {
    // 2.1. Преобразовать RegExp-шаблон в строку и удалить слэши "/""
    return String(regexp).replaceAll("/", "")
}


// 3. Строки для подстановки в шаблон <input/>
const day = regexpToString(dayPattern);
const month = regexpToString(monthPattern);
const year = regexpToString(yearPattern);


// 4. Составить общую строку для подстановки в атрибут "pattern"
const pattern = `${day}\\.${month}\\.${year}`;


// 5. Создать Input с шаблоном в атрибуте "pattern"
const input = document.createElement("input");
input.type = "text";
input.pattern = pattern;
input.value = "31.12.2019";
input.autofocus = true;
document.body.append(input)
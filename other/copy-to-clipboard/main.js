"use strict";

let textField = document.querySelector(".js-textField");
let copyFieldTextBtn = document.querySelector(".js-copyFieldTextBtn");
let copyOwnNameBtn = document.querySelector(".js-copyOwnNameBtn");
let copySelectedTextBtn = document.querySelector(".js-copySelectedTextBtn");

copyFieldTextBtn.addEventListener("click", copyBtn_Click_Handler);
copyOwnNameBtn.addEventListener("click", copyOwnNameBtn_Click_Handler);
copySelectedTextBtn.addEventListener("click", copySelectedTextBtn_Click_Handler);


// Обработчик копирования содержимого текстового поля <input>
function copyBtn_Click_Handler() {
  copyToClipboard(textField.value);
}

// Обработчик копирования названия кнопки
function copyOwnNameBtn_Click_Handler() {
  copyToClipboard(this.textContent);
}

// Обработчик копирования выделенного текста
function copySelectedTextBtn_Click_Handler() {
  copyToClipboard(document.getSelection());
}


// Функция копирования переданного в параметре текста в буфер обмена
function copyToClipboard(str) {
  let el = document.createElement("textarea");  // создать временный элемент - поле "textarea"

  el.classList.add("srOnly");                   // задать ему класс "srOnly"
  el.value = str;                               // вставить в него переданную в функцию стрроку
  document.body.prepend(el);                    // добавить поле в DOM
  el.select();                                  // выделить текст внутри поля
  document.execCommand("copy");                 // выполнить копирование (CTRL + C)
  el.remove();                                  // удалить поле
}
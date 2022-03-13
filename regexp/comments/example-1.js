// =============================================================================
// ОТДЕЛЬНОЕ КОММЕНТИРОВАНИЕ
// Источник: https://twitter.com/meduzen/status/1500958060294152194/photo/1
// =============================================================================


// ОРИГИНАЛЬНЫЙ ПРИМЕР
/*
 * RegExp grabbing browser data filenames.
 *
 * Filenames looks like `ie-11.json` or `ios_saf-13.0-13.1.json`.
 *
 * ([a-z|_]*)     capturing group #1: browser key (`ie`, `ios_saf`…)
 * -              separate the two capturing groups
 * (.{1,})        capturing group #2: browser version (`11`, `13.0-13.1`…)
 * .json          file extension
 */
const urlRegex = new RegExp(/([a-z|_]*)-(.{1,}).json/)


// МОЙ ПРИМЕР
/*
 * Шаблон для числа "День"
 *
 * (              Открытие общей группы для числа "День"
 *   (0?[1-9])    Числа (от "01" до "09") или (от "1" до "9")
 *   |            ИЛИ
 *   (1[0-9])     Числа (от "10" до "19")
 *   |            ИЛИ
 *   (2[0-9])     Числа (от "20" до "29")
 *   |            ИЛИ
 *   (3[0-1])     Числа (от "30" до "31")
 * )              Закрытие общей группы для числа "День"
 */
const day = /((0?[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))/
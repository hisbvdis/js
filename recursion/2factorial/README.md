# Рекурсия:  Факториал

## Подготовка
**Задача**
- Найти файториал числа

**Простыми словами**
- Найти произведение всех чисел от 1 до указанного


## Реализация рекурсии
**1. Простой случай**
- `Какой случай считается простым:`
  - Если число "n" === 1
- `Действия перед возвратом значения:`
  - Нет
- `Что возвращает:`
  - Вернуть само число "n"

**2. Сложный случай**
- `Какой случай считается сложным:`
  - Все остальные случаи
- `Как изменяется/упрощается значение при вызове функции:`
  - Число "n" уменьшается на 1
- `Действия перед возвратом значения:`
  - Вызвать функцию, передав число "n", уменьшенное на 1
  - Результат вызова функции умножить на "n"
- `Что возвращает:`
  - Вернуть результат умножения "функции" на "n"
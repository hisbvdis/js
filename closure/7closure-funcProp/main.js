"use strict";

function makeCounter() {

  function counter() {
    return ++counter.calls;
  }

  counter.calls = 0;
  counter.set = value => counter.calls = value;  // Метод задания значения свойства
  counter.decrease = () => counter.calls--;      // Метод уменьшения значения свойства

  return counter;
  
}
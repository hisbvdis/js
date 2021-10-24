const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// угол, с которого начинать сегмент
let startDeg = 0;
// угол, на котором заканчивать сегмент
let targetDeg = 0;
// Шаг в грудасух
const step = 45;

for (let i = 0; i < 8; i++) {
  // Целевой угол = стартовый угол + шаг
  targetDeg = targetDeg + step;

  ctx.beginPath();
  ctx.moveTo(100, 100);
  // Используется формула преобразования угла в радианы
  ctx.arc(100, 100, 50, Math.PI/180*startDeg, Math.PI/180*targetDeg);
  ctx.closePath();
  ctx.stroke();

  // Старт следующего сегмента начинается с конца предыдущего
  startDeg = targetDeg;
}
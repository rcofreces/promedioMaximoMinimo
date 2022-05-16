let min, max, sum, avg, count: number;
let num: number = Number(prompt("Ingrese un número (0 para salir)"));
let count = 0;
let sum = 0;
let avg = 0;

let min = num;
let max = num;

while (num !== 0) {
  if (num < min) {
    min = num;
  } else if (num > max) {
    max = num;
  }
  sum += num;
  count++;
  num = Number(prompt("Ingrese un número (0 para salir)"));
}
if (count > 0) {
  avg = sum / count;
  console.log("El mínimo es: " + min);
  console.log("El máximo es: " + max);
  console.log("El promedio es: " + avg);
} else {
  console.log("No ingresó ningún número");
}

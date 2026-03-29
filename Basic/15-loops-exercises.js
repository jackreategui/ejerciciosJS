/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los numerosdel 1 al 100 y muestre el resultado

let suma = 0;

for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log("La suma es " + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = ["Jack", "Lester", "Juan", "Alberto"];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

const cadenaText = "Hola, como estas";
let contadorVocales = 0;
const vocales = "aeiouAEIOU";

for (let i = 0; i < cadenaText.length; i++) {
  if (vocales.includes(cadenaText[i])) {
    contadorVocales++;
  }
}
console.log(contadorVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let producto = 1;

for (let i = 0; i < numeros.length; i++) {
  producto = producto * numeros[i];
}

console.log(producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

const tabla = 5;

for (let i = 1; i <= 10; i++) {
  let resultado = tabla * i;
  console.log("La tabla del " + tabla + " x " + i + " es " + resultado);
}

// 8. Usa un bucle para invertir una cadena de texto

const texto = "Jack Reategui Vargas";
let invertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  invertido += texto[i];
}

console.log(invertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let a = 0;
let b = 1;

for (let i = 2; i < 10; i++) {
  let siguiente = a + b;
  console.log(siguiente);

  a = b;
  b = siguiente;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

const arrayNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let mayoresque10 = [];

for (let i = 0; i < arrayNumeros[i]; i++) {
  if (arrayNumeros[i] > 10) {
    mayoresque10.push(arrayNumeros[i]);
  }
}

console.log(mayoresque10);

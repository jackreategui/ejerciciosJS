/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

const animales = ["perror", "gato", "loro", "ciervo", "leon"];

console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final

animales.push("aguila");
animales.unshift("toro");

console.log(animales);

// 4. Crea un set que almacene cinco libros

const libros = new Set([
  "harry potter",
  "viaje al centro de la tierra",
  "las aventuras de jack",
  "el principito",
  "after",
]);

console.log(libros);

// 5. Añade dos más. Uno de ellos repetido

libros.add("Harry Potter");
libros.add("La esperanza");

console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre

const meses = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
]);

console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(meses.has(5));
console.log(meses.get(5));

// 9. Añade al mapa una clave con un array que almacene los meses de verano

const estaciones = new Map([]);
const verano = ["Julio", "Julio", "Agosto"];

estaciones.set("verano", verano);

console.log(estaciones);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

const estudiantes = ["Juan", "Jack", "Lester", "Jack"];

console.log(estudiantes);

const nombres = new Set(estudiantes);

console.log(nombres);

const clase = new Map();

clase.set("name", nombres);

console.log(clase);

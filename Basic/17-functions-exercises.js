/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a, b) {
    return a + b
}

const resultado = suma(20, 10)

console.log(resultado)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function mayor(arrayNumeros) {
    let numeroMayor = arrayNumeros[0]

    for (let i = 1; i < arrayNumeros.length; i++) {
        const element = arrayNumeros[i]

        if (element > numeroMayor) {
            numeroMayor = element
        }
    }
    return numeroMayor
}

console.log(mayor(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

const texto = "Hola, como estas"
let contadorVocales = 0
const vocales = "aeiouAEIOU"

function CuentaVocales(textoString) {
    for (let i = 0; i < textoString.length; i++) {
        if (vocales.includes(textoString[i])) {
            contadorVocales++
        }
    }
    return contadorVocales
}

console.log(CuentaVocales(texto))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

const palabras = ["Hola", "esto es", "muy bueno"]

function mayusculas(listaString) {
    return listaString.map((texto) => {
        return texto.toUpperCase()
    })
}

console.log(mayusculas(palabras))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

const numero = 9

function esPrimo(n) {
    if (n <= 1) {
        return false
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false
            }
        }
    }
    return true
}

console.log(esPrimo(numero))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

const array1 = [1, 2, 3, 4, 5]
const array2 = [1, 20, 3, 40, 5]

function combinacion(a, b) {
    return a.filter((elemento) => {
        return b.includes(elemento)
    })
}

console.log(combinacion(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

const numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumaPares(n) {
    let acumulador = 0

    for (let i = 0; i < n.length; i++) {
        const element = n[i]
        if (element % 2 === 0) {
            acumulador = acumulador + element
        }
    }

    return acumulador
}

console.log(sumaPares(numerosArray))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function elevado(a) {
    let elevadoCuadrado = []

    for (let i = 0; i < a.length; i++) {
        const element = a[i]
        if (element) {
            elevadoCuadrado.push(element ** 2)
        }
    }

    return elevadoCuadrado
}

console.log(elevado(arrayNumeros))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

const cadenaTexto = "una cadena de texto para JS"

function alrevez(a) {
    const palabras = a.split(" ")
    const TextoInvertido = palabras.reverse()
    return TextoInvertido.join(" ")
}

console.log(alrevez(cadenaTexto))

// 10. Crea una función que calcule el factorial de un número dado

const numeroFactorial = 6

function factorial(a) {
    if (a === 0 || a === 1) {
        return 1
    }

    let resultado = 1

    for (let i = a; i > 1; i--) {
        resultado = resultado * i
    }

    return resultado
}

console.log(factorial(numeroFactorial))

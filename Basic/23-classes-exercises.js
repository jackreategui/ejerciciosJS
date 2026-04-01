/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    static tiempo(a, b) {
        return `${this.name} trabaja en la empresa desde ${a - b}`
    }

    job() {
        return `${this.name}, de ${this.age} trabaja en la empresa`
    }
}

// 2. Añade un método a la clase que utilice las propiedades

let trabajador1 = new Person("Jack", 25)

console.log(trabajador1)

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(trabajador1.job())

//* 4. Añade un método estático a la primera clase

//* 5. Haz uso del método estático

console.log(Person.tiempo(25, 10))

// 6. Crea una clase que haga uso de herencia

class Montura {
    constructor(price, material) {
        this.price = price
        this.material = material
    }
}

class Lente extends Montura {
    resistencia() {
        console.log("resiste")
    }
}

let nueva = new Lente(220, "acetato")

console.log(nueva)

// 7. Crea una clase que haga uso de getters y setters

class Termometro {
    #celsius

    constructor(celsius) {
        this.#celsius = celsius
    }

    get temperatura() {
        return `${this.#celsius}°C`
    }

    set temperatura(nuevoValor) {
        if (nuevoValor < -273.15) {
            console.log("Por debajo del cero absoluto")
        } else {
            this.#celsius = nuevoValor
        }
    }
}

const miTermometro = new Termometro(20)

miTermometro.temperatura = 25

console.log(miTermometro.temperatura)

//* 8. Modifica la clase con getters y setters para que use propiedades privadas

//* 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia

class OtroLente extends Montura {
    constructor(price, material, size) {
        super(price, material)
        this.size = size
    }
}

const nuevoLente = new OtroLente(190, "TR90", "52cm")

console.log(nuevoLente)

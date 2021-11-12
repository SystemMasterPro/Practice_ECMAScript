// ANTES DE ECMASCRIPT 6
function newFuction(name, age, country) {
    var name = name || 'Richard';
    var age = age || 25;
    var country = country || 'EC';
    console.log(name,age,country);
}
// es6 -> DEFAULT PARAMS  O PARAMETROS POR DEFECTO
function newFuntion2(name = "Richard", age = 25, country = "EC") {
    console.log(name,age,country);
}
// Llamamos las funciones
// Devuelve valores por defecto
newFuntion2();
// Devuelve mis datos ingresados por parametros
newFuntion2("Leonel", 35, "ARG");

// ANTES DE ECMASCRIPT 6
let hello = "Hello";
let world = "World";
let phrase = hello + '' + world;
console.log(phrase);
//es6 -> Templates Literals
let phrase2 = `${hello} ${world}`
console.log(phrase2);

// ANTES DE ECMASCRIPT 6
let lorem = "jdfjkghdfjkhgdfjkhgjdfhjgfdjghjkfdjghfdjhgjfdhgdhgjfdhgkhdkghfdhgfdkjgfkjhfd \n"
    + "bfjkdxgjvsdjfkghjdfhjkhjkghjfdkhgjhfdjkghjkfdhjkghjkfdhgkjhfdgkfdhkg";
// es6
let lorem2 = `sfdjkhsdjkhgjkdshfjkgdjksfhgjkhfdkjghjkdshjkghdskhgjkfdhkjg
dgfhjhfdhsgkhdkfjhgjkfdkjghkjdfjghkfjdhgfhdjkhfdjkg`
console.log(lorem);
console.log(lorem2);

// ANTES DE ECMASCRIPT 6
const person = {
    'name': 'Richard',
    'age': 25,
    'country': 'EC'
}
console.log(person.name, person.age, person.country);
// es6 -> DESESTRUCTURACION DE UN OBJETO
let { name } = person;
console.log(name);

// ANTES DE ECMASCRIPT 6
let team1 = ['Richard', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']
// es6 -> SPREAD OPERATOR 
let education = ['David', ...team1, ...team2];
console.log(education);

// es6 -> SCOPE LET VAR CONST
{
    // Var es global
    var globalVar = "Soy GlobalVAR"
}
{
    // Let solo esta disponible en donde se lo declara
    let globalLet = "soy GlobalLET"
    console.log(globalLet);
}
console.log(globalVar);
// Valor fijo como lo indica su nombre 
const a = 'b';
console.log(a);

// ANTES DE ECMASCRIPT 6
let name = 'Richard';
let age = 25;
obj = { name: name, age: age };
console.log(obj);
// es6 -> Parametros en Objeto
obj2 = { name, age };
console.log(obj2);

// ANTES DE ECMASCRIPT 6
const names = [
    {
        name: 'Richard',
        age: 25
    },
    {
        name: 'Jose',
        age:30
    }
]
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
// es6 -> ARROWS FUNCTIONS
let listOfNames2 = names.map(item => console.log(item.name))

// es6 -> Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey!!");
        } else {
            reject("Ups!!!");
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(response => console.log("Hello"))
    .catch(error => console.log(error));

// es6 -> Clases -> This
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const clac = new calculator();
console.log(clac.sumar(2, 2));

// es6 -> MODULOS
import { hello } from './module';
hello();

// es6 -> GENERATOR
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// Aqui ay no hay valores en este caso
console.log(generatorHello.next().value);
// es12 -> 🧯 Replace
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");
console.log(replacedString);

// Output: Python es maravilloso, con JavaScript puedo crear el futuro de la web.
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString2 = string.replaceAll("JavaScript", "Python");
console.log(replacedString2);

// Output: Python es maravilloso, con Python puedo crear el futuro de la web.

// 🔒 Metodos privados
class Message {
    #show(val){ // Con el # convertimos al método en privado solo puede ser manipulado dentro de la clase
        console.log(val);
    };
    get #add(value) {
        console.log(value);
    }
};

const message = new Message();
message.show('Hola!');

//  👽 Promise Any
//  Necesitas la ultima version de NodeJS para probar todas estas nuevas funcionalidades de es12
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
// Nos devuelve la primera promesa que se resuelve
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//  🦴 WeakRef(element);

class anyClass {
    constructor(element){
        this.ref = new WeakRef
    }
//     {
//     // Logica
//     }
}

// 🧪 Nuevos operadores lógicos

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);

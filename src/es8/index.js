// es8 -> entries
const data = {
    frontend: 'Richard',
    backend: 'Jose',
    desing: 'Ana',
}
// Crea arreglos por cada propiedad
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// es8 -> values
const data = {
    frontend: 'Richard',
    backend: 'Jose',
    desing: 'Ana',
}
// Crea un array solo con los valores de las propiedades
const values = Object.values(data);
console.log(values);

// es8 -> padStart
const string = 'hello';
// Agrega los caracteres que necesitemos
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12,'-------'));

// es8 -> Async Await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Hello World'),3000);
        } else {
            reject(new Error('Test Error'));
        }
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();
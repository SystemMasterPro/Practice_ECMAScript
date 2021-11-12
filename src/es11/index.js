// es11 -> Dynamic import ( importación dinámica)
const button = document.getElementById('btn');
button.addEventListener('click', async function () {
    const module = await import('./file.js');
    module.hello;
});

//es11 -> BigInt
// 🔢 Big INT: permite trabajar con numeros mayores a 2^53
const aBigNumber = 900715255515331n;
const anotherBigNumber = BigInt(900715255515331);

console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise.allSettled()
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'HelloWorld' ?? 'default string';
console.log(fooo2)


// ⛓ Optional chaining

const user = {};
// EVITA ROMPER LA APLICACION ES UNA FUNCIONALIDAD GENIAL
console.log(user?.profile?.email);

if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}
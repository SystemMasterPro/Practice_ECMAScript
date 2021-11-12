// es9 -> OPERADOR DE REPOSO -> ... -> Spread Operator
const obj = {
    name: 'Richard',
    age: 25,
    country: 'EC',
};

let { name, ...all } = obj;
console.log(name, all);

const obj2 = {
    name: 'Richard',
    age: 25,
};

const obj3 = {
    ...obj2,
    country: 'EC',
};

console.log(obj3);

// es9 -> Finally en las Promesas
const helloWorld =  () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(()=>resolve('Helllo World!'), 3000)
            : reject(new Error('test error'))
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))

// es9 -> exec
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-04');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);
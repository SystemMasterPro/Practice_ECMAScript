// es10 -> flat
//--------------method flat---------------/
//devolver una matriz con una submatriz aplanada, 
//recibe como argunmento la profundidad
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
console.log(array.flat());

//-------------flatMap---------------------------/
//mapear cada elemento, luego pasarle una funcion y aplanar
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

// es10 -> trim
let hello = '           hello world';
console.log(hello.trim());
console.log(hello.trimStart());
let hello = 'hello world              ';
console.log(hello.trimEnd());

// es10 -> optional catch biding
try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

//-------------fromEntries----------------------/
// array to object

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
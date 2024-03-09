const score = 400
// console.log(score); //400
// console.log(score.toString()); //400

// Behind the scenes, JavaScript temporarily converts the primitive values to objects, calls the method, and then converts them back to primitives. This process is called autoboxing or boxing.

// So while Number and String are not strictly classes or objects themselves, they have associated object wrappers that allow you to access methods and properties typically associated with objects.
const balance = new Number(100)
// console.log(balance); //[Number:100]

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // to set the decimal value after point

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //to set the number of significant digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //it will put commas in between so that the number is more readable

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10  
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

// console.log(typeof anotherId); //symbol
console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); //function

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) and call by value  and heap(non-primitive) and call by reference
let x = 10;
let y = x;
y = 20;
console.log(x);
console.log(y);


//call by reference and obj1 and obj2 both stored in stack memory but they have a pointer which points to the stored data inside heap memory
let obj1 = {
  mail: "subha@gmail.com",
  phoneNo: 9876543210,
};

let obj2 = obj1;
obj2.mail = "subha022@gmail.com";
console.log(obj1.mail);
console.log(obj2.mail);

// =================================

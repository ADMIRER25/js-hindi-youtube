const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
// user.username = "sam"
// // user.welcomeMessage()

// console.log(this); //global object in browser is window and in node engine/environment it is empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
//   //   return { username: "Subha" };
// };

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return: etate jehetu akta line achhe so mene neoya hoi je eta return korbe

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

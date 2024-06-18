// function greet(name) {
//   console.log(`Hello ${name}.`);
// }

// const result = greet("John");

// function sum(a, b) {
//   const sumValue = a + b;
//   return sumValue;
// }
// function sub(a, b) {
//   const subValue = a - b;
//   return subValue;
// }
// function div(a, b) {
//   const divValue = a / b;
//   return divValue;
// }
// //anonymus function
// function mul(a, b) {
//   return a * b;
// }

// const sumResults = sum(2, 3);
// console.log(sumResults);

// const subResults = sub(2, 3);
// console.log(subResults);

// const divResults = div(20, 5);
// console.log(divResults);

// const mulResults = mul(20, 5);
// console.log(mulResults);

// const mul = (a, b) => {
//   return a * b;
// };

// const names = (na) => {
//   return na;
// };
// const age = (ag) => {
//   return ag;
// };

// const firstName = "Aavash";
// const lastName = "Tamang";
// const myAge = 19;
// let av = names(firstName);
// let las = names(lastName);
// let agee = age(myAge);
// console.log(`Hello my name is ${av} ${las}. I am ${agee} years old.`);

// const person = {
//   name: "John",
//   age: 19,
//   hobbies: ["reading", "writing"],
// };
// console.log(`My name is ${person.name}. I am ${person.age} years old.
// My hobbies are ${person.hobbies[0]} & ${person.hobbies[1]}.`);

// const numbers = [0, 1, 3, 2, 4, 5];

// numbers.push(0);
// console.log(numbers);

// numbers.pop();
// numbers.shift(0);
// console.log(numbers);

// numbers.sort();
// console.log(numbers);

const Rectangle = {
  width: 10,
  height: 5,
  getArea: function () {
    return this.width * this.height;
  },
};
console.log(Rectangle.getArea());

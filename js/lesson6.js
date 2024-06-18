// //1. Constructors
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let john = new Person("John", 25);
// console.log(john.name);

// //a. Nested function, My closure
// function outerFunction() {
//   let outerVar = "I am outer function!";

//   function innerFunction() {
//     console.log(outerVar);
//   }
//   return innerFunction;
// }
// const myClosure = outerFunction();
// myClosure();

// //2. Callback functions
// function greet(name, Callback) {
//   console.log("Hello, ", name);
//   Callback;
// }
// function sayGoodbye(name) {
//   console.log("Goodbye!" + name);
// }
// greet("Mario", sayGoodbye);

// function greet(name, callback) {
//   return callback(name);
// }
// greet("John", sayName);
// function sayName(name) {
//   console.log("Hello " + name);
// }

// function add(a, b) {
//   console.log(`The sum is ${a + b}`);
// }
// function sub(a, b) {
//   console.log(`The sub is ${a - b}`);
// }
// function call(a, b, calladd, callsub) {
//   calladd(a, b);
//   callsub(a, b);
// }
// call(5, 5, add, sub);

// // 3. Promise (resolve{left},pendingstate{between} reject{right})
// const promise = new Promise((resolve, reject) => {
//   const sum = 110;
//   if (sum == 10) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });
// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const promise = new Promise((resolve, reject) => {
  const sub = 10 - 3;
  if (sub <= 5) {
    resolve(`Your value is ${sub}`);
  } else {
    reject(`Error the value ${sub} is greater than 5`);
  }
});
promise
  .then((ans) => {
    console.log(ans);
  })
  .catch((error) => {
    console.log(error);
  });

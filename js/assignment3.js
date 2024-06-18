// for (let i = 1; i <= 10; i++) {
//   if (i == 5 || i == 6 || i == 7) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   if (i == 5) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let i = 1;
// do {
//   console.log(i);
//   i += 2;
// } while (i <= 10);

// Questions
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i <= 10) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// let i = 5;
// let fact = 1;
// while (i >O)) {
// if(i==0){
//     fact*=1;
// }
// else{
//     fact=fact*i;
// }
// i--;
// }
// console.log(fact);

// let i = 1;
// for (i = 1; i <= 5; i++) {
//   let answer = i ** 2;
//   console.log(answer);
// }

// let i = 1;
// for (i = 1; i <= 5; i++) {
//   let answer = i ** 3;
//   console.log(answer);
// }

// let i = 1;
// let fruit = ["apple", "banana", "mango", "pear"];
// for (i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

// const arr = [9, 8, 7, 6, 5];
// let sum = 0;
// for (let i of arr) {
//   sum += i;
// }
// console.log(sum);

// let names = ["aavash", "abhinab", "bijen"];
// for (i = 0; i < names.length; i++) {
//   n = names.reverse();
//   console.log(n);
// }

// let largestNum = [1, 2, 3, 45, 6];
// let biggestNum = 0;
// while (i < largestNum.length) {
//   if (largestNum[i] > biggestNum) {
//     biggestNum = largestNum[i];
//     console.log(biggestNum);
//   }
//   i++;
// }

// let sum_of_even = 0;
// for (i = 0; i < 20; i++) {
//   if (i % 2 == 0) {
//     sum_of_even += i;

//   }
// }
// console.log(sum_of_even)

// Question 12:
// **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**

// var pro = 1;
// var i = 1;
// while (i <= 15) {
//   if (i % 2 !== 0) {
//     pro *= i;
//   }
//   i++;
// }
// console.log(pro);

// /*
// **Q: Write a for loop to print the following pattern:**
// ```
// *
// **
// ***
// ****
// *****
// ```
// */
// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// let a = 0,
//   b = 1,
//   count = 0;
// while (count < 10) {
//   console.log(a);
//   let temp = a;
//   a = b;
//   b = temp + b;
//   count++;
// }
// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let num = 1; num <= 20; num++) {
//   if (isPrime(num)) {
//     console.log(num);
//   }
// }
// let number = 12345;
// let reversedNumber = "";

// while (number > 0) {
//   reversedNumber += number % 10;
//   number = Math.floor(number / 10);
// }

// console.log(parseInt(reversedNumber));

// /**
//  * 1. Right-Angled Triangle:
//  *
//  **
//  ***
//  ****
//  *****
//  */
// for (i = 1; i <= 5; i++) {
//   let x = "";
//   for (j = 0; j < i; j++) {
//     x += "*";
//   }
//   console.log(x);
// }
// /**
//  * 2. Solid Rectangle:
//  *******
//  *******
//  *******
//  *******
//  *******
//  */
// for (i = 1; i <= 5; i++) {
//   let x = "";
//   for (j = 0; j < i; j++) {
//     x = "******";
//   }
//   console.log(x);
// }

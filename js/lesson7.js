// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 1000);
//   });
// }

// async function getData() {
//   const data = await fetchData();
//   console.log(data); // Logs: "Data fetched" after 1 sec
// }
// getData();

// // Both Array & Object in js can use 'find', 'map', 'filter' methods
// // But they are used slightly different in each data structure.

// // Find
// const numbers = [10, 20, 30, 40, 50];

// const getNumber = numbers.find((number) => {
//   return number > 30;
// });
// console.log(getNumber);

// // Filter
// const filteredNumbers = numbers.filter((num) => num > 30);
// console.log(filteredNumbers);

// // Map
// const squaredNumbers = numbers.map((num) => num - 2);
// console.log(squaredNumbers);

// // Rest & Spread Operators

// // Spread

// // Concatenating Array
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// // Copying Array
// const arr1 = [1, 2, 3, 4];
// const combined = [...arr1];
// console.log(combined);

// // Rest
// const arr = [1, 2, 3, 4, 5];
// const first = arr[0];
// const rest = arr.slice(1);

// console.log("First element:", first);
// console.log("Rest ", rest); // Not Rest

// const arr = [1, 2, 3, 4, 5];
// const [a, ...rest] = arr;
// console.log(a);
// console.log(rest);

// //Reduce
// function add(...numbers) {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }
// console.log(add(1, 2, 3));
// console.log(add(4, 5, 6, 7));

function sub(...numbers) {
  return numbers.reduce((subtract, num) => subtract - num);
}
console.log(sub(1, 2, 3));
console.log(sub(4, 5, 6, 7));

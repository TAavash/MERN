//1. P R O M I S E
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=2933cae520e958c54e974ed5617846c0`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    }, 2000);
  });
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// 2. Closures
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    getCount: () => count,
  };
}
const counter = createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());

// 3. Callbacks
function processData(arr, process) {
  const processedArray = [];
  for (let i = 0; i < arr.length; i++) {
    processedArray.push(process(arr[i]));
  }
  return processedArray;
}

function addOne(arr) {
  return arr + 1;
}

const firstArray = [1, 2, 3, 4, 5];
const secondArray = processData(firstArray, addOne);
console.log(secondArray);
// 4. Async/Await
// const fetchData = async () => {
//     try {

//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=2933cae520e958c54e974ed5617846c0`
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const getData = async () => {
//     try {
//       const data = await fetchData();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   getData();

getData().then((msg) => console.log(msg));

// 5. Array Manipulation: Map

const arrayOfNumber = [5, 7, 9, 10, 13];

mapp = arrayOfNumber.map((num) => num + num);
console.log(mapp);

// 6. Array Manipulation: Filter
const arrayOfNumbers = [5, 7, 30, 40, 50];

filters = arrayOfNumbers.filter((num) => num > 10);
console.log(filters);

// 7. Array Manipulation: Find
function findNumber(numbers) {
  return numbers.find((num) => num > 15);
}

// 8. Array Manipulation: Reduce
function sumNumbers(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// 9. Object Manipulation
function transformArrayToObject(users) {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

// 10. Classes and Objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const personName = new Person("Ram", 20);
console.log(personName.describe());

// 11. Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying.`;
  }
}
const students = new Student("Ravan", 20, "A");
console.log(students.describe());
console.log(students.study());

// 12. Error Handling with Promises
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// 13. Error Handling with Async/Await
async function fetchDataWithAsyncAwait() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchDataWithAsyncAwait();

// 14. Complex Array Manipulation
function getUniqueHobbies(users) {
  return [
    ...new Set(
      users.reduce((allHobbies, user) => {
        return allHobbies.concat(user.hobbies);
      }, [])
    ),
  ];
}

// Conceptual Questions
/*
1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
Promises are used in JavaScript to handle asynchronous operations. They provide a cleaner, more readable way to handle asynchronous tasks compared to traditional callback functions. Promises avoid the problem of "callback hell" where callbacks are nested within other callbacks, leading to difficult-to-read code. They also provide a way to handle errors more elegantly.

2. What is a closure in JavaScript? Provide an example.
A closure is a function that remembers the environment in which it was created. This means that it has access to variables from its containing (enclosing) function even after that function has finished executing.
Example:
function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

3. What is a callback function and why is it used in JavaScript?
A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. They are used in JavaScript to handle asynchronous operations, allowing code to run after a task is completed, such as data fetching or timer completion.

4. What are async/await in JavaScript and how do they improve asynchronous programming?
Async/await are syntax features in JavaScript that allow writing asynchronous code in a synchronous-like manner. They make the code more readable and easier to understand by avoiding chaining of multiple `.then()` methods and handling errors with try/catch blocks instead of `.catch()` methods.

5. Write the difference between ES6 and JS.
ES6 (ECMAScript 2015) is the 6th edition of the ECMAScript standard and introduced significant new features to JavaScript, such as let/const for block-scoped variables, arrow functions, template literals, default parameters, destructuring assignments, classes, modules, and more. JS refers to JavaScript in general, encompassing all versions and features up to the current specification.

6. What are some of the major features introduced in ES6?
- Block-scoped variables (let and const)
- Arrow functions
- Template literals
- Default parameters
- Destructuring assignments
- Enhanced object literals
- Classes
- Modules
- Promises
- Iterators and for-of loops
- Spread and rest operators
*/

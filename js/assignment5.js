// 1. Write a JavaScript function add that takes two numbers as arguments and returns their
// sum. Provide an example of calling this function with two numbers.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(3, 4));

// 2. Write a JavaScript function getFirstElement that takes an array as an argument and
// returns the first element of the array. Provide an example with an array of your choice.
function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3, 4]));

// 3. Define a JavaScript object person with properties name, age, and city. Write a function
// getPersonInfo that takes this object and returns a string with the person&#39;s details in the
// format &quot;Name: [name], Age: [age], City: [city]&quot;.
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

function getPersonInfo(person) {
  return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}
console.log(getPersonInfo(person));

// 4. Write a JavaScript function toUpperCase that takes a string as an argument and
// returns the string in all uppercase letters. Provide an example with a sample string.
function toUpperCase(str) {
  return str.toUpperCase();
}
console.log(toUpperCase("hello"));

// 5. Write a JavaScript function multiply that takes two numbers as arguments and returns
// their product. Provide an example of calling this function with two numbers.
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(3, 4));

// 6. Write a JavaScript function getLastElement that takes an array as an argument and
// returns the last element of the array. Provide an example with an array of your choice.
function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3, 4]));

// 7. Define a JavaScript object book with properties title, author, and year. Write a function
// getBookTitle that takes this object and returns the title of the book.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
};

function getBookTitle(book) {
  return book.title;
}
console.log(getBookTitle(book));

// 8. Write a JavaScript function reverseString that takes a string as an argument and
// returns the string reversed. Provide an example with a sample string.
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 9. Write a JavaScript function isEven that takes a number as an argument and returns
// true if the number is even and false if it is odd. Provide an example with a sample
// number.
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));

// 10. Write a JavaScript function sumArray that takes an array of numbers as an argument
// and returns the sum of all the numbers in the array. Provide an example with an array
// of numbers.
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));

// 11. Define a JavaScript object car with properties make, model, and year. Write a function
// getCarModel that takes this object and returns the model of the car.
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
};

function getCarModel(car) {
  return car.model;
}
console.log(getCarModel(car));

// 12. Write a JavaScript function concatenateStrings that takes two strings as arguments
// and returns a new string that is the concatenation of the two input strings. Provide an
// example with two sample strings.
function concatenateStrings(str1, str2) {
  return str1 + str2;
}
console.log(concatenateStrings("hello", "world"));

// 13. Write a JavaScript function square that takes a number as an argument and returns its
// square. Provide an example of calling this function with a sample number.
function square(num) {
  return num * num;
}
console.log(square(5));

// 14. Write a JavaScript function findMax that takes an array of numbers as an argument
// and returns the largest number in the array. Provide an example with an array of
// numbers.
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4]));

// 15. Define a JavaScript object student with properties firstName, lastName, and grade.
// Write a function getFullName that takes this object and returns the full name of the
// student in the format &quot;firstName lastName&quot;.
let student = {
  firstName: "John",
  lastName: "Doe",
  grade: "A",
};

function getFullName(student) {
  return `${student.firstName} ${student.lastName}`;
}
console.log(getFullName(student));

// 16. Write a JavaScript function greet that takes a name as an argument and returns a
// greeting string in the format &quot;Hello, [name]!&quot;. Provide an example of calling this
// function with a sample name.
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// 17. Write a JavaScript function doubleArray that takes an array of numbers as an
// argument and returns a new array with each number doubled. Provide an example with
// an array of numbers.
function doubleArray(arr) {
  return arr.map((num) => num * 2);
}
console.log(doubleArray([1, 2, 3, 4]));

// 18. Define a JavaScript object movie with properties title, director, and releaseYear. Write a
// function getMovieTitle that takes this object and returns the title of the movie.
let movie = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
};

function getMovieTitle(movie) {
  return movie.title;
}
console.log(getMovieTitle(movie));

// 19. Write a JavaScript function getLength that takes a string as an argument and returns
// the length of the string. Provide an example with a sample string.
function getLength(str) {
  return str.length;
}
console.log(getLength("hello"));

// 20. Write a JavaScript function subtract that takes two numbers as arguments and returns
// their difference. Provide an example of calling this function with two numbers.
function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(10, 4));

// 21. Write a JavaScript function mergeArrays that takes two arrays as arguments and
// returns a new array containing all elements from both arrays. Provide an example with
// two arrays.
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2], [3, 4]));

// 22. Define a JavaScript object recipe with properties name, ingredients (an array), and
// servings. Write a function getIngredientList that takes this object and returns the
// ingredients array.
let recipe = {
  name: "Pancakes",
  ingredients: ["flour", "milk", "eggs"],
  servings: 4,
};

function getIngredientList(recipe) {
  return recipe.ingredients;
}
console.log(getIngredientList(recipe));

// 23. Write a JavaScript function endsWith that takes a string and a character as arguments
// and returns true if the string ends with the given character, otherwise false. Provide an
// example with a sample string and character.
function endsWith(str, char) {
  return str.endsWith(char);
}
console.log(endsWith("hello", "o"));

// 24. Write a JavaScript function divide that takes two numbers as arguments and returns
// their quotient. Provide an example of calling this function with two numbers.
function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(10, 2));
// 25. Write a JavaScript function removeFirstElement that takes an array as an argument
// and returns a new array with the first element removed. Provide an example with an
// array.
function removeFirstElement(arr) {
  return arr.slice(1);
}
console.log(removeFirstElement([1, 2, 3, 4]));

// 26. Define a JavaScript object album with properties title, artist, and tracks (an array of
// track names). Write a function getTrackCount that takes this object and returns the
// number of tracks.
let album = {
  title: "Thriller",
  artist: "Michael Jackson",
  tracks: ["Wanna Be Startin' Somethin'", "Thriller", "Beat It"],
};

function getTrackCount(album) {
  return album.tracks.length;
}
console.log(getTrackCount(album));

// 27. Write a JavaScript function startsWith that takes a string and a character as arguments
// and returns true if the string starts with the given character, otherwise false. Provide an
// example with a sample string and character.
function startsWith(str, char) {
  return str.startsWith(char);
}
console.log(startsWith("hello", "h"));

// 28. Write a JavaScript function isPositive that takes a number as an argument and returns
// true if the number is positive and false if it is negative or zero. Provide an example with
// a sample number.
function isPositive(num) {
  return num > 0;
}
console.log(isPositive(5));

// 29. Write a JavaScript function countElements that takes an array as an argument and
// returns the number of elements in the array. Provide an example with an array.
function countElements(arr) {
  return arr.length;
}
console.log(countElements([1, 2, 3, 4]));

// 30. Define a JavaScript object game with properties name, genre, and platforms (an array
// of strings). Write a function getPlatformList that takes this object and returns the
// platforms array.
let game = {
  name: "The Legend of Zelda",
  genre: "Adventure",
  platforms: ["Nintendo Switch", "Wii U"],
};

function getPlatformList(game) {
  return game.platforms;
}
console.log(getPlatformList(game));

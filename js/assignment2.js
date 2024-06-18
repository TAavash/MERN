// 1) Password Strength Checker: Write code using if/else statements to check the
// strength of a password based on its length. Print messages like &quot;Strong password,&quot;
// &quot;Medium password,&quot; or &quot;Weak password&quot; depending on the length criteria (e.g., strong:
// &gt; 12 characters, medium: 8-12 characters, weak: less than 8 characters).
const pwd = "helloworld123";
if (pwd.length > 12) {
  console.log("strong password");
} else if (pwd.length > 8 && pwd.length < 12) {
  console.log("medium password");
} else if (pwd.length < 8) {
  console.log("weak password");
} else {
  console.log("use symbols too");
}

// 2) Vowel or Consonant: Write a program using if/else to determine if a character entered
// by the user is a vowel (a, e, i, o, u) or a consonant. Consider uppercase and lowercase
// letters.
let char = "A";
let lowerChar = char.toLowerCase();
if (
  lowerChar === "a" ||
  lowerChar === "e" ||
  lowerChar === "i" ||
  lowerChar === "o" ||
  lowerChar === "u"
) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// 3) Number Guessing Game: Create a simple guessing game using if/else statements.
// Generate a random number between 1 and 10 and allow the user to guess it. Print
// messages like &quot;Correct!&quot; or &quot;Guess higher/lower&quot; based on their input.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = 5; // Example guess
if (userGuess === randomNumber) {
  console.log("Correct!");
} else if (userGuess < randomNumber) {
  console.log("Guess higher");
} else {
  console.log("Guess lower");
}

// 4) Calculate Price with Tax: Write code using if/else to calculate the final price of a
// product considering a sales tax rate (e.g., 8%). Take the product price and tax rate as
// inputs and print the final price with tax.
let basePrice = 100;
let salesTax = 0.08;
let totalPrice = basePrice + basePrice * salesTax;
console.log("Final price with tax: " + totalPrice);

// 5) Simple Calculator: Develop a basic calculator using if/else statements. Allow the user
// to enter two numbers and an operator (+, -, *, /). Based on the operator, perform the
// calculation and print the result.
// Function to perform the calculation
function calculate(num1, num2, operator) {
  let result;
  let validOperation = true;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      console.log("Error: Division by zero is not allowed.");
      validOperation = false;
    }
  } else {
    console.log("Error: Invalid operator.");
    validOperation = false;
  }

  if (validOperation) {
    console.log("The result is: " + result);
  }
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
calculate(num1, num2, operator);

// 6) Movie Rating Recommendation: Write code using switch/case to recommend a
// movie genre based on a user&#39;s age. Use different cases for age ranges (e.g., children,
// teenagers, adults) and suggest appropriate genres (e.g., animation, action, drama).
let personAge = 20;
let genreRecommendation;

switch (true) {
  case personAge <= 12:
    genreRecommendation = "Watch animation movies";
    break;
  case personAge <= 17:
    genreRecommendation = "Watch action movies";
    break;
  case personAge >= 18:
    genreRecommendation = "Watch drama movies";
    break;
  default:
    genreRecommendation = "Age not valid";
}

console.log(genreRecommendation);

// 7) Weekend or Weekday Checker: Create a program using if/else to determine if a
// given date (e.g., stored in a variable) falls on a weekend (Saturday or Sunday).
let someDate = new Date("2024-05-23");
let day = someDate.getDay();

if (day === 0 || day === 6) {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

// 8) Positive, Zero, or Negative: Write code using if/else statements to check if a number
// is positive, zero, or negative. Print the corresponding message.
let num = -3;
if (num > 0) {
  console.log("Positive");
} else if (num === 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// 9) Multiple of 3 or 5: Create a program using if/else to determine if a number is divisible
// by 3, 5, or both. Print a message indicating divisibility or non-divisibility.
let numValue = 15;
if (numValue % 3 === 0 && numValue % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else if (numValue % 3 === 0) {
  console.log("Divisible by 3");
} else if (numValue % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 3 or 5");
}

// 10) Even or Odd Sum: Write code using if/else to check if the sum of two user-entered
// numbers is even or odd. Print the result.
let numA = 8;
let numB = 3;
let total = numA + numB;

if (total % 2 === 0) {
  console.log("Even sum");
} else {
  console.log("Odd sum");
}

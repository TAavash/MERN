// // 1. Write a function that takes two parameters and returns their sum.

// function sum(a, b) {
//   const add = a + b;
//   return add;
// }
// const sumValue = sum(2, 4);
// console.log(sumValue);

// // 2. Create a function that calculates the average of an array of numbers.
// function average(numbers) {
//   if (numbers.length === 0) return 0; // Handle empty array case

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum / numbers.length;
// }
// const number = [10, 20, 30, 40, 50];
// const average = average(number);
// console.log(`The average is: ${average}`);

// // 3. Write a function that checks if a given number is even or odd.

// function even_odd(number) {
//   if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// const number = 7;
// const result = even_odd(number);
// console.log(`The given number is ${result}.`);

// // 4. Create a function that reverses a string.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// const letter = "hello";
// const reverse = reverse(letter);
// console.log(`The reversed string is: ${reverse}`);

// // 5. Write a function that finds the maximum value in an array of numbers.
// function findMaxValue(numbers) {
//   if (numbers.length === 0) {
//     throw new Error("The array is empty.");
//   }

//   let maxValue = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxValue) {
//       maxValue = numbers[i];
//     }
//   }

//   return maxValue;
// }

// const numbersArray = [2, 4, 5, 7, 9, 1];
// const maxValue = findMaxValue(numbersArray);
// console.log(`The maximum value is: ${maxValue}`);

// // 6. Create a function that converts Celsius to Fahrenheit.
// // (1°C × 9/5) + 32 = 33.8°F

// function convert(celsius) {
//   const fahrenheit = (celsius * 9) / 5 + 32;
//   return fahrenheit;
// }
// const fahrenheitValue = convert(2);
// console.log(fahrenheitValue);

// // 7. Write a function that generates a random number between a given minimum and
// // maximum.

// function random_Number(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const min = 1;
// const max = 100;
// const randomNumber = random_Number(min, max);
// console.log(`Random number between ${min} and ${max}: ${randomNumber}`);

// // 8. Create a function that checks if a string is a palindrome.

// function checkPalindrome(firstLetter) {
//   const firstString = firstLetter.split("").reverse().join("");
//   if (firstString == firstLetter) {
//     console.log("String is palindrome");
//   } else {
//     console.log("String is not palindrome");
//   }
// }

// checkPalindrome("abcba");

// // 9. Write a function that capitalizes the first letter of each word in a sentence.
// function makeCapital(letter) {
//   const firstString = letter[0].toUpperCase() + letter.slice(1);
//   return firstString;
// }

// makeCapital("apple");

// // 10. Create a function that returns the factorial of a given number.
// function factorial(n) {
//   if (n < 0) {
//     throw new Error("Factorial is not defined for negative numbers.");
//   }
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// const number = 5;
// const result = factorial(number);
// console.log(`The factorial of ${number} is: ${result}`);

// // 11. Write a function that counts the number of occurrences of a specific element in an array.
// function countOcc(array, element) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       count++;
//     }
//   }
//   return count;
// }

// const array = [1, 2, 3, 4, 2, 2, 5, 2];
// const element = 2;
// const occurrences = countOcc(array, element);
// console.log(`The element ${element} occurs ${occurrences} times in the array.`);

// // 12. Create a function that checks if a given year is a leap year.
// function leapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const year = 2024;
// const result = leapYear(year);
// console.log(`${year} is a leap year: ${result}`);

// // 13. Write a function that merges two arrays and returns the sorted result.
// function resultArr(array1, array2) {
//   const mergedArray = array1.concat(array2);
//   return mergedArray.sort((a, b) => a - b);
// }

// const array1 = [3, 1, 4];
// const array2 = [2, 5, 6];
// const sortedMergedArray = resultArr(array1, array2);
// console.log(`The sorted merged array is: ${sortedMergedArray}`);

// // 14. Create a function that converts a number to its Roman numeral representation.
// function convertToRoman(num) {
//   const romanNumerals = [
//     { value: 1000, numeral: "M" },
//     { value: 900, numeral: "CM" },
//     { value: 500, numeral: "D" },
//     { value: 400, numeral: "CD" },
//     { value: 100, numeral: "C" },
//     { value: 90, numeral: "XC" },
//     { value: 50, numeral: "L" },
//     { value: 40, numeral: "XL" },
//     { value: 10, numeral: "X" },
//     { value: 9, numeral: "IX" },
//     { value: 5, numeral: "V" },
//     { value: 4, numeral: "IV" },
//     { value: 1, numeral: "I" },
//   ];

//   let roman = "";

//   for (let i = 0; i < romanNumerals.length; i++) {
//     while (num >= romanNumerals[i].value) {
//       roman += romanNumerals[i].numeral;
//       num -= romanNumerals[i].value;
//     }
//   }

//   return roman;
// }

// const number = 1987;
// const romanNumeral = convertToRoman(number);
// console.log(`${number} in Roman numerals is: ${romanNumeral}`);

// // 15. Write a function that finds the second smallest element in an array of numbers.
// function findSecondSmallest(numbers) {
//   if (numbers.length < 2) {
//     throw new Error("Array must contain at least two elements.");
//   }

//   let smallest = Infinity;
//   let secondSmallest = Infinity;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = numbers[i];
//     } else if (numbers[i] < secondSmallest && numbers[i] !== smallest) {
//       secondSmallest = numbers[i];
//     }
//   }

//   return secondSmallest;
// }

// const array = [3, 1, 4, 1, 5, 9];
// const secondSmallest = findSecondSmallest(array);
// console.log(`The second smallest element is: ${secondSmallest}`);

// // 16. Create a function that calculates the area of a circle given its radius.
// function areaCircle(radius) {
//   const area = (22 / 7) * (radius * radius);
//   return area;
// }
// const radiuus = areaCircle(5);
// console.log(radiuus);

// // 17. Write a function that truncates a string if it exceeds a specified length and appends &quot;...&quot; to
// // the end.
// function truncateString(str, maxLength) {
//   if (str.length <= maxLength) {
//     return str;
//   }
//   return str.slice(0, maxLength) + "...";
// }

// const originalString = "This is a very long string that needs to be truncated.";
// const maxLength = 20;
// const truncatedString = truncateString(originalString, maxLength);
// console.log(truncatedString);

// // 18. Create a function that checks if a given string contains only digits.
// function isNumericString(str) {
//   return /^\d+$/.test(str);
// }

// const string1 = "123456";
// const string2 = "123a456";

// console.log(isNumericString(string1));
// console.log(isNumericString(string2));

// // 19. Write a function that removes all falsy values (false, null, 0, &quot;&quot;, undefined, and NaN) from
// // an array.
// function removeFalsyValues(array) {
//   return array.filter(Boolean);
// }

// const arrayWithFalsyValues = [0, 1, false, 2, "", 3, null, undefined, NaN, 4];
// const cleanedArray = removeFalsyValues(arrayWithFalsyValues);
// console.log(cleanedArray);

// // 20. Create a function that generates a new array with unique values from a given array.
// function getUniqueValues(array) {
//   return [...new Set(array)];
// }

// const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = getUniqueValues(arrayWithDuplicates);
// console.log(uniqueArray);

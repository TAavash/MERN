//Create two variables, one for your name and another for your age. Print a sentence combining those variables.
const fullName = "Aavash Tamang";
let age = 19;
console.log(`I am ${fullName} and I am ${age}years old.`);
//ans:I am  Aavash Tamang and I am 19 years old.

//Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable.
// Print the final value.
var a = 10;
var b = a*a;
console.log(b);//100

//Write code to check if the character stored in a variable is uppercase or lowercase.
// Print 'uppercase' or 'lowercase'; accordingly. (Hint: Use character codes)
const word = "lowercase";
const charCode = word.charCodeAt(0);

if (charCode >= 65 && charCode <= 90) {
    console.log('uppercase');
} else if (charCode >= 97 && charCode <= 122) {
    console.log('lowercase');
} else {
    console.log('neither uppercase nor lowercase');
}

//Declare two variables with numeric values. Add them together and print the sum. 
//Then,subtract the smaller number from the larger number and store the difference in a new variable. 
//Print the difference
const firstNum = 1034;
const secondNum = 423;
const sum = firstNum + secondNum;
console.log("The sum is ",sum);//1457
const sub=firstNum - secondNum;
console.log("The subtract is:", sub);//611

//Imagine you have a variable storing a product price. Write code to apply a 10%
//discount and print the discounted price.
const productPrice = 3500;
const discount=10/100;
const discountedPrice = productPrice *discount ;
console.log(`The discount is ${discountedPrice}`); //350
const priceAfterDiscount = productPrice - discountedPrice;
console.log(`The price after 10% discount of product is ${priceAfterDiscount}`);//3150
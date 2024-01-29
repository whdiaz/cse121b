/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Definition - Addition Feature */
function add(number1, number2) {
  return number1 + number2;
}

/* Function Declaration - Add Numbers */
function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

/* Function Expression - Subtraction Feature */
const subtract = function(number1, number2) {
  return number1 - number2;
};

/* Function Expression - Subtract Numbers */
const subtractNumbers = function() {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

/* Arrow Function - Multiplication Feature */
const multiply = (number1, number2) => number1 * number2;

/* Arrow Function - Multiply Numbers */
const multiplyNumbers = () => {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
};

/* Function Declaration - Division Feature */
function divide(dividend, divisor) {
  return dividend / divisor;
}

/* Open Function Use - Divide Numbers */
function divideNumbers() {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
}

/* Selection Structures */
document.getElementById("getTotal").addEventListener("click", function() {
  // Declare and instantiate a variable for the subtotal
  let subtotal = parseFloat(document.getElementById("subtotal").value) || 0;

  // Check if the membership checkbox is checked for a discount
  let isMember = document.getElementById("member").checked;

  // Apply discount if the user is a member
  let discountedTotal = isMember ? subtotal * 0.8 : subtotal;

  // Output the total with two decimals using template string
  document.getElementById("total").textContent = `$${discountedTotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

/* Assign the value of the array variable to the HTML element with an ID of array */
document.getElementById("array").textContent = numbersArray.join(", ");

/* Use the filter() array method to find all odd numbers and assign the result to the HTML element with an ID of odds */
document.getElementById("odds").textContent = numbersArray.filter(number => number % 2 !== 0).join(", ");

/* Use the filter() array method to find all even numbers and assign the result to the HTML element with an ID of evens */
document.getElementById("evens").textContent = numbersArray.filter(number => number % 2 === 0).join(", ");

/* Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray */
document.getElementById("sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number, 0);

/* Use the map() array method to multiply each element by 2 and assign the result to the HTML element with an ID of multiplied */
document.getElementById("multiplied").textContent = numbersArray.map(number => number * 2).join(", ");

/* Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied */
document.getElementById("sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);

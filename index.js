//q1
function capitalizeNames(names) {
    return names.map(name =>
      typeof name === 'string' && name.length > 0
        ? name[0].toUpperCase() + name.slice(1).toLowerCase()
        : name
    );
  }
  
  const input = ["john", "SARAh", "miKe"];
  const result = capitalizeNames(input);
  console.log(result); // Output: ["John", "Sarah", "Mike"]
  
 //q2

 function countWords(sentence) {
    if (typeof sentence !== 'string') return 0;
    
    const words = sentence.trim().split;
    return words[0] === "" ? 0 : words.length;
  }
  
  const sentence = "  Hello world! This is JavaScript.  ";
  const wordCount = countWords(sentence);
  console.log("Word count:", wordCount);
  
//q3

function findMinNumber(numbers) {
    if (numbers.length === 0) return undefined; // Handle empty array
  
    let min = numbers[0]; // Start with the first number
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < min) {
        min = numbers[i]; // Update min if a smaller number is found
      }
    }
  
    return min;
  }
const numbersArray = [5, 3, 8, 9, 4];
const minNumber = findMinNumber(numbersArray);
console.log("Minimum number:", minNumber); 
//q4  
function printNumbers(n) {
    let i = 1;
    while (i <= n) {
      console.log(i);
      i++;
    }
  }
printNumbers(8)  

//q5

function joinArrayToString(arr) {
    let result = "";
  
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i < arr.length - 1) {
        result += " ";
      }
    }
  
    return result;
  }
const arrayToJoin = ["Hello", "world", "this", "is", "JavaScript"];
const joinedString = joinArrayToString(arrayToJoin);
console.log("Joined string:", joinedString);

//q6
function calculateProduct(numbers) {
    if (numbers.length === 0) return 0; // Return 0 for empty array
  
    let product = 1;
    let i = 0;
  
    while (i < numbers.length) {
      product *= numbers[i];
      i++;
    }
  
    return product;
  }
const numbersForProduct = [2, 3, 4];
const productResult = calculateProduct(numbersForProduct);
console.log("Product of numbers:", productResult);
//q7
function removeSpaces(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        result += str[i];
      }
    }
  
    return result;
  }
const stringWithSpaces = "  Hello   World!  ";
const stringWithoutSpaces = removeSpaces(stringWithSpaces);
console.log("String without spaces:", stringWithoutSpaces);  
//q8

function doubleNumbers(numbers) {
    let doubled = [];
  
    for (let i = 0; i < numbers.length; i++) {
      doubled.push(numbers[i] * 2);
    }
  
    return doubled;
  }
const numbersToDouble = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbersToDouble);
console.log("Doubled numbers:", doubledNumbers);

//q9
function printoddNumbers(n) {
    let i = 1;
  
    while (i <= n) {
      if (i % 2 !== 0) {
        console.log(i);
      }
      i++;
    }
  }
printoddNumbers(15);
//q10
function createIncrementer(start) {
    let count = start;
  
    return function() {
      count++;
      return count;
    };
  }
const incrementer = createIncrementer(5);
console.log(incrementer()); 
let array = [12,3,4,8,77,9,5,6,-8]

console.log(array.length);

console.log(array[4]);

let max = -Infinity;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);

let array2= [66,88,99]

let length = array2.push(100);
console.log(array2,length);

let removedElement = array2.pop();
console.log(array2, removedElement, length);
console.log(array2)

let removedFirstElement = array2.shift();
console.log(array2, removedFirstElement);

let addedFirstElement = array2.unshift(55);
console.log(array2, addedFirstElement);


//q1
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//q2
const number = [10, 20, 30, 40, 50];
let i = 0;

while (i < number.length) {
  console.log(number[i]);
  i++;
}

//q3
let n = 5; 
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;
}

console.log(`Factorial of ${n} is ${factorial}`);

//q4
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//q5
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum of numbers from 1 to 100 is:", sum);

//q6
for (let i = 1; i <= 10; i++) {
  let cube = i * i * i;
  console.log(`Cube of ${i} is ${cube}`);
}

//q7
let sum1 = 0;

for (let i = 1; i <= 20; i += 2) {
  sum1 += i * i;
}

console.log("Sum of squares of odd numbers from 1 to 20 is:", sum1);

//q8
let sum2 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    sum2 += i;
  }
}

console.log("Sum of numbers divisible by 3 from 1 to 100 is:", sum2);

//q9
let product = 1;

for (let i = 1; i <= 10; i++) {
  product *= i;
}

console.log("Product of numbers from 1 to 10 is:", product);

//q10
let a= 10;

while (a >= 1) {
  console.log(a);
  a--;
}

//q11
let number1 = 1;

while (number1 <= 1000) {
  number1 *= 2;
}

console.log("Final value after exceeding 1000 is:", number1);

//q12
let b = 2;
let sum3 = 0;

while (b <= 100) {
  sum3 += b;
  b += 2;
}

console.log("Sum of even numbers from 1 to 100 is:", sum3);

//q13
let number4 = 1;
let count = 0;

while (count < 5) {
  if (number4 % 3 === 0 && number4 % 7 === 0) {
    console.log(number4);
    count++;
  }
  number4++;
}








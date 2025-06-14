// if else

let studentMarks = 65;
if (studentMarks >= 75) {
    console.log("You have passed the exam.");
}
else {
    console.log("You have failed the exam.");
}

let number = 13;
if (number % 2 === 0) {
    console.log("The number is even.");
}
else {
    console.log("The number is odd.");
}

let num1 = 80;
let num2 = 80;
if (num1 > num2) {
    console.log("num1 is greater than num2.");
}
else 
if (num1 < num2) {
    console.log("num1 is less than num2.");
}
else {
    console.log("num1 is equal to num2.");
}

// nested if else

let email = "vedsantoki@gmail.com";
let password = "Ved@123";

if (email = "vedsantoki@gmail.com") {
    if (password == "Ved@123") {
        console.log("Login successful.");
    }
    else {
        console.log("Incorrect password.");
    }
}


// Question

//q1

let radius = 7;
let area = 3.14 * radius**2;
console.log("The area of the circle is: " + area);


//q2

let a = 10;

let b = 20;

let c = 5;



console.log((a * b) /c + (b - a) ) 


//q3

let x = 5
let y = 10

x += 2
y *=x

console.log("ne value of x is :" + x);
console.log("new value of y is :" + y);

//q4

let num = 10 
console.log("The value of num is: " + num);

num += 15;
console.log("The value of num after adding 15 is: " + num);

num -= 5;
console.log("The value of num after subtracting 5 is: " + num);

num *= 3;
console.log("The value of num after multiplying by 3 is: " + num);

num /= 2;
console.log("The value of num after dividing by 2 is: " + num);

//q5

let score1 = 85;
let score2 = 90;

let result = (score1 > 80) &&( score2 > 80 )

console.log("Both scores are greater than 80: " + result);

//q6

let string1 = "apple"
let string2 = "banana"

let resultn = string1< string2;
console.log("Is string1 less than string2? " + resultn);

//q7

let age = 25
let hasDrivingLicense = true

if (age >= 18 && hasDrivingLicense) {
    console.log("You are eligible to drive.");
}
else {
    console.log("You are not eligible to drive.");
}

//q8 

//q9

let str = "123.45";
let numValue = parseFloat(str);
console.log("The numeric value is: " + numValue);

//q10

let boolvalue = true;
let resulto =String(boolvalue) + "is the value";
console.log(resulto);

//q13

let number2 = 10;

if (number2 > 0) {
    console.log("The number is positive.");
}
else if (number2 < 0) {
    console.log("The number is negative.");
}

//q14
let temperature = 30;
if (temperature > 25) {
    console.log("It's hot day.");
}

//q15

let number4 = 5

if (number4 >= 0){
    if (number4 === 0) {
        console.log("The number is zero.");
    }
    else {
        console.log("The number is positive.");
    }
} else {
    console.log("The number is negative.");
}

//q16
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
}
else if (score >= 70) {
    console.log("Grade: C");
}
else if (score >= 60) {
    console.log("Grade: D");
}
 
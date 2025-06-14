let temperature = 22;

if (temperature > 18) {
    console.log("It's too cold, turn on the heater.");
}
else if (temperature =>18 && temperature <= 25){
    console.log("The temperature is comfortable.")

}
else if (temperature >25) {
    console.log("It's too hot, turn on the fan.");
}


let score = 82; 

if (score >= 90) {
  console.log("Grade A.");
} else if (score >= 75 && score <= 89) {
  console.log("Grade B.");
} else if (score >= 50 && score <= 74) {
  console.log("Grade C.");
} else if (score < 50) {
  console.log("Grade D.");
}



let trafficLight = "Yellow"; 

if (trafficLight === "Red") {
  console.log("Stop.");
} else if (trafficLight === "Yellow") {
  console.log("Slow down.");
} else if (trafficLight === "Green") {
  console.log("Go.");
}



let billAmount = 85; // Change this value to test different bills

if (billAmount < 50) {
  console.log("No discount.");
} else if (billAmount >= 50 && billAmount <= 100) {
  let discount = billAmount * 0.10;
  console.log("10% discount applied. You save $" + discount);
} else if (billAmount > 100) {
  let discount = billAmount * 0.20;
  console.log("20% discount applied. You save $" + discount);
}



let time = 9; // Change this value to test different times (e.g., 6, 8, 15, 19)

if (time < 7) {
  console.log("It's too early, sleep a bit more.");
} else if (time >= 7 && time < 10) {
  console.log("Time for breakfast and morning exercise.");
} else if (time >= 10 && time <= 18) {
  console.log("Time to work or study.");
} else if (time > 18) {
  console.log("Relax for the day.");
}


let sum = 0;

for (let i = 1; i <= 15; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log("Sum of numbers divisible by 2 or 5 between 1 and 15:", sum); // → 76



let number = 3; // Change this to any number you want the table for

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}


for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
  
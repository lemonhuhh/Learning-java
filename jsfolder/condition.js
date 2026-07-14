// const a = Number(prompt("Enter your age:"))
// if (a >= 18) {
//     console.log("You are eligible to vote")
// }   
// else{
//     console.log("You are not eligible to vote")
// }

//question no.1

// const b = Number(prompt("Enter any number:"))
// if (b % 2 == 0) {
//     console.log("The number is even")
// }
// else{
//     console.log("The number is odd")
// }

//question no.2 positive or negative
// const c = Number(prompt("Enter any number:"))
// if (c > 0) {
//     console.log("The number is positive")
// }
// else{
//     console.log("The number is negative")
// }

//question no.3 prime number or not
// const d = Number(prompt("Enter any number:"))
// if (d % 2 == 0) {
//     console.log("The number is not prime")
// }
// else{
//     console.log("The number is prime")
// }


//question no.4

// const e = Number(prompt("Enter temperature:"))
// if (e > 30){
//     console.log("The weather is hot")
// }
// else if (e > 15 && e <= 30){
//     console.log("The weather is moderate")
// }
// else{
//     console.log("The weather is cold")
// }


//question no.5
// const temp = Number(prompt("Enter temperature:"))
// if (temp < 20){
//     console.log("You are suffering from hypothermia.")
// }
// else if (temp >= 20 && temp <= 40){
//     console.log("Your body temperature is normal.")
// }
// else if(temp > 40 && temp <= 50){
//     console.log("You are suffering from fever.")
// }
// else{
//     console.log("Invalid temperature.")
// }


//question no.6

// const marks = Number(prompt("Enter your marks:"))
// if (marks >100 || marks < 0){
//     console.log("Invalid marks")
// }
// else if (marks >= 90 && marks <= 100){
//     console.log("Your grade is A")
// }
// else if (marks >= 80 && marks < 90){
//     console.log("Your grade is B")
// }
// else if (marks >= 70 && marks < 80){
//     console.log("Your grade is C")
// }
// else if (marks >= 60 && marks < 70){
//     console.log("Your grade is D")
// }
// else {
//     console.log("Your grade is F")
// }


//question no.7 calculator to perform addition, subtraction, multiplication and division
// let num1 = Number(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = Number(prompt("Enter second number:"));
// if (operator == "+") {
//     console.log(`The result of ${num1} + ${num2} is: ${num1 + num2}`);
// }
// else if (operator == "-") {
//     console.log(`The result of ${num1} - ${num2} is: ${num1 - num2}`);
// }
// else if (operator == "*") {
//     console.log(`The result of ${num1} * ${num2} is: ${num1 * num2}`);
// }
// else if (operator == "/") {
//     console.log(`The result of ${num1} / ${num2} is: ${num1 / num2}`);
// }
// else {
//     console.log("Invalid operator");
// }


//=====================================Loop=======================================


//question no.1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


//question no.2
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


//question no.3
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }



//question no.4 
// let sum = 0;
// for (let i = 0; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);


//question no.5 factorial of a number
// let a = Number(prompt("Enter a number:"));
// let factorial = 1;
// for (let i = 1; i <= a; i++) {
//     factorial *= i;
// }
// console.log(`The factorial of ${a} is: ${factorial}`);



//question no.6 multiplication table of a number
// let num = Number(prompt("Enter a number:"));
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }


//question no.7
// for (let i = 1; i <= 10; i++) 
// {
//     console.log(`${7} x ${i} = ${7 * i}`);
// }


//question no.8 fibonacci series
// let n = parseInt(prompt("Enter the number of terms:"));
// let a = 0, b = 1, nextTerm;
// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     nextTerm = a + b;
//     a = b;
//     b = nextTerm;
// }


//question no.9 printing a pattern
// for (let i = 1; i <= 6; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "* ";
//     }
//     console.log(pattern);
// }



//question no.10
// for (let i = 1; i <= 5; i++) {
//     let p=""
//     for (let j = 1; j <= i; j++) {
//         p=p+j
//     }
//     console.log(p);
// }

//question no.11
// for (let i = 1; i <= 5; i++) {
//     let p=""
//     for (let j = 1; j <= i; j++) {
//         p=p+j
//     }
//     console.log(p);
// }
function greetUser(){
let name = prompt("Enter your name:")
console.log(`Hello, ${name}! Welcome to Javascript Functions.`)
}
// greetUser()


function addNumbers(){
    let a = Number(prompt("Enter first number:"))
    let b = Number(prompt("Enter second number:"))
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
}
// addNumbers()



function checkEvenOdd (){
    let num = Number(prompt("Enter any number:"))
    if (num % 2 == 0){
        console.log("The entered number is Even")
    }
    else{
        console.log("Ther entered number is Odd.")
    }
}
// checkEvenOdd()





function checkEligibility (){
    let num = Number(prompt("Enter any number:"))
    if (num >= 18){
        console.log("You are eligible to vote.")
    }
    else{
        console.log("You are not eligible to vote.")
    }
}
// checkEligibility()




function celsiusToFahrenheit (){
    let num = Number(prompt("Enter temperature in celsius:"))
    console.log(`In fanrenheit: ${(num * 9 / 5) +32}`)
}
// celsiusToFahrenheit()






function findLargest(){
    let num1 = Number(prompt("Enter first number:"))
    let num2 = Number(prompt("Enter second number:"))
    if(num1 > num2){
        console.log(` ${num1} is largest.`)
    }
    else{
        console.log(`${num2} is the largest.`)
    }
}
// findLargest()





function printTable(){
    let a = Number(prompt("Enter your number:"))
    for(i=1; i<20; i++){
        console.log(`${a} x ${i} = ${a*i}`)
    }
}
// printTable()
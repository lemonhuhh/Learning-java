function sumof2num() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"))
    let sum = a + b
    console.log(`The sum of ${a} and ${b} is : ${sum}`)
}
// sumof2num();




function health(){
    let temp = Number(prompt("Enter your body temperature:"))
    if (temp > 98.6)
    {
        console.log("You are suffering from heatstroke.")
    }
    else if (temp < 26)
    {
        console.log("You are suffering from hypothermia.")
    }
    else if (temp >= 27 && temp <= 38)
    {
        console.log("You are healthy.")
    }
    else if (temp >= 38 && temp <= 98)
    {
        console.log("You are suffering from fever.")
    }
    else
    {
        console.log("Invalid temperature.")
    }
}
// health()


function even(){
    for (i = 1; i <=20; i++)

    if (i % 2 == 0)
    {
        console.log(i)
    }
}
// even()



function oneto20(){
    for(j = 1; j <= 20; j++)
    {
        console.log(j)
    }
}
// oneto20()



function sumofnaturalnumber(){
    let sum = 0
    for(k = 0; k <= 10; k++)
    {
        sum = sum + k
    }
    console.log(`The sum of first 10 natural numbers is: ${sum}`)
}
// sumofnaturalnumber()




function multiplicationtable(){
    let a = Number(prompt("Enter first number:"))
    let b = Number(prompt("Enter second number:"))
    for(l = 0; l <= 10; l++){
        
    }
}
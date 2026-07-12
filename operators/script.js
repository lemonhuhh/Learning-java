// console.log("============================================")

// // let a = Number(prompt("Enter your first number:"))
// // let b = Number(prompt("Enter your second number:"))
// // let c = Number(prompt("Enter your third number"))
// // let sum = a+b+c
// // console.log(`The sum of your numbers ${a} , ${b} and ${c} is: ${sum}`)

// // console.log("============================================")


// // let a = Number(prompt("Enter your first number:"))
// // let b = Number(prompt("Enter your second number:"))
// // let c = Number(prompt("Enter your third number"))
// // let mul = a*b*c
// // console.log(`The multiplication of your numbers ${a} , ${b} and ${c} is: ${mul}`)

// // console.log("============================================")


// // let a = Number(prompt("Enter your first number:"))
// // let b = Number(prompt("Enter your second number:"))
// // let c = Number(prompt("Enter your third number"))
// // let sub = a-b
// // let subt = sub-c
// // console.log(`The Subtraction of your numbers ${a} , ${b} and ${c} is: ${subt}`)

// // console.log("============================================")

// // let a = Number(prompt("Enter your first number:"))
// // let b = Number(prompt("Enter your second number:"))
// // let c = Number(prompt("Enter your third number"))
// // let div = a/b/c
// // console.log(`The Divison of your numbers ${a} , ${b} and ${c} is: ${div}`)

// // console.log("============================================")

// // let a = Number(prompt("Enter your first number:"))
// // console.log(`The increement is: ${++a}`)


// // console.log("============================================")

// // let a = Number(prompt("Enter your first number:"))
// // console.log(`The decreement is: ${--a}`)

// const a = 10 
// const b = 5
// const numbertext = "10"

// //1. eual to (==) operator compares the values of two operands and returns true if they are equal, otherwise it returns false. It does not consider the data type of the operands.
// console.log("10 == 10 is: ", a == numbertext)

// console.log("10 === 10 is: ", a === numbertext)

// console.log("10 != 5 is: ", a != b)

// console.log("10 !== 10 is: ", a !== numbertext)

// console.log("10 > 5 is: ", a > b)

// console.log("10 < 5 is: ", a < b)

// console.log("10 >= 5 is: ", a >= b)

// console.log("10 <= 5 is: ", a <= b)

//question no.1
// const age = Number(prompt("Enter your age:"))
// console.log("Your age is: ", age)
// console.log("You are eligible to vote: ", age >= 18)

//question no.2
// const d = 10
// const e = "10"
// console.log("10 === '10' is: ", d === e)

//question no.3
// const correctPassword = "prabin"
// const enteredPassword = prompt("Enter your password:")
// console.log("Password is:" , correctPassword === enteredPassword)

//question no.4
// const isLoggedIn = true
// const isAdmin = false
// const isEditor = true

// //1. logical AND (&&)
// console.log("Is logged in and is admin: ", isLoggedIn && isAdmin)

// //2. logical OR (||)
// console.log("Is logged in or an admin: ", isLoggedIn || isAdmin)

// //3. logical NOT (!)
// console.log("Is the user logged in: ", !isLoggedIn)


//Practice questions
//question no.1
// const age = Number(prompt("Enter your age:"))
// const citizen = true
// console.log("You are eligible to vote: ", age >= 18 && citizen)

// //question no.2
// const student = true
// const senior = false
// console.log("You can get a discount: ", student || senior)

// //question no.3
// const shop = true
// console.log("shop is : ", !shop)

//question no.4
// const access = true
// console.log("Can the user access the dashboard: ", !access)

//question no.5
// const isLoggedIn = true
// const isAdmin = false
// const isEditor = true
// console.log("Is the user logged in and is an admin: ", isLoggedIn && isAdmin)
// console.log("Is the user logged in or is an editor: ", isLoggedIn || isEditor)


const a = Number(prompt("Enter your age:"))
if (a >= 18) {
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}
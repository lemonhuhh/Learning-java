// const product = [
//     {
//         id:1,
//         name:"Laptop",
//         colour:["Black", "Silver", "White"],
//         actualprice:50000,
//         discountprice:40000,
//     },
//     {
//         id:2,
//         name:"Smartphone",
//         colour:["Black", "Orange", "Navy"],
//         type:["Screen touch", "Keypad"],
//         actualprice:50000,
//         discountprice:45000,
//     },
//     {
//         id:2,
//         name:"Mobile",
//         colour:["Black", "Orange", "Navy"],
//         type:["Screen touch", "Keypad"],
//         actualprice:50000,
//         discountprice:45000,
//     }
// ]
// console.log(product)
// for(let i = 0; i < product.length; i++){
//     console.log("Product Name:", product[i].name)
// }




// const fruitdetails = [
//     { 
//         name: "Apple",
//         actualprice: 250,
//         discountprice: 200,
//         instock: true,
//         description: "Fresh and sweet red apples" 
//     },
//     { 
//         name: "Banana",
//         actualprice: 120,
//         discountprice: 100,
//         instock: true,
//         description: "Ripe yellow bananas" 
//     },
//     {
//         name: "Mango",
//         actualprice: 300,
//         discountprice: 250,
//         instock: false,
//         description: "Juicy seasonal mangoes" 
//     },
//     { 
//         name: "Orange",
//         actualprice: 180,
//         discountprice: 150,
//         instock: true,
//         description: "Vitamin C rich oranges" 
//     },
//     { 
//         name: "Grapes",
//         actualprice: 220,
//         discountprice: 190,
//         instock: true,
//         description: "Seedless green grapes" 
//     }
// ];

// console.log("Fruit details:");
// for (let i = 0; i < fruitdetails.length; i++) {
//     console.log("Name:", fruitdetails[i].name);
//     console.log("Actual Price:", fruitdetails[i].actualprice);
//     console.log("Discounted Price:", fruitdetails[i].discountprice);
//     console.log("In Stock:", fruitdetails[i].instock);
//     console.log("Description:", fruitdetails[i].description);
// }

// const productdetails = [
//     { name: "Laptop", actualprice: 80000, discountprice: 72000, instock: true, description: "15-inch laptop with 16GB RAM" },
//     { name: "Smartphone", actualprice: 45000, discountprice: 40000, instock: true, description: "5G smartphone with 128GB storage" },
//     { name: "Headphones", actualprice: 6000, discountprice: 5000, instock: false, description: "Wireless noise-cancelling headphones" },
//     { name: "Keyboard", actualprice: 3500, discountprice: 3000, instock: true, description: "Mechanical backlit keyboard" },
//     { name: "Mouse", actualprice: 2500, discountprice: 2000, instock: true, description: "Wireless optical mouse" }
// ];

// console.log("Product details:");
// for (let i = 0; i < productdetails.length; i++) {
//     console.log("Name:", productdetails[i].name);
//     console.log("Actual Price:", productdetails[i].actualprice);
//     console.log("Discounted Price:", productdetails[i].discountprice);
//     console.log("In Stock:", productdetails[i].instock);
//     console.log("Description:", productdetails[i].description);
// }

// const listoffurniture = [
//     { name: "Sofa", actualprice: 50000, discountprice: 45000, instock: true, description: "Comfortable three-seater sofa" },
//     { name: "Dining Table", actualprice: 30000, discountprice: 27000, instock: true, description: "Wooden table for six people" },
//     { name: "Bed", actualprice: 40000, discountprice: 36000, instock: false, description: "Queen-size wooden bed" },
//     { name: "Wardrobe", actualprice: 35000, discountprice: 31000, instock: true, description: "Four-door storage wardrobe" },
//     { name: "Study Chair", actualprice: 8000, discountprice: 7000, instock: true, description: "Adjustable ergonomic chair" }
// ];

// console.log("Furniture details:");
// for (let i = 0; i < listoffurniture.length; i++) {
//     console.log("Name:", listoffurniture[i].name);
//     console.log("Actual Price:", listoffurniture[i].actualprice);
//     console.log("Discounted Price:", listoffurniture[i].discountprice);
//     console.log("In Stock:", listoffurniture[i].instock);
//     console.log("Description:", listoffurniture[i].description);
// }








const listoffruits=()=>{
const fruitdetails = [
    { 
        name: "Apple",
        actualprice: 250,
        discountprice: 200,
        instock: true,
        description: "Fresh and sweet red apples" 
    },
    { 
        name: "Banana",
        actualprice: 120,
        discountprice: 100,
        instock: true,
        description: "Ripe yellow bananas" 
    },
    {
        name: "Mango",
        actualprice: 300,
        discountprice: 250,
        instock: false,
        description: "Juicy seasonal mangoes" 
    },
    { 
        name: "Orange",
        actualprice: 180,
        discountprice: 150,
        instock: true,
        description: "Vitamin C rich oranges" 
    },
    { 
        name: "Grapes",
        actualprice: 220,
        discountprice: 190,
        instock: true,
        description: "Seedless green grapes" 
    }
];


console.log("The list of fruits are:")

fruitdetails.forEach((fruits) =>{
    console.log("==================================")
    console.log("Name:", fruits.name)
    console.log("Actualprice:", fruits.actualprice)
    console.log("Discount price:", fruits.discountprice)
    console.log("Instock:", fruits.instock)
    console.log("Description:", fruits.description)
    console.log("==================================")
})

}


listoffruits()






const listofstudents =()=>{
    const studentdetails = [{
        id: 1,
        name: "Michael Jackson",
        age: 16,
        rollno:1,
        class: 10,
        section: "A",
        address: "Kathmandu",
    },
    {
        id: 2,
        name: "Ethan",
        age: 17,
        rollno:2,
        class: 10,
        section: "B",
        address: "Kathmandu",
    },
    {
        id: 3,
        name: "John",
        age: 12,
        rollno: 3,
        class: 10,
        section: "B",
        address: "Lalitpur",
    },
    {
        id: 4,
        name: "Hirasaki",
        age: 11,
        rollno: 4,
        class: 10,
        section: "B",
        address: "Kathmandu",
    },
    {
        id: 5,
        name: "Bibas",
        age: 26,
        rollno: 10,
        class: 10,
        section: "B",
        address: "Bhaktapur",
    }
]

console.log("List of students are:")
studentdetails.forEach((students)=>{
    console.log("=================================")
    console.log("Id:", students.id)
    console.log("Name:", students.name)
    console.log("Age:", students.age)
    console.log("Roll NO.:", students.rollno)
    console.log("Class:", students.class)
    console.log("Section:", students.section)
    console.log("Address:", students.address)
    console.log("=================================")
})
}

listofstudents()






const listofbooks=()=>{
    const bookdetails = [{
        id: 1,
        title: "Muna Madan",
        author: "Laxmi Prasad Devkota",
        genre: "Khanda Kabya",
        yeartype: "AD",
        publicationyear: 1990,
        discription: "Deeply in love with eachother."
    },
    {
        id: 2,
        title: "Muna Madan",
        author: "Laxmi Prasad Devkota",
        genre: "Khanda Kabya",
        yeartype: "AD",
        publicationyear: 1990,
        discription: "Deeply in love with eachother."
    }
]
console.log("The list of book are:")
bookdetails.forEach((books)=>
{
    console.log("Title:", books.title)
}
)
}
listofbooks()
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






const listofbooks = () => {
    const bookdetails = [
        {
            title: "Muna Madan",
            author: "Laxmi Prasad Devkota",
            price: 350,
            genre: "Epic Poem",
            publicationyear: 1936,
            description: "A classic Nepali love story."
        },
        {
            title: "Palpasa Cafe",
            author: "Narayan Wagle",
            price: 450,
            genre: "Novel",
            publicationyear: 2005,
            description: "A story set during Nepal's civil conflict."
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: 600,
            genre: "Fiction",
            publicationyear: 1988,
            description: "A shepherd follows his dream to find treasure."
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J. K. Rowling",
            price: 750,
            genre: "Fantasy",
            publicationyear: 1997,
            description: "A young wizard begins his magical education."
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            price: 900,
            genre: "Self-help",
            publicationyear: 2018,
            description: "A guide to building better habits."
        }
    ];

    console.log("The list of books are:");
    bookdetails.forEach((book) => {
        console.log("==================================");
        console.log("Title:", book.title);
        console.log("Author:", book.author);
        console.log("Price:", book.price);
        console.log("Genre:", book.genre);
        console.log("Publication year:", book.publicationyear);
        console.log("Description:", book.description);
    });
};

const listofmovies = () => {
    const moviedetails = [
        {
            title: "Inception",
            director: "Christopher Nolan",
            releaseyear: 2010,
            genre: "Science Fiction",
            rating: 8.8,
            description: "A thief enters dreams to steal secrets."
        },
        {
            title: "Interstellar",
            director: "Christopher Nolan",
            releaseyear: 2014,
            genre: "Science Fiction",
            rating: 8.7,
            description: "Explorers travel through a wormhole to save humanity."
        },
        {
            title: "Spirited Away",
            director: "Hayao Miyazaki",
            releaseyear: 2001,
            genre: "Animation",
            rating: 8.6,
            description: "A girl enters a mysterious world of spirits."
        },
        {
            title: "Parasite",
            director: "Bong Joon-ho",
            releaseyear: 2019,
            genre: "Thriller",
            rating: 8.5,
            description: "Two families become entangled across class lines."
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            releaseyear: 2008,
            genre: "Action",
            rating: 9.0,
            description: "Batman faces the Joker in Gotham City."
        }
    ];

    console.log("The list of movies are:");
    moviedetails.forEach((movie) => {
        console.log("==================================");
        console.log("Title:", movie.title);
        console.log("Director:", movie.director);
        console.log("Release year:", movie.releaseyear);
        console.log("Genre:", movie.genre);
        console.log("Rating:", movie.rating);
        console.log("Description:", movie.description);
    });
};

const listofcars = () => {
    const cardetails = [
        {
            make: "Toyota",
            model: "Corolla",
            year: 2024,
            price: 4200000,
            color: "White",
            description: "A reliable compact sedan."
        },
        {
            make: "Honda",
            model: "Civic",
            year: 2023,
            price: 5100000,
            color: "Black",
            description: "A sporty and efficient sedan."
        },
        {
            make: "Tesla",
            model: "Model 3",
            year: 2024,
            price: 6500000,
            color: "Red",
            description: "An electric car with modern technology."
        },
        {
            make: "Ford",
            model: "Mustang",
            year: 2022,
            price: 8500000,
            color: "Blue",
            description: "A powerful American sports car."
        },
        {
            make: "Hyundai",
            model: "Tucson",
            year: 2024,
            price: 6800000,
            color: "Silver",
            description: "A comfortable family SUV."
        }
    ];

    console.log("The list of cars are:");
    cardetails.forEach((car) => {
        console.log("==================================");
        console.log("Make:", car.make);
        console.log("Model:", car.model);
        console.log("Year:", car.year);
        console.log("Price:", car.price);
        console.log("Color:", car.color);
        console.log("Description:", car.description);
    });
};

const listofPms = () => {
    const pmdetails = [
        {
            name: "K. P. Sharma Oli",
            age: 74,
            electedyear: 2024,
            party: "CPN (UML)",
            term: "Fourth term",
            description: "Prime Minister of Nepal."
        },
        {
            name: "Narendra Modi",
            age: 75,
            electedyear: 2024,
            party: "Bharatiya Janata Party",
            term: "Third term",
            description: "Prime Minister of India."
        },
        {
            name: "Keir Starmer",
            age: 63,
            electedyear: 2024,
            party: "Labour Party",
            term: "First term",
            description: "Prime Minister of the United Kingdom."
        },
        {
            name: "Anthony Albanese",
            age: 63,
            electedyear: 2022,
            party: "Australian Labor Party",
            term: "First term",
            description: "Prime Minister of Australia."
        },
        {
            name: "Mark Carney",
            age: 61,
            electedyear: 2025,
            party: "Liberal Party",
            term: "First term",
            description: "Prime Minister of Canada."
        }
    ];

    console.log("The list of prime ministers are:");
    pmdetails.map((pm) => {
        console.log("==================================");
        console.log("Name:", pm.name);
        console.log("Age:", pm.age);
        console.log("Elected year:", pm.electedyear);
        console.log("Party:", pm.party);
        console.log("Term:", pm.term);
        console.log("Description:", pm.description);
    });
};

const ListofCountries = () => {
    const countrydetails = [
        {
            name: "Nepal",
            capital: "Kathmandu",
            population: "30 million",
            area: "147,516 km²",
            currency: "Nepalese Rupee",
            description: "A Himalayan country known for Mount Everest."
        },
        {
            name: "Japan",
            capital: "Tokyo",
            population: "123 million",
            area: "377,975 km²",
            currency: "Japanese Yen",
            description: "An island nation in East Asia."
        },
        {
            name: "Australia",
            capital: "Canberra",
            population: "27 million",
            area: "7,692,024 km²",
            currency: "Australian Dollar",
            description: "A country and continent in the Southern Hemisphere."
        },
        {
            name: "Canada",
            capital: "Ottawa",
            population: "41 million",
            area: "9,984,670 km²",
            currency: "Canadian Dollar",
            description: "The second-largest country by area."
        },
        {
            name: "Brazil",
            capital: "Brasília",
            population: "212 million",
            area: "8,515,767 km²",
            currency: "Brazilian Real",
            description: "The largest country in South America."
        }
    ];

    console.log("The list of countries are:");
    countrydetails.map((country) => {
        console.log("==================================");
        console.log("Name:", country.name);
        console.log("Capital:", country.capital);
        console.log("Population:", country.population);
        console.log("Area:", country.area);
        console.log("Currency:", country.currency);
        console.log("Description:", country.description);
    });
};

const listofendangeredspecies = () => {
    const speciesdetails = [
        {
            name: "Bengal Tiger",
            scientificname: "Panthera tigris tigris",
            habitat: "Forests and grasslands",
            population: "About 5,500",
            conservationstatus: "Endangered",
            description: "A large striped cat native to Asia."
        },
        {
            name: "Red Panda",
            scientificname: "Ailurus fulgens",
            habitat: "Himalayan forests",
            population: "Less than 10,000",
            conservationstatus: "Endangered",
            description: "A small tree-dwelling mammal."
        },
        {
            name: "Asian Elephant",
            scientificname: "Elephas maximus",
            habitat: "Tropical forests",
            population: "About 50,000",
            conservationstatus: "Endangered",
            description: "The largest land animal in Asia."
        },
        {
            name: "Black Rhino",
            scientificname: "Diceros bicornis",
            habitat: "Savannas and grasslands",
            population: "About 6,500",
            conservationstatus: "Critically Endangered",
            description: "A rhinoceros with two horns."
        },
        {
            name: "Hawksbill Turtle",
            scientificname: "Eretmochelys imbricata",
            habitat: "Coral reefs",
            population: "Declining",
            conservationstatus: "Critically Endangered",
            description: "A sea turtle with a narrow pointed beak."
        }
    ];

    console.log("The list of endangered species are:");
    speciesdetails.map((species) => {
        console.log("==================================");
        console.log("Name:", species.name);
        console.log("Scientific name:", species.scientificname);
        console.log("Habitat:", species.habitat);
        console.log("Population:", species.population);
        console.log("Conservation status:", species.conservationstatus);
        console.log("Description:", species.description);
    });
};

const listofplanets = () => {
    const planetdetails = [
        {
            name: "Mercury",
            diameter: "4,879 km",
            mass: "3.30 × 10²³ kg",
            numberofmoons: 0,
            description: "The smallest and closest planet to the Sun."
        },
        {
            name: "Venus",
            diameter: "12,104 km",
            mass: "4.87 × 10²⁴ kg",
            numberofmoons: 0,
            description: "The hottest planet in the solar system."
        },
        {
            name: "Earth",
            diameter: "12,742 km",
            mass: "5.97 × 10²⁴ kg",
            numberofmoons: 1,
            description: "Our home planet and the only known world with life."
        },
        {
            name: "Mars",
            diameter: "6,779 km",
            mass: "6.42 × 10²³ kg",
            numberofmoons: 2,
            description: "The red planet."
        },
        {
            name: "Jupiter",
            diameter: "139,820 km",
            mass: "1.90 × 10²⁷ kg",
            numberofmoons: 95,
            description: "The largest planet in the solar system."
        }
    ];

    console.log("The list of planets are:");
    planetdetails.map((planet) => {
        console.log("==================================");
        console.log("Name:", planet.name);
        console.log("Diameter:", planet.diameter);
        console.log("Mass:", planet.mass);
        console.log("Number of moons:", planet.numberofmoons);
        console.log("Description:", planet.description);
    });
};

listofbooks();
listofmovies();
listofcars();
listofPms();
ListofCountries();
listofendangeredspecies();
listofplanets();

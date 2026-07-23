// const prices = [100, 200,300 ,400, 500, 6000, 700, 859, 4000, 8944, 445, 5988, 5500, 8999, 9000]

// const filteredprices = prices.filter((price)=>
// {
//     return price > 500 
// })
// console.log(filteredprices)

const category=()=>{
    const products =
    [
        {
            id: 1,
            name: "Jeans",
            actualprice: 3000,
            discontprice: 1500,
            instock: true,
            color:["Blue", "black", "white"],
            category: "Men",
        },
        {
            id: 2,
            name: "T-Shirt",
            actualprice: 1800,
            discontprice: 1200,
            instock: true,
            color: ["Black", "White", "Grey"],
            category: "Men",
        },
        {
            id: 3,
            name: "Dress",
            actualprice: 3500,
            discontprice: 2500,
            instock: true,
            color: ["Red", "Pink", "Blue"],
            category: "Women",
        },
        {
            id: 4,
            name: "Handbag",
            actualprice: 2800,
            discontprice: 2000,
            instock: false,
            color: ["Brown", "Black", "Beige"],
            category: "Women",
        }
    ]

    const categories = prompt("enter the category(Men/Women):")
    const filteredproduct = products.filter((product)=>
    {
        return product.category === categories
    })
    filteredproduct.forEach((prod)=>{
            console.log("Id:", prod.id)
            console.log("Name:",prod.name)
            console.log("Actualprice:",prod.actualprice)
            console.log("Discount price:", prod.discontprice)
            console.log("Instock", prod.instock)
            console.log("Colour:", prod.color)
            console.log("Category:", prod.category)
            console.log("----------------------------------------")
        })
}
category()

const listofcountries = () => {
    const countries =
    [
        {
            id: 1,
            name: "Nepal",
            capital: "Kathmandu",
            continent: "Asia",
            population: "30 million",
            currency: "Nepalese Rupee"
        },
        {
            id: 2,
            name: "Japan",
            capital: "Tokyo",
            continent: "Asia",
            population: "123 million",
            currency: "Japanese Yen"
        },
        {
            id: 3,
            name: "Canada",
            capital: "Ottawa",
            continent: "North America",
            population: "41 million",
            currency: "Canadian Dollar"
        },
        {
            id: 4,
            name: "Brazil",
            capital: "Brasilia",
            continent: "South America",
            population: "212 million",
            currency: "Brazilian Real"
        }
    ]

    const filteredcountries = countries.filter((country) =>
    {
        return country.continent === "Asia"
    })

    filteredcountries.forEach((country) => {
        console.log("Id:", country.id)
        console.log("Name:", country.name)
        console.log("Capital:", country.capital)
        console.log("Continent:", country.continent)
        console.log("Population:", country.population)
        console.log("Currency:", country.currency)
        console.log("----------------------------------------")
    })
}
listofcountries()

const listofmovies = () => {
    const movies =
    [
        {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            genre: "Science Fiction",
            releaseyear: 2010,
            rating: 8.8
        },
        {
            id: 2,
            title: "The Dark Knight",
            director: "Christopher Nolan",
            genre: "Action",
            releaseyear: 2008,
            rating: 9.0
        },
        {
            id: 3,
            title: "Spirited Away",
            director: "Hayao Miyazaki",
            genre: "Animation",
            releaseyear: 2001,
            rating: 8.6
        },
        {
            id: 4,
            title: "John Wick",
            director: "Chad Stahelski",
            genre: "Action",
            releaseyear: 2014,
            rating: 7.4
        }
    ]

    const filteredmovies = movies.filter((movie) =>
    {
        return movie.genre === "Action"
    })

    filteredmovies.forEach((movie) => {
        console.log("Id:", movie.id)
        console.log("Title:", movie.title)
        console.log("Director:", movie.director)
        console.log("Genre:", movie.genre)
        console.log("Release year:", movie.releaseyear)
        console.log("Rating:", movie.rating)
        console.log("----------------------------------------")
    })
}
listofmovies()

const listofcars = () => {
    const cars =
    [
        {
            id: 1,
            brand: "Toyota",
            model: "Corolla",
            year: 2024,
            fueltype: "Petrol",
            price: 4200000
        },
        {
            id: 2,
            brand: "Tesla",
            model: "Model 3",
            year: 2024,
            fueltype: "Electric",
            price: 6500000
        },
        {
            id: 3,
            brand: "Hyundai",
            model: "Kona Electric",
            year: 2023,
            fueltype: "Electric",
            price: 5800000
        },
        {
            id: 4,
            brand: "Honda",
            model: "Civic",
            year: 2023,
            fueltype: "Petrol",
            price: 5100000
        }
    ]

    const filteredcars = cars.filter((car) =>
    {
        return car.fueltype === "Electric"
    })

    filteredcars.forEach((car) => {
        console.log("Id:", car.id)
        console.log("Brand:", car.brand)
        console.log("Model:", car.model)
        console.log("Year:", car.year)
        console.log("Fuel type:", car.fueltype)
        console.log("Price:", car.price)
        console.log("----------------------------------------")
    })
}
listofcars()









//MENU  TOGGLE FOR HAMBURGER MENU
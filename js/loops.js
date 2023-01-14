// Looping through array of objects
let cars = [
    {   make: "honda",
        model: "civic",
        year: "2014",
        color: "blue"
    },
    {
        make: "toyota",
        model: "camry",
        year: "2000",
        color: "red"
    },
    {
        make: "ford",
        model: "mustang",
        year: "2005",
        color: "black"
    },
]
for (let i =0; i < cars.length; i++){
    if(cars[i].make !== "ford"){
        console.log(cars[i].make)
    }
}

let cart = [
    {
        name: "Shirts",
        price: 20,
        quantity: 2
    },
    { name: "Pants", price: 30, quantity: 1},
    { name: "Socks", price: 5, quantity: 4}
];

function calculateTotalCost() {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++){
        totalCost += cart[i].price * cart[i].quantity;
    }
    return totalCost;
}

console.log(calculateTotalCost())

// 1. Write a JavaScript program that accept two integers and display the larger.
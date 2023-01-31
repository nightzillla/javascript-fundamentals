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

console.log(calculateTotalCost());

// Get the sum of two arrays
let arr1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
}
for (let i = 0; i < arr2.length; i++){
    sum2 += arr2[i];
}
console.log(sum1 + sum2);


let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let totalArray = 0;

for(let i = 0; i < arr_1.length; i++){
    for(let j = 0; i < arr_2.length; i++){
        totalArray += arr_1[i] + arr_2[j];
    }
}
console.log("the total loop"+ "=" + totalArray);

// looping maps

let firstLoop = [1, 4, 5, 6, 54, 7];
let secondLoop = [1, 4,5,65,89, 90];
let totalNumber = 0;

for(let i = 0;  i < firstLoop.length; i++){
    for(let j = 0; j < secondLoop.length; i++){
        totalNumber += firstLoop[i] + secondLoop[i];
    }
}
console.log("This is the total number " + totalNumber)













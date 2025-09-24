// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects 
// (each with a 'price' property) and returns the total sum of all prices.

function sumPrices(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++){
       sum += products[i].price
  }
    return sum;
}

console.log(sumPrices([{ price: 10 }, { price: 20 }, { price: 30 }])) // 60


//For example ->
// function sum(array){
//   let sum = 0;
//   for (let i = 0; i < Array.length; i++){
//     sum +=array[i].price
//   }

//   return sum;
// }

// return products.reduce((total, product) => total + product.price, 0)
// Exercise 1: Write a function named 'sumPrices' that takes an array of product objects 
// (each with a 'price' property) and returns the total sum of all prices.

function sumPrices(products) {
  //計算の合計を入れるためのvariable
  let sum = 0;
  // ループfor文で、配列内のオブジェクトを一つず取り出して0+数字
  for (let i = 0; i < products.length; i++){
       sum += products[i].price
    }
    // returnで合計を返す
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
// Exercise 2: Write a function named 'filterByCategory' that takes an array of product objects and a category string, and returns a new array with products that belong to the given category.

function filterByCategory(products, category) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === category){
      result.push(products[i]);
    }
    return result;
  }
}

console.log(filterByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }], 'Fruit')) // [{ name: 'Apple', category: 'Fruit' }]


  // return products.filter(product => product.category === category)

  
  // const result = []; // array
  // for (let i = 0; i < products.length; i++) {
  //   result = products[i].category === category;
  //   if (result){
  //     return [products[i]];
  //   }
  // }
  // // const result = [];
  // for (let i = 0; i < products.length; i++) {
  //   if (products[i].category === category){
  //     return [products[i]];
  //   }
  // }
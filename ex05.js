// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  // your code here
  // return products.reduce((group, product) => {
  //   const category = product.category;
  //   if (!group[category]) {
  //     group[category] = [];
  //   }
  //   group[category].push(product);
  //   return group;
  // }, {});

  //another wat (for loop)
  const group = {};
  for (const product of products) {
    const category = product.category;
    if (!group[category]) {
      group[category] = [];
    }
    group[category].push(product);
  }
  return group;
}

console.log(groupByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }])) // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }
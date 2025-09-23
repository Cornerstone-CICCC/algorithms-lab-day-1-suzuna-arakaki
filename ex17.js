// Exercise 17: Write a function named 'mostFrequent' that takes an array of strings and returns the string that appears the most frequently.

function mostFrequent(arr) {
  // your code here
  
  // const counts = {};
  // return arr.reduce((counts, str) => {
  //   counts[str] = (counts[str] || 0) +1;
  //   return counts;
  // }, {});
  
  // const stored = Object.entries(counts).sort((a, b) => a - b);
  // return stored[0];
}

console.log(mostFrequent(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])) // 'apple'
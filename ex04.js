// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  // your code here
  return arr.reduce((counts, str) => {
    counts[str] = (counts[str] || 0) +1;
    return counts;
  }, {})
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }
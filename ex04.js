// Exercise 4: Write a function named 'countOccurrences' that takes an array of strings and returns an object with the count of each string in the array.

function countOccurrences(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i++){
    const str = arr[i];
    if (counts[str] !== undefined){
      // Already exists string, increment its count +1
      counts[str] += 1;
      //New string, set its count to be 1!
    } else {
      counts[str] = 1;
    }
  }
  return counts;
}

console.log(countOccurrences(['apple', 'banana', 'apple'])) // { apple: 2, banana: 1 }

// return arr.reduce((counts, str) => {
//     counts[str] = (counts[str] || 0) +1;
//     return counts;
//   }, {})
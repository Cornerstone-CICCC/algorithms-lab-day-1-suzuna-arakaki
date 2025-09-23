// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  // your code here
  const sum = arr.reduce((total, num) => total + num, 0);
  const average = sum / arr.length;
  return average;
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30
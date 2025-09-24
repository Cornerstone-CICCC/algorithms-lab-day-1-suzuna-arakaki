// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') 
// and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  const dateObject = new Date(dateStr.replace(/-/g, '/'));
  const englishDate = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  return englishDate;
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'
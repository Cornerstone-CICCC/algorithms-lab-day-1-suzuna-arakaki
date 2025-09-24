// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  //文字列をスペースごとに取り出して配列にす
  //配列を逆に並べる
  //配列を繋げて文字列にする、スペースありで
  const result = text.split(' ').reverse().join(" ");
  return result;
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'


  // return text.split(/\s+/).reverse().join(' ');
/* Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567" */

function LongestWord(sen) {

  let baseWordArr = sen.match(/\w+/g);
  return baseWordArr.reduce((prev, curr) => prev.length >= curr.length ? prev : curr, "");

}

console.log(LongestWord("Hello world123 567")); // -> world123
console.log(LongestWord("fun&!! time")); // -> time
console.log(LongestWord("I love dogs")); // -> love
/* 
Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
*/

const charCount = (char, str) => {
    return str.match(new RegExp(char, 'g')).length;
}


console.log(charCount("a", "edabit")) // ➞ 1

console.log(charCount("c", "Chamber of secrets")) // ➞ 1

console.log(charCount("b", "big fat bubble")) // ➞ 4
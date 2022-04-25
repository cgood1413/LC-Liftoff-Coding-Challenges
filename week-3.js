/* Reverse a string */

// Using methods built into JS:
// function FirstReverse(str) {
//   return str.split("").reverse().join("");
// }

// Not using JS methods: 
function firstReverse(str){
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--){
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(firstReverse('This is a test'));
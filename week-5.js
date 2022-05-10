/* Create a function that takes a number from 1 to 1000 as an argument. Add up all the numbers from 1 to the number you passed to the function. */

function addUp(n, total = 1){
    if (n === 1){
        return total;
    }
    return addUp(n - 1, total += n);
}

console.log(addUp(1)) // -> 1
console.log(addUp(4)) // -> 10
console.log(addUp(13)) // -> 91
console.log(addUp(600)) // -> 180300
console.log(addUp(1000)) // -> 500500
/* Return min and max numbers in an array */

// Using Math methods and the spread operator:
// function minMax(arr) {
// 	return [Math.min(...arr), Math.max(...arr)];
// }

// Using pure JS
function minMax(arr){
    let min = Infinity;
    let max = -Infinity;
    for(let num of arr){
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5])) // ➞ [1, 5]

console.log(minMax([2334454, 5])) // ➞ [5, 2334454]

console.log(minMax([1])) // ➞ [1, 1]
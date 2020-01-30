//Given an integer array A of size N, find sum of elements in it.

function sumOfArrayElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumOfArrayElements([3, 2, 1]));
console.log(sumOfArrayElements([1, 2, 3, 4]));
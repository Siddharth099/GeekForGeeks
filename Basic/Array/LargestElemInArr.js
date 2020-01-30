function largestElemInArr(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(largestElemInArr([10, 324, 45, 90, 9808]));
console.log(largestElemInArr([1, 2, 0, 3, 2, 4, 5]));
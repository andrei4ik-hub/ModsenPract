function sumSpecificElements(arr) {
    return arr.filter(num => num > 0 && num < 10)
              .reduce((acc, num) => acc + num, 0);
}


console.log(sumSpecificElements([1, 3, 5, 11, -2, 9, 12])); // Output: 18
console.log(sumSpecificElements([0, 15, -1, 2, 8, 10]));    // Output: 10
console.log(sumSpecificElements([7, 14, 3, -5, 4]));        // Output: 14

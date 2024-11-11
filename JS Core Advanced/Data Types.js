function countDigits(num) {
    if (typeof num !== 'number') {
        return "Пожалуйста, введите число.";
    }
    return Math.abs(num).toString().length;
}


console.log(countDigits(12345));  // Output: 5
console.log(countDigits(-9876));  // Output: 4
console.log(countDigits(100));    // Output: 3
console.log(countDigits(0));      // Output: 1

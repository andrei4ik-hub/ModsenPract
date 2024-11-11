"use strict";

function hasDuplicates(arr) {
    let seen = new Set();
    for (let value of arr) {
        if (seen.has(value)) {
            return true;
        }
        seen.add(value);
    }
    return false;
}


console.log(hasDuplicates([1, 2, 3, 4]));    // false
console.log(hasDuplicates([1, 2, 3, 4, 2])); // true
console.log(hasDuplicates(['a', 'b', 'c', 'a'])); // true
console.log(hasDuplicates(['a', 'b', 'c', 'd'])); // false

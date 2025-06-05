"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = isPalindrome;
function isPalindrome(x) {
    const strArrayReversed = x.split("").reverse();
    return x.toLowerCase() === strArrayReversed.join("").toLowerCase();
}
console.log(isPalindrome("ovo"));
console.log(isPalindrome("mats"));
console.log(isPalindrome("ovO"));

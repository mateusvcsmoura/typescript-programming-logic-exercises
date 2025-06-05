"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareSum = squareSum;
function squareSum(numbers) {
    return numbers.reduce((acc, num) => acc += num ** 2, 0);
}
console.log(squareSum([1, 2, 2]));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = number;
function number(array) {
    return array.map((n, i) => `${i + 1}: ${n}`);
}
console.log(number(["a", "b"]));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleChar = doubleChar;
function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}
console.log(doubleChar("abc"));

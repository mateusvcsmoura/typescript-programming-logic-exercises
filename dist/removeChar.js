"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeChar = removeChar;
function removeChar(str) {
    const strArray = str.split("");
    strArray.shift();
    strArray.pop();
    return strArray.join("");
}
console.log(removeChar("Mateus"));

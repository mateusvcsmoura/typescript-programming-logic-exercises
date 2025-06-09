"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUpperCase = isUpperCase;
function isUpperCase(str) {
    const strArr = str.split("").filter(letter => letter === letter.toUpperCase()).length;
    return str.length === strArr;
    //return str === str.toUpperCase(); no fun
}
console.log(isUpperCase("c"));
console.log(isUpperCase("cC"));
console.log(isUpperCase("CCC"));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = spinWords;
function spinWords(words) {
    const wordsArray = words.split(" ").map((word) => {
        if (word.length > 4) {
            return word.split("").reverse().join("");
        }
        else {
            return word;
        }
    }).join(" ");
    return wordsArray;
}
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));

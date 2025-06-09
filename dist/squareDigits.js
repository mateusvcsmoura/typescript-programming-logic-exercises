"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static squareDigits(num) {
        let result = "";
        const numArray = num.toString().split("");
        numArray.map((num) => {
            result += `${Number(num) ** 2}`;
        });
        return Number(result);
    }
}
exports.Kata = Kata;
console.log(Kata.squareDigits(9119));

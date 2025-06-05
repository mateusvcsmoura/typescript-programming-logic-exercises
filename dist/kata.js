"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static dnaStrand(dna) {
        const complements = {
            "A": "T",
            "T": "A",
            "C": "G",
            "G": "C"
        };
        const dnaArray = dna.split("");
        dnaArray.map(function (letter, index) {
            if (letter === "A" || letter === "T" || letter === "C" || letter === "G") {
                dnaArray[index] = complements[letter];
            }
        });
        return dnaArray.join("");
    }
}
exports.Kata = Kata;
console.log(Kata.dnaStrand("AAAA"));

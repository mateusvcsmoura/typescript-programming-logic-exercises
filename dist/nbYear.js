"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbYear = void 0;
const nbYear = (p0, percent, aug, p) => {
    let currentPeople = p0;
    let percentage = percent / 100;
    let yearCounter = 0;
    while (currentPeople < p) {
        currentPeople += currentPeople * percentage + aug;
        currentPeople = Math.floor(currentPeople);
        yearCounter++;
    }
    return yearCounter;
};
exports.nbYear = nbYear;
// p0 = quantidade inicial de pessoas
// percent = quantidade em % de increase (round)
// aug = pessoas que aumentam automaticamente por ano
// p = meta de pessoas
console.log((0, exports.nbYear)(1500, 5, 100, 5000)); // 15
console.log((0, exports.nbYear)(1500000, 2.5, 10000, 2000000)); // 10
console.log((0, exports.nbYear)(1500000, 0.25, -1000, 2000000)); // 151
console.log((0, exports.nbYear)(1000, 2, 50, 1200)); // resultado esperado: 3
console.log((0, exports.nbYear)(1500, 5, 100, 5000)); // resultado esperado: 15
console.log((0, exports.nbYear)(1500000, 2.5, 10000, 2000000)); // resultado esperado: 10
console.log((0, exports.nbYear)(1000, 2, 0, 1200)); // resultado esperado: 10
console.log((0, exports.nbYear)(999, 1, 1, 1000)); // resultado esperado: 1
console.log((0, exports.nbYear)(500, 10, 0, 1000)); // resultado esperado: 8
console.log((0, exports.nbYear)(1000, 0, 50, 1200)); // resultado esperado: 4
console.log((0, exports.nbYear)(1000, 2.0, 50, 1214)); // resultado esperado: 4

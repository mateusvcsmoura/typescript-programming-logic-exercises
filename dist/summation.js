"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summation = void 0;
const summation = (num) => {
    let acc = 0;
    for (let i = 0; i <= num; i++) {
        acc += i;
    }
    return acc;
};
exports.summation = summation;
console.log((0, exports.summation)(8));

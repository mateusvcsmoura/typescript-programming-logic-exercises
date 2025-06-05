"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = countSheep;
function countSheep(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += `${i + 1} sheep...`;
    }
    return str;
}

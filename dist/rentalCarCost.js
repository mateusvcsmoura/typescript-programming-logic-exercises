"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalCarCost = rentalCarCost;
function rentalCarCost(d) {
    const value = d * 40;
    const discount = d >= 7 ? 50 : d >= 3 ? 20 : 0;
    return value - discount;
}

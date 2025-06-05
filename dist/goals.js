"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.goals = goals;
function goals(...goals) {
    return goals.reduce((acc, num) => acc + num, 0);
}
console.log(goals(2, 3, 4, 1));

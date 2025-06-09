"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cockroachSpeed = cockroachSpeed;
function cockroachSpeed(s) {
    return Math.floor(((s * 1000 * 100) / 60) / 60);
}
console.log(cockroachSpeed(1.08));

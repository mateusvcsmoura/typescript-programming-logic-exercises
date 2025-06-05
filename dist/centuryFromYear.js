"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.centuryFromYear = void 0;
const centuryFromYear = (year) => {
    return Math.ceil(year / 100);
};
exports.centuryFromYear = centuryFromYear;
console.log((0, exports.centuryFromYear)(2136));
console.log((0, exports.centuryFromYear)(1999));

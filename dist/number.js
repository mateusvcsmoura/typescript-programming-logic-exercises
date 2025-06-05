"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = number;
function number(busStops) {
    const peopleOnBus = busStops.reduce((acc, num) => acc += num[0], 0);
    const peopleWhoLeft = busStops.reduce((acc, num) => acc += num[1], 0);
    // return busStops.reduce((rem, [on, off]) => rem + (on - off), 0);
    return peopleOnBus - peopleWhoLeft;
}

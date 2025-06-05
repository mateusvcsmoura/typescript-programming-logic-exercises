"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLight = updateLight;
function updateLight(current) {
    const lights = ["green", "yellow", "red"];
    return lights.indexOf(current) > 1 ? lights[0] : lights[lights.indexOf(current) + 1];
}
console.log(updateLight("red"));
console.log(updateLight("yellow"));
console.log(updateLight("green"));

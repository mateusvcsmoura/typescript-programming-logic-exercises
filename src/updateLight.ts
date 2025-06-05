export function updateLight(current: string): string {
    const lights = ["green", "yellow", "red"];

    return lights.indexOf(current) > 1 ? lights[0] : lights[lights.indexOf(current) + 1];
}

console.log(updateLight("red"));
console.log(updateLight("yellow"));
console.log(updateLight("green"));


export function number(array: string[]): string[] {
    return array.map((n, i) => `${i + 1}: ${n}`);
}

console.log(number(["a", "b"]));
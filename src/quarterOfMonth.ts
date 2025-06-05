export function quarterOf(month: number): number {
    return Math.ceil(month / 3);
}

console.log(quarterOf(12));
console.log(quarterOf(2));
console.log(quarterOf(4));
console.log(quarterOf(6));

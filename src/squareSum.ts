export function squareSum(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc += num ** 2, 0);
}

console.log(squareSum([1, 2, 2]));
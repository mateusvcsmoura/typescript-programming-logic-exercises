export function solution(nums: number[]): number[] {
    const nulls = nums.filter(element => !element).length;
    const sortedArray = nums.sort((a, b) => a - b);

    return nulls ? [] : sortedArray;
}

console.log(solution([1, 2, 10, 50, 5]));
console.log(solution([]));

export function goals(...goals: number[]): number {
    return goals.reduce((acc, num) => acc + num, 0);
}

console.log(goals(2, 3, 4, 1));

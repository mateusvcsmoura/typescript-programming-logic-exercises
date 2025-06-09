export function cockroachSpeed(s: number): number {
    return Math.floor(((s * 1000 * 100) / 60) / 60);
}

console.log(cockroachSpeed(1.08));

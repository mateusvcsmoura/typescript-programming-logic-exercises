export const summation = (num: number) => {
    let acc: number = 0;
    for (let i = 0; i <= num; i++) {
        acc += i;
    }
    return acc;
}

console.log(summation(8));
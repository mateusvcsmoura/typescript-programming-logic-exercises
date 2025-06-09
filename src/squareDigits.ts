export class Kata {
    static squareDigits(num: number): number {
        let result: string = "";

        const numArray = num.toString().split("");
        numArray.map((num) => {
            result += `${Number(num) ** 2}`;
        });

        return Number(result);
    }
}

console.log(Kata.squareDigits(9119));
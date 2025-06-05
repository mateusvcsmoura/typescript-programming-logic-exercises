export function countSheep(num: number): string {
    let str: string = "";

    for (let i = 0; i < num; i++) {
        str += `${i + 1} sheep...`;
    }

    return str;
}
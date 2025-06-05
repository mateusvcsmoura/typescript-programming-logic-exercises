export function doubleChar(str: string): string {
    let result: string = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }

    return result;
}

console.log(doubleChar("abc"));
export function removeChar(str: string): string {
    const strArray: string[] = str.split("");
    strArray.shift();
    strArray.pop();

    return strArray.join("");
}

console.log(removeChar("Mateus"));
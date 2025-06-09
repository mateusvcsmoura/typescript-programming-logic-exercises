export function printerError(s: string): string {
    const validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
    const errors = s.split("").filter(letter => !validLetters.includes(letter)).length;

    return `${errors}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm"));
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

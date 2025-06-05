export function isPalindrome(x: string): boolean {
    const strArrayReversed: string[] = x.split("").reverse();

    return x.toLowerCase() === strArrayReversed.join("").toLowerCase();
}

console.log(isPalindrome("ovo"));
console.log(isPalindrome("mats"));
console.log(isPalindrome("ovO"));

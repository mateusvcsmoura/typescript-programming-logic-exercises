export const centuryFromYear = (year: number): number => {
    return Math.ceil(year / 100);
};

console.log(centuryFromYear(2136));
console.log(centuryFromYear(1999));

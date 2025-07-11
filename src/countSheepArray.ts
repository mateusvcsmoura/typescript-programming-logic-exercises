export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    const sheepSum = arrayOfSheep.reduce((acc, sheep) => {
        if (sheep) {
            acc++;

            return acc;
        }

        return acc;
    }, 0);

    // arrayofsheep.filter(e => e).length should work

    return sheepSum;
}

console.log(countSheeps(
    [
        true, true, true, false,
        true, true, true, true,
        true, false, true, false,
        true, false, false, true,
        true, true, true, true,
        false, false, true, true
    ]
));


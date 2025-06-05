export class Kata {
    static dnaStrand(dna: string) {
        const complements = {
            "A": "T",
            "T": "A",
            "C": "G",
            "G": "C"
        }

        const dnaArray = dna.split("");
        dnaArray.map(function (letter, index) {
            if (letter === "A" || letter === "T" || letter === "C" || letter === "G") {
                dnaArray[index] = complements[letter];
            }
        });

        return dnaArray.join("");
    }
}

console.log(Kata.dnaStrand("AAAA"));
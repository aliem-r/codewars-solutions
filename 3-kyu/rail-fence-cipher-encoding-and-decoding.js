// https://www.codewars.com/kata/58c5577d61aefcf3ff000081

function encodeRailFenceCipher(string, numberRails) {
    return solver(true, string, numberRails);
}

function decodeRailFenceCipher(string, numberRails) {
    return solver(false, string, numberRails);
}

function solver(encode, string, numberRails) {
    if (numberRails === 1) return string;

    let result = encode ? "" : [];
    let mainGap = 2 * numberRails - 2;
    let x = 0;

    for (let i = 0; i < numberRails; i++) {
        let gap = 2 * (numberRails - i) - 2;
        let n = i;
        let bool = true;

        while (n < string.length) {
            encode ? (result += string[n]) : (result[n] = string[x]);

            if (i === 0) n += gap;
            else if (i === numberRails - 1) n += mainGap;
            else {
                bool ? (n += gap) : (n += mainGap - gap);
                bool = !bool;
            }
            x++;
        }
    }

    return encode ? result : result.join("");
}

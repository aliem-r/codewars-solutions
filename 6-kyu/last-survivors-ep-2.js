// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651

function lastSurvivors(str) {
    let rx = /(.)(.*?)\1/;
    if (rx.test(str)) {
        let az = "abcdefghijklmnopqrstuvwxyza";
        let nrw = rx.exec(str);
        let i = nrw.index;

        let letraNext = az[az.indexOf(str[i]) + 1];
        str = str
            .split("")
            .fill(letraNext, i, i + 1)
            .join("");

        i = nrw.index + nrw[0].length - 1;
        str = str
            .split("")
            .fill("", i, i + 1)
            .join("");

        return lastSurvivors(str);
    } else {
        return str;
    }
}

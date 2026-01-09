// https://www.codewars.com/kata/5803c0c6ab6c20a06f000026

function swapVowelCase(str) {
    return str
        .split("")
        .map(function (l, i) {
            return /[aeiou]/i.test(l) ? (/[aeiou]/.test(l) ? l.toUpperCase() : l.toLowerCase()) : l;
        })
        .join("");
}

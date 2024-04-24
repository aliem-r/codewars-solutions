//https://www.codewars.com/kata/56b22765e1007b79f2000079

function isNarcissistic(n) {
    return (n + "").split("").reduce((x, a, i, s) => x + Math.pow(a, s.length), 0) === n;
}

// https://www.codewars.com/kata/5809c661f15835266900010a

function doubleEveryOther(a) {
    return a.map((a, i) => (i % 2 != 0 ? a * 2 : a));
}

// https://www.codewars.com/kata/525caa5c1bf619d28c000335

function isSolved(a) {
    a = a.join("").replace(/,/g, "");
    let r = -1;

    if (!/0/.test(a)) r = 0;
    else if (/^(...)*1{3}|(1..){2}1|^(1...){2}1|^(..)(1.){2}(1..)/.test(a)) r = 1;
    else if (/^(...)*2{3}|(2..){2}2|^(2...){2}2|^(..)(2.){2}(2..)/.test(a)) r = 2;
    return r;
}

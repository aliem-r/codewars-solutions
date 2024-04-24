//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
    let r = /(NORTH SOUTH|SOUTH NORTH|EAST WEST|WEST EAST)[ ]?/g;
    let s = arr.join(" ");
    while (r.test(s)) s = s.replace(r, "");
    return s == "" ? [] : s.replace(/\s$/, "").split(" ");
}

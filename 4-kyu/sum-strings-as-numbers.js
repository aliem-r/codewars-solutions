// https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(a, b) {
    let rest = "0";
    let sum = "";
    a.length > b.length ? (b = b.padStart(a.length, "0")) : (a = a.padStart(b.length, "0"));

    for (let i = a.length - 1; i >= 0; i--) {
        let x = (+rest + +a[i] + +b[i] + "").padStart(2, "0");
        rest = x[0];
        i == 0 && rest == "1" ? (sum = rest + x[1] + sum) : (sum = x[1] + sum);
    }
    return sum.replace(/0*/, "");
}

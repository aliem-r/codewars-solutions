//https://www.codewars.com/kata/530e15517bc88ac656000716

const az = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split("");
const aZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function rot13(message) {
    var text = [];
    message.split("").map((l, i, a) => {
        az.indexOf(l) != -1 ? (text[i] = az[az.indexOf(l) + 13]) : aZ.indexOf(l) != -1 ? (text[i] = aZ[aZ.indexOf(l) + 13]) : (text[i] = l);
    });
    return text.join("");
}

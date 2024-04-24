//https://www.codewars.com/kata/5f25f475420f1b002412bb1f

const numTimes = 999;
const letras = "abcdefghijklmnopqrstuvwxyz".split("");

function findTheNumberPlate(customerID) {
    var letra1 = customerID / numTimes;
    var letra2 = letra1 / letras.length;
    var letra3 = letra2 / letras.length;

    return findCharacter(letra1) + findCharacter(letra2) + findCharacter(letra3) + findNumber(letra1);
}

function findCharacter(num) {
    var char;
    var decimal = (1 / letras.length) % 1;
    var count = decimal;
    for (var i = 0; i < letras.length; i++) {
        if ((num / letras.length) % 1 < count) {
            char = letras[i];
            break;
        } else {
            count = count + decimal;
        }
    }
    return char;
}

function findNumber(num) {
    var numPos = [""];
    for (var i = 0; i < numTimes; i++) {
        numPos.push((i / numTimes).toFixed(6));
    }
    for (var i = 1; i < numPos.length; i++) {
        if ((num % 1).toFixed(6) == numPos[i]) return restaurar(i, (numTimes + "").length);
    }
}
function restaurar(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

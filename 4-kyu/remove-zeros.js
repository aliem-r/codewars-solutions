// https://www.codewars.com/kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
    let exit = false;
    let pos = 0;
    let zero;
    let zeroCount = 0;
    if (array.length > 0) {
        while (exit == false) {
            if (array[pos] === 0 || array[pos] === "0") {
                zero = array[pos];
                zeroCount++;
                let helper = pos;
                for (let i = pos + 1; i < array.length; i++) {
                    array[helper] = array[i];
                    helper++;
                }
                array[array.length - 1] = zero;
            } else {
                pos++;
            }
            if (array.length - zeroCount == pos) exit = true;
        }
    }
    return array;
}

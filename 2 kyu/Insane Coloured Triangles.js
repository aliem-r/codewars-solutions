//https://www.codewars.com/kata/5a331ea7ee1aae8f24000175

function triangle(row) {
    while (row.length != 1) {
        let helper = "";
        let npo3 = nearestPowerOf3(row.length);
        for (let i = 0; i + npo3 < row.length; i++) {
            helper += "BRG"[((-(row[i].charCodeAt() + row[i + npo3].charCodeAt()) % 3) + 3) % 3];
        }
        row = helper;
    }
    return row;
}

function nearestPowerOf3(n) {
    let m = 1;
    while (n > m * 3) m *= 3;
    return m;
}

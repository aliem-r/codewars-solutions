// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/

function triangle(row) {
    row = row.split("");
    while (row.length > 1) {
        for (let i = 0; i < row.length - 1; i++) {
            pos = ((-(row[i].charCodeAt() + row[i + 1].charCodeAt()) % 3) + 3) % 3;
            row[i] = "BRG"[pos];
            if (i == row.length - 2) {
                row.pop();
            }
        }
    }
    return row.join("");
}

// function triangle(row) {
//     if (row.length == 1) return row;
//     let c = { RR: "R", GB: "R", BG: "R", GG: "G", BR: "G", RB: "G", BB: "B", RG: "B", GR: "B" };
//     let helper = "";
//     row.split("").reduce((a, b) => {
//         helper += c[a + b];
//         return b;
//     });
//     return triangle(helper);
// }

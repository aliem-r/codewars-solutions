//https://www.codewars.com/kata/534e01fbbb17187c7e0000c6

function spiralize(n) {
    let spiral = [];
    let helper = Array.from(Array(n), () => new Array(n));
    let char = 1;
    helper.map((x, i) => {
        if (i != 0) {
            let condition = n % 4 == 0 ? Math.round(n / 2) : Math.trunc(n / 2) + 1;
            console.log(condition);
            if (i < condition) {
                helper[i].splice(0, n, ...helper[i - 1]);
                helper[i].fill(char, i, n - i);
                spiral.push(helper[i].slice(0, helper[i].length));
                spiral[i][i - 1] = char;
                char == 0 ? (char = 1) : (char = 0);
            } else {
                helper[i].splice(0, n, ...helper[n - i - 1]);
                spiral.push(helper[i].slice(0, helper[i].length));
            }
        } else {
            helper[i].fill(char);
            spiral.push(helper[i].slice(0, helper[i].length));
            char = 0;
        }
    });
    return spiral;
}

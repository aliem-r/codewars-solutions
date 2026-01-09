// https://www.codewars.com/kata/58e77c88fd2d893a77000102

function rainVolume(towers) {
    let res = 0;
    return (function f() {
        if (towers.length >= 3) {
            let greatestIndex = towers.indexOf(Math.max(...towers));
            towers[greatestIndex] = -1;
            let secondIndex = towers.indexOf((second = Math.max(...towers)));
            towers.splice(greatestIndex, 1);
            let between = (x = greatestIndex - secondIndex) < 0 ? towers.splice(greatestIndex, (x = Math.abs(x) - 1)) : towers.splice(secondIndex + 1, x - 1);
            res += second * between.length - between.reduce((a, b) => a + b, 0);
            f(towers);
        }
        return res;
    })();
}

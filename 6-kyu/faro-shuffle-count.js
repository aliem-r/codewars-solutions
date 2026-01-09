// https://www.codewars.com/kata/57bc802c615f0ba1e3000029/

function faroCount(n) {
    let count = 0;
    faroShufle((originalArray = Array.from(Array(n).keys())));
    return count;
    function faroShufle(original) {
        count++;
        let nuevo = [];
        original.some((n, i, a) => {
            nuevo.push(n, a[a.length / 2 + i]);
            return i + 1 == a.length / 2;
        });

        if (nuevo.join(",") == originalArray.join(",")) {
            return nuevo;
        } else {
            faroShufle(nuevo);
        }
    }
}

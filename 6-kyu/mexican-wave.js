// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
    var wave = [];
    str.toLowerCase()
        .split("")
        .map((l, i, a) => {
            a = str.split("");
            a[i] = a[i].replace(l, l.toUpperCase());
            if (l != " ") wave.push(a.join(""));
        });
    return wave;
}

// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function (a) {
    let snail = [];
    while (a.length) {
        snail = snail.concat(a.shift());
        a.map((r) => (snail.push(r.pop()), r.reverse()));
        a.reverse();
    }
    return snail;
};

// snail = function (a) {
//     let snail = [];
//     let rowLength = a[0].length;
//     function resolve() {
//         if (rowLength != 0) {
//             snail = snail.concat(a[0]);
//             a.shift();
//             for (let i = 0; i < rowLength - 1; i++) {
//                 snail.push(a[i].pop());
//                 a[i] = a[i].reverse();
//             }
//             a.reverse();
//             rowLength -= 1;
//             resolve();
//         }
//         return snail;
//     }
//     return resolve();
// };

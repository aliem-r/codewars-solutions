// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list) {
    let range = [-1, -1];
    for (let i = 0; i < list.length; i++) {
        if (list[i] - list[i + 1] == -1) {
            if (range[0] == -1) range[0] = i;
        } else {
            if (range[0] != -1 && list[range[0]] - list[i] != -1) {
                range[1] = i;
                list[range[0]] = list[range[0]] + "-" + list[range[1]];
                list.splice(range[0] + 1, range[1] - range[0]);
                i = range[1] - (range[1] - range[0]);
                console.log(list.join(","));
            }
            range[0] = -1;
        }
    }
    return list.join(",");
}

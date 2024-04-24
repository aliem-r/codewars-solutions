//https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
    h = parseInt(seconds / 3600)
        .toString()
        .padStart(2, "0");

    m = parseInt((seconds / 60) % 60)
        .toString()
        .padStart(2, "0");

    s = parseInt(seconds % 60)
        .toString()
        .padStart(2, "0");

    return h + ":" + m + ":" + s;
}

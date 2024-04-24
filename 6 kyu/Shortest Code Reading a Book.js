//https://www.codewars.com/kata/570c560c15944a98e9000fd2

sc = (w) =>
    w
        .toLowerCase()
        .match(/\w+/g, "")
        .map((w, i, a) => (a.indexOf(w) != i ? 0 : w))
        .join("").length;

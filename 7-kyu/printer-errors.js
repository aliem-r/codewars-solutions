// https://www.codewars.com/kata/56541980fa08ab47a0000040

const printerError = (s) =>
    s
        .split("")
        .map((c) => (c.charCodeAt(0) > 109 ? c : ""))
        .join("").length +
    "/" +
    s.length;

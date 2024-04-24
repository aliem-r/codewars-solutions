//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    return !/[xo]/gi.test(str) ? true : str.match(/x/gi) == null || str.match(/o/gi) == null || str.match(/x/gi).length != str.match(/o/gi).length ? false : true;
}

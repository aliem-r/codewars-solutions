//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(text) {
    text = text.toLowerCase();
    var exit = "";
    for (var i = 0; i < text.length; i++) {
        var current = text[i];
        if (text.replace(text[i], "").indexOf(current) == -1) exit = exit + "(";
        else exit = exit + ")";
    }
    return exit;
}

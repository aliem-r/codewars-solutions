//https://www.codewars.com/kata/52cf02cd825aef67070008fa

device.decode = function (w) {
    let helper = "07DoO1AU49EW5CVxlfcIY6.? GXyTwS3BngKZzmNtjeJriLsQ28,FphdbaHqPuRvkM07DoO1AU49EW5CVxlfcIY6.? GXyTwS3BngKZzmNtjeJriLsQ28,FphdbaHqPuRvkM";
    return w
        .split("")
        .map((l, i) => {
            return helper.indexOf(l) != -1 ? helper[helper.indexOf(l) + (i + 1)] : l;
        })
        .join("");
};

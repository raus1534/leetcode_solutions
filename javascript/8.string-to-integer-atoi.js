/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0
    while (i < s.length && s[i] == " ") {
        i++;
    }
    let sign = 1
    while (i < s.length && (s[i] === "+" || s[i] === "-")) {
        sign = s[i] == "+" ? 1 : -1;
        i++;
    }
    let num = ""
    while (i < s.length && (s[i] >= "0" && s[i] <= "9")) {
        num += s[i].toString();
        i++;
    }
    if (num === "") return 0;

    num = parseInt(num) * sign;

    if (num > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (num < -Math.pow(2, 31)) return -Math.pow(2, 31);
    return num;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (s.length < numRows || numRows == 1) return s;

    let count = 0;
    let trigger = false;
    let arr = new Array(numRows).fill("");
    for (let i = 0; i < s.length; i++) {
        arr[count] += s[i];
        if (count === 0 || count >= numRows - 1) trigger = !trigger;
        if (trigger) {
            count++;
        } else {
            count--;
        }
    }
    return arr.join("");
};

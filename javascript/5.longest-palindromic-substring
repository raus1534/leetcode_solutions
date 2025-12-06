/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let maxLen = 1;
    let start = 0;
    function checkPal(l, r) {
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            l--;
            r++;
        }
        return [l + 1, r - 1];
    }
    for (let i = 0; i < s.length; i++) {
        const [i1, i2] = checkPal(i, i);
        if (i2 - i1 + 1 > maxLen) {
            maxLen = i2 - i1 + 1;
            start = i1;
        }

        const [i3, i4] = checkPal(i, i + 1);
        if (i4 - i3 + 1 > maxLen) {
            maxLen = i4 - i3 + 1;
            start = i3;
        }
    }
    return s.substring(start, start + maxLen)
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {}
    for (let s of strs) {
        let key = s.split("").sort().join("");
        if (!obj[key]) {
            obj[key] = []
        }
        obj[key].push(s)
    }
    return Object.values(obj)
};

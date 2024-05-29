/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let joinedObj = {};
  for (i = 0; i < arr1.length; i++) {
    joinedObj[arr1[i].id] = arr1[i];
  }
  for (i = 0; i < arr2.length; i++) {
    if (joinedObj[arr2[i].id]) {
      for (const [key, value] of Object.entries(arr2[i])) {
        joinedObj[arr2[i].id][key] = value;
      }
    } else {
      joinedObj[arr2[i].id] = arr2[i];
    }
  }
  return Object.values(joinedObj);
};

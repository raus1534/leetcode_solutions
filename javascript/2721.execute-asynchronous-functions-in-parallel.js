/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
  return new Promise((resolve, reject) => {
    let results = new Array(functions.length);
    let count = functions.length;
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((val) => {
          results[i] = val;
          count--;
          if (count === 0) resolve(results);
        })
        .catch((reason) => reject(reason));
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

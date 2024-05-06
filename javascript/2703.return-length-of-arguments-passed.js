/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  let len = 0;
  for (i = 0; i < args.length; i++) {
    len++;
  }
  return len;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let n1 = 0,
    n2 = 1;
  while (true) {
    yield n1;
    [n1, n2] = [n2, n1 + n2];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

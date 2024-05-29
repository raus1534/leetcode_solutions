class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.num = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.num += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.num -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.num *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) throw new Error("Division by zero is not allowed");
    this.num /= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.num = Math.pow(this.num, value);
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.num;
  }
}

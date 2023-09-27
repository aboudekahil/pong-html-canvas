class Vector2d {
  /**
   * @constructor
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    /** @type{number} */
    this.x = x;

    /** @type{number} */
    this.y = y;
  }

  /**
   * Adds vector together
   *
   * @param {Vector2d} other
   * @returns {Vector2d}
   */
  addVec(other) {
    return new Vector2d(x + other.x, y + other.y);
  }

  /**
   * Adds two vecs inplace
   *
   * @param {Vector2d} other
   * @returns {Vector2d}
   */
  addVecInplace(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  /**
   * Adds num to vector
   *
   * @param {number} num
   *
   * @returns {Vector2d}
   */
  addNum(num) {
    return new Vector2d(this.x + num, this.y + num);
  }

  addNumInplace(num) {
    this.x += num;
    this.y += num;

    return this;
  }

  /**
   * return length of vector
   *
   * @returns {number}
   *
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * normalize the vector and return a new one
   *
   * @returns {Vector2d}
   */
  normalize() {
    let _length = this.length();
    return new Vector2d(this.x / _length, this.y / _length);
  }

  /**
   * Normalize the vector inplace
   *
   * @returns {Vector2d}
   */
  normalizeInplace() {
    const _length = this.length();
    this.x /= _length;
    this.y /= _length;

    return this;
  }

  /**
   * Multiply with a number
   * @returns {Vector2d}
   */
  multiply(num) {
    return new Vector2d(this.x * num, this.y * num);
  }

  /**
   * Multiply with a number in place
   * @returns {Vector2d}
   */
  multiplyInplace(num) {
    this.x *= num;
    this.y *= num;

    return this;
  }
}

/**
 * Get Random number between min and max inclusive
 *
 * @param {number} min
 * @param {number} max
 *
 * @returns {number}
 */
function randomNumber(min, max) {
  return Math.random() * (max - min + 1) + min;
}

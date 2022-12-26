/**
 * Linear interpolation
 * @param {Number} a - first value to interpolate
 * @param {Number} b - second value to interpolate 
 * @param {Number} n - amount to interpolate
 */
const lerp = (a, b, n) => (1 - n) * a + n * b;


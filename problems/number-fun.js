function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n <= 0) {
    throw new RangeError('The argument must be a number more than 0');
  } else if (n >= 1000001) {
    throw new RangeError('The argument must be a number less than 1000001');
  }
  return 1 / n;
}

module.exports = {
  returnsThree,
  reciprocal
};
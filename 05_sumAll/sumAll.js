const sumAll = function (one, two) {
  if (one < 0 || two < 0 || typeof one != 'number' || typeof two != 'number' ||
    one % 1 != 0 || two % 1 != 0) return 'ERROR';
  let sum = 0;
  let first = one;
  let last = two;
  if (one > two) {
    first = two;
    last = one;
  }
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

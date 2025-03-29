const fibonacci = function(a) {
  if (a < 0) return 'OOPS';
  if (a == 0) return 0;
  let first = 1;
  let second = 1;
  let next = 2;
  if (a < 3) return 1;
  for (let i = 2; i < a; i++) {
    next = first + second;
    first = second;
    second = next;
  }
  return next;
};

// Do not edit below this line
module.exports = fibonacci;

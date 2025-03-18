const repeatString = function(text, count) {
  if (count < 0) return 'ERROR';
  let out = '';
  for (let i = 0; i < count; i++) {
    out += text;
  }
  return out;
};

// Do not edit below this line
module.exports = repeatString;

const palindromes = function (str) {
  str = str.replace(/[!.,]/g, '').toLowerCase().split(" ").join("");
  const res = str.split('').slice().reverse().join('');
  return res == str;
};

// Do not edit below this line
module.exports = palindromes;

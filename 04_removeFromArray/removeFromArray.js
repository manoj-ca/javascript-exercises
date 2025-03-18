const removeFromArray = function(list) {
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      list = list.filter(item => item !== arguments[i]);
    }
  }
  return list;
};

// Do not edit below this line
module.exports = removeFromArray;

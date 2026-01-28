const contains = function (obj, val) {
  if (Array.isArray(obj)) {
    if (Array.isArray(val)) {
      if (obj === val) return true;
    }
    obj.forEach((item) => {
      if (contains(item, val)) return true;
    });
  } else {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (typeof value === "object" && value !== null) {
          if (contains(value, val)) return true;
        } else if (Number.isNaN(val)) {
          if (Number.isNaN(value)) return true;
        } else if (value === val) {
          return true;
        }
      }
    }
    return false;
  }
};

// Do not edit below this line
module.exports = contains;

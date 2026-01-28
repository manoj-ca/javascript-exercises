const totalIntegers = function (object) {
  if (typeof object !== "object") return undefined;
  let sum = 0;
  const values = Object.values(object);
  sum += values.reduce((prev, curr) => {
    if (Number.isInteger(curr)) prev++;
    return prev;
  }, 0);

  const nestedObjects = values.filter(
    // typeof null === 'object' evaluates to true ¯\_(ツ)_/¯
    (value) => typeof value === "object" && value !== null
  );
  nestedObjects.forEach((nestedObject) => {
    sum += totalIntegers(nestedObject);
  });

  return sum;
};

// Do not edit below this line
module.exports = totalIntegers;

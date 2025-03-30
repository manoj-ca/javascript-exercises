const findTheOldest = function (people) {
  const ages = people.map(item => {
    let birth = item.yearOfBirth;
    let death = item.yearOfDeath;
    if (death == undefined) {
      death = (new Date()).getFullYear();
    }
    let age = death - birth;
    return { age: age, item: item };
  });
  const oldest = ages.reduce((oldest, person) => {
    if (person.age > oldest.age) {
      return person;
    } else {
      return oldest;
    }
  });
  return oldest.item;
};

// Do not edit below this line
module.exports = findTheOldest;

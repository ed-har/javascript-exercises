// const findTheOldest = function(array) {
//     const currentYear = new Date().getFullYear();
//     let oldestIndex = 0;
//     let currOldest = 0;
//     for (let index = 0; index < array.length; index++) {
//         let person = array[index];
//         let personAge = 0;
//         if (person.yearOfDeath === undefined) {
//             personAge = currentYear - person.yearOfBirth;
//         } else {
//             personAge = person.yearOfDeath - person.yearOfBirth;
//         }

//         if (personAge > currOldest) {
//             oldestIndex = index
//             currOldest = personAge
//         }
//     }
//     return array[oldestIndex];
// };

// const findTheOldest = function (array) {
//     const currentYear = new Date().getFullYear();
//     let oldestIndex = 0;
//     array.reduce((oldest, person, index) => {
//         let death = person.yearOfDeath;
//         let birth = person.yearOfBirth;
//         let currentAge = (!death) ? currentYear - birth : death - birth;
//         if (currentAge > oldest) {
//             oldestIndex = index;
//             return currentAge;
//         };
//     }, 0);
// };

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

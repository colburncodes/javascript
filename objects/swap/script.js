/**
 * Declare a function called copy() that will take an object, copy it, and return a new one.
 * This new object must have the same set of methods and properties, but it should also be independent.
 * In other words, when you change the initial object, your new object should remain the same.
 * @param {*} obj
 * @returns
 */

function copy(obj) {
  // write your code here
  const newObj = {};
  // add all the properties of the initial object to it
  Object.keys(obj).forEach(function (key) {
    newObj[key] = obj[key];
  });
  return newObj;
}

const firstObj = {
  one: 1,
  two: 2,
  three: 3,
};

const secondObj = firstObj;
const thirdObj = copy(firstObj);

console.log(firstObj); // { one: 1, three: 3, two: 2 }
console.log(secondObj); // { one: 1, three: 3, two: 2 }
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

firstObj.four = 4;

console.log(firstObj); // { four: 4, one: 1, three: 3, two: 2 }
console.log(secondObj); // { four: 4, one: 1, three: 3, two: 2 }

// thirdObj has not changed
console.log(thirdObj); // { one: 1, three: 3, two: 2 }

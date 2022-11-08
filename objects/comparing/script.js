/**
 * Write a function called isEqual() which will compare two objects by their properties.
 * If the key-value sets of both objects match, the function must return true.
 * Otherwise, it should return false.
 * @param {*} firstObj
 * @param {*} secondObj
 * @returns
 */

function isEqual(firstObj, secondObj) {
  // write your code here
  const fKeys = Object.keys(firstObj);
  const sKeys = Object.keys(secondObj);
  // verifying if the objects have the same number of keys
  if (fKeys.length !== sKeys.length) {
    return false;
  }

  /* verifying values of corresponding keys are equal
  in the compared objects */
  return fKeys.every(function (key) {
    console.log(firstObj[key]);
    console.log(secondObj[key]);
    return firstObj[key] === secondObj[key];
  });
}

const first = {
  property: "value",
  anotherProperty: "another value",
};

const second = {
  property: "value",
  anotherProperty: "another value",
};

const third = {
  property: "value",
  anotherProperty: "yet another value",
};

console.log(isEqual(first, second)); // true
console.log(isEqual(second, third)); // false

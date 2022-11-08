function swap(obj) {
  const res = {};
  // swap keys with values and add them to the res object
  Object.keys(obj).forEach(function (key) {
    res[obj[key]] = key;
  });
  return res;
}

const myObj = {
  first: 1,
  second: 2,
  third: 3,
};

console.log(myObj); // { first: 1, second: 2, third: 3 }
console.log(swap(myObj)); // { 1: "first", 2: "second", 3: "third" }

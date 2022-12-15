// Create a deep copy of the user obj using JSON.stringfy()
// and JSON.parse()

const user = {
  name: "Paul",
  age: 30,
  hasDog: true,
  dog: {
    name: "Doge",
    age: 6,
  },
};

const userDeepCopy = JSON.parse(JSON.stringify(user));

console.log(user === userDeepCopy); // false
console.log(user.dog === userDeepCopy.dog); // false
console.log(user.name === userDeepCopy.name); // true
console.log(user.dog.name === userDeepCopy.dog.name); // true

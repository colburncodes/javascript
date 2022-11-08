/////////////////////////////////////////////////////////
///// SHALLOW COPY
/////////////////////////////////////////////////////////

const sourceObj = {
  one: 1,
  two: 2,
  three: { message: "I love JS 🖤" },
};

const copiedObj = Object.assign({}, sourceObj);

console.log(copiedObj === sourceObj); // false
console.log(copiedObj.three === sourceObj.three); // true

/**
 * Code the shallowCopy() function, which takes an object as an argument,
 * and returns a shallow copy of that object.
 * @param {*} obj
 * @returns
 */
function shallowCopy(obj) {
  // your code
  const objCopy = Object.assign({}, obj);
  console.log(objCopy);
  return objCopy;
}

const myObj = {
  one: 1,
  two: 2,
  three: 3,
};

const myObjCopy = shallowCopy(myObj);

console.log(myObjCopy === myObj); // false

/**
 * We've written the function evolution(obj, key, value).
 * It has three parameters and enables you to add a new property to a specified key inside of a specified object.
 * Unfortunately, the program is bugged. It modifies the initial object, which it's not supposed to do.
 * Your task is to fix the function so that when a fish evolves into a frog, it doesn't add 4 legs to the fish.
 * @param {*} obj
 * @param {*} key
 * @param {*} value
 * @returns
 */

// modify this function
function evolution(obj, key, value) {
  const newObj = Object.assign({}, obj);
  console.log(newObj);
  newObj[key] = value;
  return newObj;
}

const fish = {
  eggs: "roe",
  eyes: 2,
  habitat: "water",
};

const frog = evolution(fish, "legs", 4);

console.log("frog: ", frog);

// frog:  {eggs: "roe", eyes: 2, habitat: "water", legs: 4}

console.log("fish: ", fish);

// fish:  {eggs: "roe", eyes: 2, habitat: "water", legs: 4}
// The fish have evolved too! What have we done!?

/////////////////////////////////////////////////////////
///// DEEP COPY
/////////////////////////////////////////////////////////

/**
 * David Bowie's sixth album Aladdin Sane was released in 1973 and is estimated to have sold 4.6 million copies worldwide.
 * We've already created an aladdinSane object to represent the album, and for this task, you'll need to make another one.
 * You can accomplish this by deep copying the original aladdinSane object.
 */
const aladdinSane = {
  artist: "David Bowie",
  album: "Aladdin Sane",
  year: 1973,
  tracks: {
    "Watch That Man": "4:30",
    "Aladdin Sane": "5:06",
    "Drive-In Saturday": "4:33",
    "Panic in Detroit": "4:25",
    "Cracked Actor": "3:01",
    Time: "5:15",
    "The Prettiest Star": "3:31",
    "Let's Spend the Night Together": "3:10",
    "The Jean Genie": "4:07",
    "Lady Grinning Soul": "3:54",
  },
};

const aladdinSaneCopy = Object.assign({}, aladdinSane, {
  tracks: Object.assign({}, aladdinSane.tracks),
});

console.log(aladdinSane.tracks === aladdinSaneCopy.tracks); // false

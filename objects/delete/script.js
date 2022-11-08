/**
 * Here we have an object called tion. Inside of it, each key should end with the suffix "tion."
 * Call the endsWith() method, and use the delete operator to remove any keys that don't end with "tion" from the object.
 */

const tion = {
  fruition: "the realization or fulfilment of a plan or project",
  depreciation: "the process of losing value",
  microseismicity: "a faint earth tremor caused by natural phenomena",
  alienation: "a conveyance of property",
  bifurcation:
    "the point or area at which something divides into two branches or parts",
  locomotion: "the ability to move",
  fusion: "a union by or as if by melting",
};

Object.keys(tion).forEach(function (key) {
  // write your code here
  if (!key.endsWith("tion")) {
    delete tion[key];
  }
});

console.log(tion);

/*

  {
    fruition: "the realization or fulfilment of a plan or project",
    depreciation: "the process of losing value",
    alienation: "a conveyance of property",
    bifurcation: "the point or area at which something divides into two branches or parts",
    locomotion: "the ability to move"
  }

*/

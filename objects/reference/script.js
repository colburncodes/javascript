/**
 * The ECMAScript 2017 standard introduced two new object methods: Object.entries(), and Object.values().
 * The Object.values() method returns all the values of an object's properties and methods.
 * The Object.entries() method returns all the key-value pairs.
 * Be careful with these methods as they are not currently supported in Internet Explorer, not even in the latest version.
 */

const heights = {
  burjKhalifa: 828,
  tokyoSkyTree: 634,
  shanghaiTower: 632,
  abrajAlBait: 601,
  cantonTower: 600,
  pingAnFinanceCentre: 600,
  lotteWorldTower: 555,
  cnTower: 553,
  oneWorldTradeCenter: 541,
  ostankinoTower: 540,
};

const stratosphere = 11000;

const sumHeights = Object.values(heights).reduce((acc, value) => acc + value);

console.log(sumHeights >= stratosphere);

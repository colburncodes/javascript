const coverHeading = document.querySelector(".cover__heading");
const playListTitles = [
  "Classic Elevator Music - Volume IV",
  "Songs to knit to",
  "My favorite bagpipe songs",
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}
// add code here
function doubleClickHandler(event) {
  coverHeading.textContent = getRandomElement(playListTitles);
  // remove event so that it fires once.
  coverHeading.removeEventListener("dblclick", doubleClickHandler);
}

coverHeading.addEventListener("dblclick", doubleClickHandler);

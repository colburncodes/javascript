const parent = document.querySelector("#parent");
const firstChild = document.querySelector("#firstChild");
const secondChild = document.querySelector("#secondChild");
const thirdChild = document.querySelector("#thirdChild");

function callback(evt) {
  console.log("Event handled");
}

parent.addEventListener("click", callback);
firstChild.addEventListener("click", callback);
secondChild.addEventListener("click", callback);
thirdChild.addEventListener("click", callback);

function handleLoadError() {
  console.log("Image not loaded. ERROR! ERROR!");
}

function handleImageLoad(evt) {
  document.body.append(evt.target);
}

// Modify the body of the loadImage() function
function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.onerror = reject;
    image.onload = resolve;
  });
}

// The new function code should allow calling it like this:
loadImage(
  "https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg"
)
  .then((evt) => {
    document.body.append(evt.target);
  })
  .catch(() => {
    console.log("Image not loaded. ERROR! ERROR!");
  });

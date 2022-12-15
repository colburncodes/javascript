function handleLoadError() {
  console.log("Image not loaded. ERROR! ERROR!");
}

function handleImageLoad(evt) {
  // Add image element to the DOM after the image is loaded
  document.body.append(evt.target);
}

// Complete the code of this function
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

loadImage(
  "https://pictures.s3.yandex.net/frontend-developer/functions/dog-1.jpg",
  handleImageLoad,
  handleLoadError
);

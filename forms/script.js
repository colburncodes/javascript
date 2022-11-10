const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const artistInput = document.querySelector(".input__text_type_artist");
const titleInput = document.querySelector(".input__text_type_title");
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artist, title) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artist;
  songElement.querySelector(".song__title").textContent = title;

  songsContainer.append(songElement);
}

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute("disabled");
    addButton.classList.add("input__btn_disabled");
  } else {
    addButton.setAttribute("disabled", true);
    addButton.classList.add("input__btn_disabled");
  }
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  addSong(artist.value, title.value);
  form.reset();
  setSubmitButtonState(false);
});

form.addEventListener("input", function (evt) {
  isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
});

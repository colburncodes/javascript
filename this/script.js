function like() {
  this.isLiked = !this.isLiked;
}

function getSongInfo() {
  return `${this.artist} = ${this.title}${this.releaseYear}`;
}

function createSong(title, artist, releaseYear) {
  const newSong = {
    title,
    artist,
    releaseYear,
    isLiked: false,
    like,
    getSongInfo,
  };

  return newSong;
}

class AudioItem {
  constructor(title, artist) {
    this._title = title;
    this._artist = artist;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}

class Song extends AudioItem {
  constructor(releaseYear) {
    super(title, artist);
    this._releaseYear = releaseYear;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getSongInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`;
  }
}

class PodcastEpisode extends AudioItem {
  constructor(guest, duration) {
    super(title, artist);
    this._guest = guest;
    this.duration = duration;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getEpisodeInfo() {
    return `${this._artist}. ${this._title} - ${
      this._guest
    } ${this._getFormattedDuration()}`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this.duration / 60); // the total number of minutes
    const seconds = this.duration % 60; // the remainder of the division by 60
    return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
  }
}

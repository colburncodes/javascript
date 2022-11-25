class Card {
  constructor(title, description, price, image) {
    this._title = title;
    this._description = description;
    this._price = price;
    this._image = image;
  }

  _getCardTemplate() {
    const template = document
      .querySelector(".horizontal-card")
      .content.querySelector(".card")
      .cloneNode(true);

    return template;
  }
}

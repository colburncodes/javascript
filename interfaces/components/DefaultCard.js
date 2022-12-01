import { popupCaption } from "../utils/constants.js";
import Card from "./Card.js";

export default class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.title;
    this._description = data.description;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._image})`;
    this._element.querySelector(".card__title").textContent = this._title;

    return this._element;
  }
}

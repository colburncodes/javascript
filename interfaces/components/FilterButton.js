export default class FilterButton {
  constructor({ data, handleButtonClick }, buttonSelector) {
    this._additionalButtonClass = data.buttonClass;
    this._buttonSelector = buttonSelector;
    this._handleButtonClick = handleButtonClick;
    this._isGrid = data.isGrid;
  }

  _setEventListeners() {
    this._element.addEventListeners(
      "click",
      this._handleButtonClick(this._isGrid)
    );
  }

  _getTemplate() {
    const buttonElement = document
      .querySelector(this._buttonSelector)
      .content.querySelector(".filter__button")
      .cloneNode(true);

    return buttonElement;
  }

  generateButton() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.classList.add(this._additionalButtonClass);

    return this._element;
  }
}

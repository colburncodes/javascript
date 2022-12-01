export default class FilterButton {
  constructor({ data, handleButtonClick }, buttonSelector) {
    this._additionalButtonClass = data.buttonClass;
    this._buttonSelector = buttonSelector;
  }

  _getTemplate() {
    console.log(this._buttonSelector);
    const buttonElement = document
      .querySelector(this._buttonSelector)
      .content.querySelector(".filter__button")
      .cloneNode(true);

    return buttonElement;
  }

  generateButton() {
    this._element = this._getTemplate();
    this._element.classList.add(this._additionalButtonClass);
    return this._element;
  }
}

const items = [
  {
    image: "https://code.s3.yandex.net/web-code/oop/card_detail.jpg",
    title: "BIOLOID",
    description:
      "Robot Kit is a popular series of robot construction kits from the company Robotis. The series includes various sets designed both for beginners and for advanced users. In this kit, you'll find everything you need to build unique types of robots and make your own custom designs. The set comes with a software tool for programming, a remote controller, servo motors, and much more.",
    price: "$999",
  },
  {
    image: "https://code.s3.yandex.net/web-code/oop/card_detail.jpg",
    title: "BIOLOID Premium kit",
    description:
      "BIOLOID Premium Kit has everything needed to build bipedal robots and includes Dynamixel Smart Servo Motor and the CM-530 controller. BIOLOID Premium Kit is perfect for education, entertainment, and robotics competitions.",
    price: "$1800",
  },
  {
    image: "https://code.s3.yandex.net/web-code/oop/card_detail2.png",
    title: "Airwheel",
    description:
      "This bicycle model allows you to use both the pedal and the electric motor, or a combination of both. Airwheel R8 is equipped with a removable battery set to ensure sufficient power supply and to make your trips longer.",
    price: "$2000",
  },
];

class Card {
  constructor(data, cardSelector) {
    this._title = data.title;
    this._description = data.description;
    this._price = data.price;
    this._image = data.image;
    this._cardSelector = cardSelector;
  }

  _getCardTemplate() {
    const template = document
      .querySelector(this._cardSelector)
      .content.cloneNode(true);

    return template;
  }

  generateCard() {
    this._element = this._getCardTemplate();
    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._image})`;
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__info").textContent = this._description;
    this._element.querySelector(".card__price-property").textContent =
      this._price;

    return this._element;
  }
}

items.forEach((item) => {
  const card = new Card(item, ".horizontal-card");
  const cardElement = card.generateCard();
  document.querySelector(".card-list__items").append(cardElement);
});

import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
} from "../utils/constants.js";
import { items } from "../utils/constants.js";
import Section from "../components/Section.js";
import DefaultCard from "../components/DefaultCard.js";
import HorizontalCard from "../components/HorizontalCard.js";

const defaultCardList = new Section(
  {
    data: items,
    renderer: (item) => {
      const card = new DefaultCard(item, ".default-card");
      const cardElement = card.generateCard();
      defaultCardList.setItem(cardElement);
    },
  },
  cardListSelector
);
const horizontalCardList = new Section(
  {
    data: items,
    renderer: (item) => {
      const card = new HorizontalCard(item, ".horizontal-card");
      const cardElement = card.generateCard();
      horizontalCardList.setItem(cardElement);
    },
  },
  cardListSelector
);

defaultCardButton.addEventListener("click", () => {
  defaultCardList.renderItems(true);
});

horizontalCardButton.addEventListener("click", () => {
  horizontalCardList.renderItems(false);
});


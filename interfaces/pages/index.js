import {
  defaultCardButton,
  horizontalCardButton,
  cardListSelector,
} from "../utils/constants.js";
import { items } from "../utils/constants.js";
import Section from "../components/Section.js";

const defaultCardList = new Section({ data: items }, cardListSelector);

defaultCardButton.addEventListener("click", () => {
  defaultCardList.renderItems(true);
});

horizontalCardButton.addEventListener("click", () => {
  defaultCardList.renderItems(true);
});

defaultCardList.renderItems();

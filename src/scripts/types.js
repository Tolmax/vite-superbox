import { goodsTypes } from "../scripts/cards.js";
import { generatePopup } from "./modals.js";

const elementTemplate = document.querySelector("#goods-template").content;
const elementPlace = document.querySelector(".goods__types");

// функция генерации карточки товара с описанием

function createTypesOfGoods(
  number,
  _id,
  box,
  title,
  link,
  description,
  images,
) {
  const cardElement = elementTemplate
    .querySelector(".goods__container")
    .cloneNode(true);

  cardElement.querySelector(".goods__title").id = number;
  cardElement.querySelector(".goods__title").textContent = title;
  cardElement.querySelector(".goods__image").id = _id;
  cardElement.querySelector(".goods__image").src = link;
  cardElement.querySelector(".goods__image").alt = title;
  cardElement.querySelector(".goods__paragraph").textContent = description;
  cardElement.querySelector(".goods__render").id = box;

  // слушатель для открытия модального окна

  const showCards = cardElement.querySelector(".goods__image");

  showCards.addEventListener("click", function (evt) {
    generatePopup(images);
  });
  // возвращаем готовую карточку

  return cardElement;
}

// функция для рендеринга странички

export function getTypeOfGoods() {
  goodsTypes.forEach(function ({ number, _id, box, title, link, description, images }) {
    const typeNew = createTypesOfGoods(
      number,
      _id,
      box,
      title,
      link,
      description,
      images,
    );
    elementPlace.append(typeNew);
  });
}
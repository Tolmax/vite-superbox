import { renderSwiperSliderModal } from "./popupSlider";

const popupOpen = document.querySelector(".popup");
const popupClose = popupOpen.querySelector(".popup__close");
const stopScrolling = document.querySelector(".body");
// const popupButton = popupOpen.querySelector('.popup__button');

function openPopup(popup) {
  popup.classList.add("popup__is-active");

  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });

  popupClose.addEventListener("click", function () {
    closePopup(popup);
  });

  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  popup.classList.remove("popup__is-active");
  stopScrolling.classList.remove("stop-scrolling");
}

export function generatePopup(images) {
  stopScrolling.classList.add("stop-scrolling");
  openPopup(popupOpen);
  renderSwiperSliderModal(images);
}
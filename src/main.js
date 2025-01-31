
// import { getTypeOfGoods } from "./scripts/types.js";
import { getTypeOfGoods } from "./scripts/types.js";

// import { renderSwiperSlider } from "./scripts/swiper-slider.js";
// import {initMainSwiperSlider} from "./scripts/mainSlider.js"
import {initMainSwiperSlider} from "./scripts/mainSlider.js"

// эта функция отменяет старый скролл при оновлении сайта

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// эта функция рендерит страничку

getTypeOfGoods();

// эта функция рендерит слайдер

document.addEventListener("DOMContentLoaded", function () {
  // renderSwiperSlider();
  initMainSwiperSlider();
});

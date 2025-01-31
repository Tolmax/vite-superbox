import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

// init swiperModal and swiperModal2 //

export function renderSwiperSliderModal(images) {
  // Сначала очистим контейнеры для слайдов
  const swiperWrapper = document.querySelector(".swiperModal .swiper-wrapper");
  const swiperWrapper2 = document.querySelector(".swiperModal2 .swiper-wrapper");

  // Очистим слайдеры
  swiperWrapper.innerHTML = "";
  swiperWrapper2.innerHTML = "";

  // Динамическая загрузка слайдов в оба слайдера
  images.forEach((imgSrc) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = "Image";
    slide.appendChild(img);

    // Добавляем слайды в оба слайдера
    swiperWrapper.appendChild(slide);
    swiperWrapper2.appendChild(slide.cloneNode(true)); // Для мини-слайдера (thumbs) добавляем те же слайды
  });

  // Инициализация swiperModal
  const swiperModal = new Swiper(".swiperModal", {
    modules: [Navigation, Pagination, Keyboard, Autoplay],
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // Инициализация swiperModal2 (thumbs-слайдер)
  const swiperModal2 = new Swiper(".swiperModal2", {
    modules: [Navigation, Pagination, Keyboard, Autoplay, Thumbs],
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiperModal, // Привязываем swiperModal как мини-слайдер
    },
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

  // Обновим слайдеры после добавления слайдов и их инициализации
  swiperModal.update();
  swiperModal2.update();

  console.log("swiperModal initialized:", swiperModal);
  console.log("swiperModal2 initialized:", swiperModal2);
}


// export function renderSwiperSliderModal(images) {
//   setTimeout(() => {
//     console.log("Initializing Swiper");

//     var swiperModal = new Swiper(".swiperModal", {
//       modules: [Navigation, Pagination, Keyboard, Autoplay],

//       loop: true,
//       spaceBetween: 10,
//       slidesPerView: 4,
//       freeMode: true,
//       watchSlidesProgress: true,
//     });

//     // Динамическая загрузка картинок в слайдер swiperModal
//     const swiperWrapper = swiperModal.wrapperEl;
//     swiperWrapper.innerHTML = ""; // очистим текущие слайды

//     images.forEach((imgSrc) => {
//       const slide = document.createElement("div");
//       slide.classList.add("swiper-slide");
//       const img = document.createElement("img");
//       img.src = imgSrc;
//       img.alt = "Image";
//       slide.appendChild(img);
//       swiperWrapper.appendChild(slide);
//     });

//     // Обновляем swiperModal
//     swiperModal.update();

//     var swiperModal2 = new Swiper(".swiperModal2", {
//       modules: [Navigation, Pagination, Keyboard, Autoplay, Thumbs],

//       loop: true,
//       spaceBetween: 10,

//       thumbs: {
//         swiper: swiperModal,
//       },

//       keyboard: {
//         enabled: true,
//       },

//       autoplay: {
//         delay: 1500,
//         disableOnInteraction: false,
//       },
//     });

//     // Динамическая загрузка картинок в слайдер swiperModal2
//     const swiperWrapper2 = swiperModal2.wrapperEl;
//     swiperWrapper2.innerHTML = ""; // очистим текущие слайды

//     images.forEach((imgSrc) => {
//       const slide = document.createElement("div");
//       slide.classList.add("swiper-slide");
//       const img = document.createElement("img");
//       img.src = imgSrc;
//       img.alt = "Image";
//       slide.appendChild(img);
//       swiperWrapper2.appendChild(slide);
//     });

//     // Обновление слайдера swiperModal2 после его инициализации
//     swiperModal2.update();

//     // Убедимся, что слайдеры синхронизированы
//     setTimeout(() => {
//       swiperModal2.on("slideChange", () => {
//         swiperModal.update(); // Обновим swiperModal, чтобы изменения отразились в миниатюре
//       });
//     }, 100);

//     console.log("swiperModal initialized:", swiperModal);
//     console.log("swiperModal2 initialized:", swiperModal2);
//   }, 100);
// }

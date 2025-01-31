import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";


export function initMainSwiperSlider() {
	var swiperMain = new Swiper(".main-slider", {
		// configure Swiper to use modules

		modules: [Navigation, Pagination, Keyboard, Autoplay],

		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},

		loop: true,
		spaceBetween: 10,
		centeredSlides: true,

		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		keyboard: {
			enabled: true,
		},

		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	});
	console.log(swiperMain);
}
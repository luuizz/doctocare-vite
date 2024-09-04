import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { SwiperOptions } from "swiper/types";

const slides: SwiperOptions = {
  modules: [Pagination],
  grabCursor: true,
  slidesPerView: 2,
  pagination: {
    el: ".s-testimonials .container .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    1140: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
};

export const slidesTestimonials = new Swiper(".slides-testimonials", slides);

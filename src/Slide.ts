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
};

export const slidesTestimonials = new Swiper(".slides-testimonials", slides);

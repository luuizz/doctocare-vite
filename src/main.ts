import "./scss/main.scss";
import $ from "jquery";
import "@phosphor-icons/web/regular";
import { slidesTestimonials } from "./Slide.js";

$(document).ready(function () {
  slidesTestimonials.init();

  $("#js-year").text(new Date().getFullYear());
});

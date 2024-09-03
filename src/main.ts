import "./scss/main.scss";
import $ from "jquery";
import "@phosphor-icons/web/regular";
import { slidesTestimonials } from "./Slide.js";
import { initMenu } from "./menu.js";

$(document).ready(function () {
  slidesTestimonials.init();

  initMenu();

  $("#js-year").text(new Date().getFullYear());
});

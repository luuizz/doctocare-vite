import $ from "jquery";

export function initMenu() {
  $(".nav-menu a[href^='#']").click(function (e) {
    e.preventDefault();

    const id: string | undefined = $(this).attr("href");
    const menuHeight: number = $("header").innerHeight() ?? 0;

    if (id) {
      const targetElement = $(id);
      const targetOffset: number | undefined = targetElement.offset()?.top;

      if (targetOffset !== undefined) {
        $("html, body").animate(
          {
            scrollTop: targetOffset - menuHeight,
          },
          500
        );
      } else {
        console.warn("Elemento não encontrado");
      }
    } else {
      console.warn("Elemento não encontrado");
    }
  });

  const activeLinks = "active";

  $("section").each(function () {
    const height = $(this).height() ?? 0,
      offsetTop = $(this).offset()?.top ?? 0,
      menuHeight = $(".menu").innerHeight() ?? 0,
      id = $(this).attr("id"),
      $itemMenu = $('a[href="#' + id + '"]');

    $(window).scroll(function () {
      const scrollTop = $(window).scrollTop() ?? 0;
      if (
        offsetTop - menuHeight < scrollTop &&
        offsetTop + height - menuHeight > scrollTop
      ) {
        $itemMenu.addClass(activeLinks);
      } else {
        $itemMenu.removeClass(activeLinks);
      }
    });
  });

  $(window).on("scroll", () => {
    const header = $("header");
    if (window !== null) {
      window.scrollY > 50
        ? header.addClass("fixed")
        : header.removeClass("fixed");
    }
  });

  $(".btn-menu").click(function () {
    $(this).toggleClass("active");
    $(".aside-menu").toggleClass("active");
  });
}

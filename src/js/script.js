function removeModal() {
  "use strict";
  $(".rex-modal").removeClass("rex-show").remove(), $(".rex-overlay").remove();
}
function moveH(e) {
  "use strict";
  var i = e.find("h3.rex-portfolio-name"),
    a = e.find("h4.rex-portfolio-category"),
    o = i.next("hr");
  return i.insertAfter(o), a.insertBefore(o), e;
}
!(function(e) {
  "use strict";
  e(window).load(function() {
    e("div.loading").remove(), e("body").removeClass("loading");
  }), e(document).ready(function() {
    e("#reference").owlCarousel({
      items: 2,
      itemsDesktop: [1199, 2],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [768, 2],
      pagination: !0,
      navigation: !1,
      navigationText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
      ]
    }), e("#skills").length &&
      e(window).on("scroll.skill", function() {
        var i = e("#skills").offset().top,
          a = e("#skills").outerHeight(),
          o = e(window).height();
        e(this).scrollTop() > i + a - o &&
          (
            e(".skillbar").each(function() {
              e(this)
                .find(".skillbar-bar")
                .animate({ width: e(this).attr("data-percent") }, 1500);
            }),
            e(this).off("scroll.skill")
          );
      }), e(".flexnav").flexNav({
      navArrow: '<i class="navicon fa fa-plus"></i>',
      animationSpeed: 300
    }), e(window).on("load", function() {
      e(".grid").masonry({ itemSelector: ".grid-item" });
    }), e("#navigation-menu").onePageNav({
      scrollThreshold: 0.8
    }), e(window).width() > 1024 && e("#rex-sticky").sticky({ topSpacing: 0 }), e(window).width() < 991 && (e("#rex-blog-slider").owlCarousel({ items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 2], itemsTablet: [768, 2], pagination: !0, navigation: !1, navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] }), e("#rex-experience-slider").owlCarousel({ items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 1], itemsTablet: [768, 1], pagination: !0, navigation: !1, navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] }), e("#rex-education-slider").owlCarousel({ items: 2, itemsDesktop: [1199, 2], itemsDesktopSmall: [979, 1], itemsTablet: [768, 1], pagination: !0, navigation: !1, navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'] })), e.scrollUp(), e(window).width() > 1024 && new WOW().init(), e("#typeText").typed({ strings: ["Professional Photographer", "Professional Web Designer", "Professional Speaker", "Professional Writer"], typeSpeed: 100, loop: !0 });
    var i = e("#rex-portfolios").find("figure"),
      a = e("div.portfolio-filter"),
      o = "";
    i
      .find("figcaption")
      .addClass(
        "animated"
      ), a.find("div").first().addClass("active"), a.on(
      "click",
      "div.filter",
      function() {
        i
          .removeAttr("style data-wow-delay")
          .removeClass("animated fadeIn fadeInUp"), e("#portfolio-intro")
          .removeAttr("style data-wow-delay")
          .removeClass("animated fadeIn fadeInUp"), a
          .find(".active")
          .removeClass("active"), e(this).addClass("active");
        var t = e(this).data("filter");
        if ("all" === t)
          i.hide(), e("#portfolio-intro").show().addClass("animated fadeIn"), e(
            ".dom-featured"
          ).remove(), i.show().addClass("animated fadeInUp");
        else {
          i.hide();
          var s = 0;
          e(".dom-featured").remove(), e(
            "#portfolio-intro"
          ).hide(), e.each(i, function(i, a) {
            if (e(a).hasClass(t)) {
              if (0 === s) return (o = a), void s++;
              e(a).show().addClass("animated fadeInUp");
            }
          });
          var r = e(o).clone();
          r
            .removeClass(
              "col-lg-4 col-sm-6 rex-portfolio-item animated fadeInUp"
            )
            .addClass("row rex-featured-portfolio dom-featured animated fadeIn")
            .insertBefore("#rex-portfolios"), moveH(r)
            .show()
            .closest("figure.rex-featured-portfolio.dom-featured")
            .find("img")
            .addClass("col-md-6")
            .next("figcaption")
            .removeClass("animated zoomIn")
            .addClass("col-md-6")
            .show();
        }
      }
    ), Modernizr.touch &&
      (
        e.each(e("#rex-portfolios figure"), function() {
          e(this)
            .find("figcaption")
            .hide(), e(this).find("figcaption img").css("transform", "none");
        }),
        e("div.owl-buttons").hide()
      ), e("#rex-portfolios").on("click", "figure.rex-portfolio-item", function(
      i
    ) {
      i.preventDefault();
      var a = "";
      (a +=
        '<figure class="rex-modal animated fadeIn rex-effect-1" id="modal-1">'), (a +=
        '<div class="rex-content">'), (a +=
        '<img class="img-responsive col-md-6" src="' +
        e(this).find("img").attr("src") +
        '">'), (a +=
        '<figcaption class="col-md-6 rex-modal-figcaption">' +
        e(this).find("figcaption").html() +
        "</figcaption>"), (a +=
        '<button onclick="removeModal()" class="rex-close-modal"><i class="fa fa-times"></i></button>'), (a +=
        "</div>"), (a += "</figure>"), (a += '<div class="rex-overlay"></div>');
      var o = window.scrollY + 100;
      e(a).insertBefore("#portfolio-intro").css("top", o), e(
        ".rex-modal"
      ).toggleClass("rex-show");
    }), e("body").on("click", function() {
      e("div.rex-overlay").on("click", function() {
        e("figure.rex-modal").length &&
          (
            e(".rex-modal").removeClass("rex-show").remove(),
            e(".rex-overlay").remove()
          );
      });
    }), e("body").hasClass("single") &&
      e(".flexnav li a").each(function() {
        var i = e(this).attr("href");
        e(this).attr("href", "./" + i);
      });
  });
})(jQuery);

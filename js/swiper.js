document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    loop: true,
    direction: "horizontal",
    autoplay: {
      delay: 4000,
    },
    speed: 500,
    spaceBetween: 100,
  });
});

const swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 1,
  loop: true,
  fade: true,
  centerSlide: true,
  grabCursor: true,
  loopfillGroupWithBlank: true,

  autoplay: {
    delay: 5000,
  },

  speed: 400,
  spaceBetween: 100,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
    spaceBetween: 15,
  },
});

import "../lib/swiper-bundle.min.js";

// swiper option
const swiperOption = () => {
  // default option
  const defaultOption = {
    speed: 400,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  // custom paginationOption
  const paginationOption = {
    ...defaultOption,
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return `<span class="current">${current}</span> <span class="bar"></span> <span class="total">${total}</span>`;
      },
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      360: {
        slidesPerView: 1.05,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };

  // thumb type option
  const thumbTopOption = {
    ...paginationOption,
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    breakpoints: {
      360: {
        spaceBetween: 0,
      },
    },
  };
  const thumbBottomOption = {
    slidesPerView: 4,
    spaceBetween: "2%",
    navigation: false,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,
  };

  return {
    defaultOption: defaultOption,
    paginationOption: paginationOption,
    thumbTopOption: thumbTopOption,
    thumbBottomOption: thumbBottomOption,
  };
};

// 스와이퍼 셋업
export const setupSwiper = {
  swiperOptionFnc: swiperOption(), // 위 옵션리스트 한번 받음
  init() {
    this.setupSwiper();
    this.setupSwiperThumb();
  },

  setupSwiper() {
    // 일반 스와이퍼용
    const swiperEl = document.querySelectorAll(".swiper");
    for (let i = 0; i < swiperEl.length; i++) {
      if (swiperEl[i].className.includes("thumbs-")) continue; // thumbs- 클래스 스와이퍼 제외
      new Swiper(swiperEl[i], { ...this.swiperTypeCheck(swiperEl[i]) });
    }
  },

  setupSwiperThumb() {
    // thumb 스와이퍼용
    const swiperThumb = document.querySelectorAll(
      ".archi-component-swiper.type-thumb"
    );

    swiperThumb.forEach((thumb) => {
      const thumbBottomEl = thumb.querySelector(".swiper.thumbs-info");
      const thumbTopEl = thumb.querySelector(".swiper.thumbs-top");
      const bottomSlideCount =
        thumbBottomEl.querySelectorAll(".swiper-slide").length;
      const topSlideCount = thumbTopEl.querySelectorAll(".swiper-slide").length;

      const thumbBottomSwiper = new Swiper(thumbBottomEl, {
        ...this.swiperTypeCheck(thumbBottomEl),
      });
      const thumbTopSwiper = new Swiper(thumbTopEl, {
        ...this.swiperTypeCheck(thumbTopEl),
        thumbs: { swiper: thumbBottomSwiper },
      });
      const navigationOptions = thumbTopSwiper.navigation;
      const paginationOptions = thumbTopSwiper.pagination;

      if (bottomSlideCount === 1 && topSlideCount === 1) {
        if (window.innerWidth < 1024 && paginationOptions) {
          paginationOptions.el.style.display = "none";
        }
        if (thumbBottomSwiper.slides.length === 0) return;
        thumbBottomSwiper.slides[0].style.display = "none";
        if (navigationOptions) {
          navigationOptions.nextEl.parentElement.style.zIndex = 0;

          // navigationOptions.nextEl.parentElement.querySelector(
          //   ".swiper-pagination-wrap"
          // ).style.display = "none";
        }
      }
      thumbTopSwiper.update();
    });
  },

  swiperTypeCheck(type) {
    // 스와이퍼 타입 체크
    if (type.classList.contains("number")) {
      return this.swiperOptionFnc.paginationOption;
    } else if (type.classList.contains("thumbs-top")) {
      return this.swiperOptionFnc.thumbTopOption;
    } else if (type.classList.contains("thumbs-info")) {
      return this.swiperOptionFnc.thumbBottomOption;
    } else {
      return this.swiperOptionFnc.defaultOption;
    }
  },
};

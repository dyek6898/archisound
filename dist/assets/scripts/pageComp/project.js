// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/counter.min.js";

import { TextReveal } from "../uiComp/text_reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  // 전체 프로젝트
  projectFnc01.searchAreaShow();
  projectFnc01.listShowAnimation();
  // 상세
  projectFnc02.firstContShow();
  projectFnc02.secondContShow();

  window.addEventListener("scroll", (e) => projectFnc02.scrollButton(e));
});

const isMobile = window.matchMedia("(max-width: 1024px)").matches;

const basicOptions = {
  revealFirst: {
    initialY: "100%",
    alpha: 0,
    ease: "power4.out",
    duration: 1.2,
    delay: 0,
  },

  revealSecond: {
    initialY: "40px",
    alpha: 0,
    ease: "power4.out",
    duration: 1.2,
    delay: isMobile ? 0.2 : 0.3,
  },

  revealThird: {
    initialY: "40px",
    alpha: 0,
    ease: "power4.out",
    duration: 1,
    delay: isMobile ? 0.4 : 0.6,
  },

  revealfourth: {
    initialY: "40px",
    alpha: 0,
    ease: "power4.out",
    duration: 1,
    delay: isMobile ? 0.6 : 0.9,
  },

  intersection: {
    threshold: 0.1,
  },
};

// 전체 프로젝트
const projectFnc01 = {
  searchAreaShow: () => {
    const container = document.querySelector(".project-search");
    if (!container) return;

    const mainTit = container.querySelector(".text-row");
    const searchArea = container.querySelector(".cont-r");

    const mainTitReveal = new TextReveal(mainTit, basicOptions.revealFirst);
    mainTitReveal.settingGsap(mainTit);

    const searchAreaReveal = new TextReveal(
      searchArea,
      basicOptions.revealSecond
    );
    searchAreaReveal.settingGsap(searchArea);

    // 콜백 함수 생성
    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainTitReveal.revealMainTitle(mainTit);
          searchAreaReveal.revealTextBasic(searchArea);
          observer.unobserve(entry.target);
        }
      });
    };

    const target = container;

    // intersectionObserver 생성
    const observe = new IntersectionObserver(
      intersectionCallback,
      basicOptions.intersection
    );

    observe.observe(target);
  },

  listShowAnimation: () => {
    const container = document.querySelector(".archi-list-wrap");
    if (!container) return;

    const delayOptions = {
      delay: 0,
      initialY: "120px",
      ease: "power4.out",
      duration: 1.2,
    };

    const countTit = container.querySelector(".type-txt");
    const projectList = container.querySelectorAll(".row-list li");
    const moreBtn = container.querySelector(".btn-more");

    const countTitReveal = new TextReveal(countTit, delayOptions);
    countTitReveal.settingGsap(countTit);

    const listRevealOptions = {
      initialY: "120px",
      delay: 0,
      duration: 1.2,
      ease: "power4.out",
    };

    const listTitOptions = {
      initialY: "0",
      delay: 0,
      duration: 1.2,
      ease: "power4.out",
    };

    projectList.forEach((list) => {
      const listTit = list.querySelector(".tit-area");

      const listReveal = new TextReveal(list, listRevealOptions);
      const listTitReveal = new TextReveal(listTit, listTitOptions);

      listReveal.settingGsap(list);
      listTitReveal.settingGsap(listTit);
    });

    const projectListCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countTitReveal.revealMainTitle(countTit);
          const list = entry.target;
          const listTit = list.querySelector(".tit-area");

          const topListReveal = new TextReveal(list, listRevealOptions);
          const listTitReveal = new TextReveal(listTit, listTitOptions);

          topListReveal.revealTextBasic(list);
          listTitReveal.revealTextBasic(listTit);
          observer.unobserve(entry.target);
        }
      });
    };

    const topListObserver = new IntersectionObserver(
      projectListCallback,
      basicOptions.intersection
    );

    projectList.forEach((target) => {
      topListObserver.observe(target);
    });

    const btnRevealOptions = {
      delay: 0,
    };

    if (moreBtn) {
      const moreBtnReveal = new TextReveal(moreBtn, btnRevealOptions);
      moreBtnReveal.settingGsap(moreBtn);

      const btnCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            moreBtnReveal.revealTextBasic(moreBtn);
            observer.unobserve(entry.target);
          }
        });
      };

      const btnObserve = new IntersectionObserver(btnCallback, {
        threshold: 0.3,
      });
      btnObserve.observe(container.querySelector(".archi-btn-wrap"));
    }
  },
};

// PROJECT 02
const projectFnc02 = {
  firstContShow: () => {
    const container = document.querySelector(
      ".archi-sub-content-group.project02"
    );
    if (!container) return;

    const mainTit = container.querySelector(".text-row");
    const badgeGroup = container.querySelector(".badge-group");
    const txtGroup = container.querySelector(".txt-group");
    const swiperArea = container.querySelector(".swiper-area");

    const revealFirst = {
      initialY: "100%",
      alpha: 0,
      ease: "power4.out",
      duration: 1.2,
      delay: 0,
    };

    const revealSecond = {
      initialY: "40px",
      alpha: 0,
      ease: "power4.out",
      duration: 1.2,
      delay: 0.3,
    };

    const revealThird = {
      initialY: "40px",
      alpha: 0,
      ease: "power4.out",
      duration: 1,
      delay: 0.6,
    };

    const mainTitReveal = new TextReveal(mainTit, revealFirst);
    mainTitReveal.settingGsap(mainTit);

    const badgeReveal = new TextReveal(badgeGroup, revealSecond);
    badgeReveal.settingGsap(badgeGroup);

    const txtGroupReveal = new TextReveal(txtGroup, revealThird);
    txtGroupReveal.settingGsap(txtGroup);

    const swiperReveal = new TextReveal(swiperArea, revealThird);
    swiperReveal.settingGsap(swiperArea);

    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainTitReveal.revealMainTitle(mainTit);
          badgeReveal.revealTextBasic(badgeGroup);
          txtGroupReveal.revealTextBasic(txtGroup);
          observer.unobserve(entry.target);
        }
      });
    };

    const target = container.querySelector(".sub-tit-group");
    const observe = new IntersectionObserver(
      intersectionCallback,
      basicOptions.intersection
    );
    observe.observe(target);

    const intersectionCallback02 = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          swiperReveal.revealTextBasic(swiperArea);
          // swiperReveal 실행 후 swiper 업데이트
          document.querySelector(".thumbs-info").swiper.update();
          observer.unobserve(entry.target);
        }
      });
    };

    const observe02 = new IntersectionObserver(
      intersectionCallback02,
      basicOptions.intersection
    );
    observe02.observe(swiperArea);
  },
  secondContShow: () => {
    const container = document.querySelector(".info-area");
    if (!container) return;

    const infoImg = container.querySelector(".info-img .img-inner");
    const infoTxtGroup = container.querySelector(".info-detail .txt-group");
    const infoBoxGroup = container.querySelector(".info-detail .box-group");
    const moreBtn = document.querySelector(".btn-more");

    const revealOptions = {
      delay: 0,
      duration: 1.2,
      initialY: isMobile ? "50px" : "120px",
    };

    const infoImgReveal = new TextReveal(infoImg, revealOptions);
    const infoTxtReveal = new TextReveal(infoTxtGroup, revealOptions);
    const infoBoxReveal = new TextReveal(infoBoxGroup, revealOptions);

    infoImgReveal.settingGsap(infoImg);
    infoTxtReveal.settingGsap(infoTxtGroup);
    infoBoxReveal.settingGsap(infoBoxGroup);

    if (isMobile) {
      // 모바일
      const moCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            infoImgReveal.revealTextBasic(infoImg);
            infoTxtReveal.revealTextBasic(infoTxtGroup);
            observer.unobserve(entry.target);
          }
        });
      };
      const target = container;
      const observe = new IntersectionObserver(
        moCallback,
        basicOptions.intersection
      );
      observe.observe(target);

      const moCallback02 = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            infoBoxReveal.revealTextBasic(infoBoxGroup);
            observer.unobserve(entry.target);
          }
        });
      };
      const target02 = container.querySelector(".box-list");
      const observe02 = new IntersectionObserver(
        moCallback02,
        basicOptions.intersection
      );
      observe02.observe(target02);
    } else {
      // pc
      const pcCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            infoImgReveal.revealTextBasic(infoImg);
            infoTxtReveal.revealTextBasic(infoTxtGroup);
            infoBoxReveal.revealTextBasic(infoBoxGroup);
            observer.unobserve(entry.target);
          }
        });
      };
      const target = container;
      const observe = new IntersectionObserver(
        pcCallback,
        basicOptions.intersection
      );
      observe.observe(target);
    }

    // 버튼 등장
    const btnReveal = new TextReveal(moreBtn, basicOptions.revealFirst);
    btnReveal.settingGsap(moreBtn);

    const callback02 = (entries, observe) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          btnReveal.revealTextBasic(moreBtn);
          observe.unobserve(entry.target);
        }
      });
    };

    const observe02 = new IntersectionObserver(
      callback02,
      basicOptions.intersection
    );
    observe02.observe(document.querySelector(".archi-btn-wrap"));
  },
  scrollButton: (e) => {
    const footer = document.querySelector(".footer");
    const buttons = document.querySelectorAll(".mo-show .btn-more");

    const footerTop = footer?.getBoundingClientRect().top;

    buttons.forEach((el, idx) => {
      if (idx === 0) {
        el.style.display =
          footerTop - 136 <= window.innerHeight ? "none" : "flex";
      } else {
        el.style.opacity = footerTop - 136 <= window.innerHeight ? 1 : 0;
      }
    });
  },
};

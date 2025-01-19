// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/counter.min.js";

import { TextReveal } from "../uiComp/text_reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  // center list
  prCenterFnc01.formAreaShow();
  prCenterFnc01.listShowAnimation();
  prCenterFnc01.btnShowAnimation();
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
    duration: 1.2,
    delay: isMobile ? 0.4 : 0.6,
  },

  revealfourth: {
    initialY: "40px",
    alpha: 0,
    ease: "power4.out",
    duration: 1.2,
    delay: isMobile ? 0.6 : 0.9,
  },

  intersection: {
    threshold: isMobile ? 0.1 : 0.2,
  },
};

// PR CENTER 01
// 리스트 페이지
const prCenterFnc01 = {
  // 셀렉트 박스 영역 등장
  formAreaShow: () => {
    const container = document.querySelector(".archi-form-group");
    if (!container) return;

    // 인스턴스 생성, gsap 세팅
    const formReveal = new TextReveal(container, basicOptions.revealFirst);
    formReveal.settingGsap(container);

    // 콜백 함수 생성
    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          formReveal.revealTextTransfromNone(container);
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

  // 리스트 영역 등장
  listShowAnimation: () => {
    const container = document.querySelector(".archi-pr-wrap");
    if (!container) return;

    // 옵션
    const revealFirst = {
      initialY: "50px",
      delay: isMobile ? 0.2 : 0,
      duration: 1.2,
      ease: "power4.out",
      alpha: 0,
    };

    const countTitReveal = new TextReveal(container, revealFirst);

    countTitReveal.settingGsap(container);

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countTitReveal.revealTextBasic(container);
          observer.unobserve(entry.target);
        }
      });
    };

    const topListObserver = new IntersectionObserver(
      callback,
      basicOptions.intersection
    );
    const target = container;
    topListObserver.observe(target);
  },

  // 버튼 등장
  btnShowAnimation: () => {
    const container = document.querySelector(".archi-btn-wrap");
    if (!container) return;

    const moreBtn = container.querySelector(".btn-more");

    const btnReval = new TextReveal(moreBtn, basicOptions.revealFirst);
    btnReval.settingGsap(moreBtn);

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          btnReval.revealTextBasic(moreBtn);
          observer.unobserve(entry.target);
        }
      });
    };
    const observe = new IntersectionObserver(
      callback,
      basicOptions.intersection
    );
    observe.observe(moreBtn);
  },
};

// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/counter.min.js";

import { TextReveal } from "../uiComp/text_reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  utilsFnc01.infoContShow();
  utilsFnc01.inputContShow();
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

  revealFifth: {
    initialY: "40px",
    alpha: 0,
    ease: "power4.out",
    duration: 1.2,
    delay: isMobile ? 0.8 : 1.2,
  },

  revealSixth: {
    initialY: "40px",
    alpha: 0,
    ease: "power4.out",
    duration: 1.2,
    delay: isMobile ? 1.0 : 1.5,
  },

  intersection: {
    threshold: isMobile ? 0.1 : 0.2,
  },
};

// utill 문의 페이지, UTIL_PG001
const utilsFnc01 = {
  infoContShow: () => {
    const container = document.querySelector(".contact-cont.type01");
    if (!container) return;

    const mainTit = container.querySelectorAll(".text-row");
    const content = container.querySelector(".info-area");

    // instance 생성
    const mainTitReveal = new TextReveal(mainTit, basicOptions.revealFirst);
    const contentReveal = new TextReveal(content, basicOptions.revealSecond);

    // gsap 세팅
    mainTitReveal.settingGsap(mainTit);
    contentReveal.settingGsap(content);

    // callback 함수 생성
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainTitReveal.revealMainTitle(mainTit);
          contentReveal.revealTextBasic(content);
          observer.unobserve(entry.target);
        }
      });
    };

    // intersectionObserver 생성
    const observe = new IntersectionObserver(
      callback,
      basicOptions.intersection
    );

    const target = container;
    observe.observe(target);
  },
  inputContShow: () => {
    const container = document.querySelector(".contact-cont.type02");
    if (!container) return;

    const mainTit = container.querySelectorAll(".text-row");
    const inputArea = container.querySelector(".input-area");
    const moreBtn = document.querySelector(".archi-btn-wrap .btn-more");

    // reveal 옵션
    const inputRevealOptions = {
      initialY: isMobile ? "50px" : "150px",
    };

    // instance 생성
    const mainTitReveal = new TextReveal(mainTit, basicOptions.revealFirst);
    mainTitReveal.settingGsap(mainTit);

    const inputReveal = new TextReveal(inputArea, inputRevealOptions);
    inputReveal.settingGsap(inputArea);

    // 메인 텍스트, 인풋 영역
    const mainTitCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainTitReveal.revealMainTitle(mainTit);
          inputReveal.revealTextTransfromNone(inputArea);
          observer.unobserve(entry.target);
        }
      });
    };

    // intersectionObserve 생성
    const mainTitObserve = new IntersectionObserver(
      mainTitCallback,
      basicOptions.intersection
    );

    const target = container;
    mainTitObserve.observe(target);

    // 버튼
    const revealOptions = {
      delay: 0.2,
    };
    if (moreBtn) {
      const moreBtnReveal = new TextReveal(moreBtn, revealOptions);
      moreBtnReveal.settingGsap(moreBtn);

      const moreBtnCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            moreBtnReveal.revealTextBasic(moreBtn);
            observer.unobserve(entry.target);
          }
        });
      };
      const btnObserve = new IntersectionObserver(
        moreBtnCallback,
        basicOptions.intersection
      );
      btnObserve.observe(moreBtn);
    }
  },
};

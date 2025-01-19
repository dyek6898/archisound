// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/counter.min.js";

import { TextReveal } from "../uiComp/text_reveal.js";

document.addEventListener("DOMContentLoaded", () => {
  // 전체 프로젝트
  projectFnc01.searchAreaShow();
  projectFnc01.listShowAnimation();
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

// some library add here ++
import { gsap } from "../lib/gsap/all.js";
// load 할때 body에 이벤트 걸고 사용할 것들
// 개발의 비동기로 사용하는것 들이 있을수 있는데 그때 이닛 안될수 있음 그때는 개발과 따로 상의 해야함

// if문 사용 필수 !!
import headerScroll from "../pageComp/header.js";
import pageCommon from "../pageComp/ui.js";
import { CustomCursor } from "../uiComp/cursor.js";
import { ParallaxScroll } from "../uiComp/scroll_parallax.js";
import { TextReveal } from "../uiComp/text_reveal.js";
import { HoverLottie } from "../uiComp/hover_lottie.js";
// 새로고침 했을 때 스크롤 위치 최상단으로 이동
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// 페이지 공통 script
const instance1 = new pageCommon();
instance1.init();

// 헤더 공통 script
const instance2 = new headerScroll();
instance2.init();

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
    threshold: isMobile ? 0.1 : 0.3,
  },
};

// intersectionObserver 공통
if (document.querySelectorAll('[data-set-observer="true"]')) {
  document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll('[data-set-observer="true"]');
    elements.forEach((el) => {
      const threshold = parseFloat(el.getAttribute("threshold")) || 0.1;
      const observer = new uxgFn.SetObserver(
        el,
        () => {
          el.classList.add("mg-reveal-animated");
        },
        threshold
      );
      observer.observe();
    });
  });
}

// cursor
if (CustomCursor && !isMobile) {
  const body = document.querySelector("body");
  const customCursor = document.createElement("div");
  customCursor.classList.add("custom-cursor");
  customCursor.setAttribute("id", "custom_cursor");

  const cursorIcon = document.createElement("div");
  cursorIcon.classList.add("custom-cursor-icon");

  customCursor.appendChild(cursorIcon);
  body.appendChild(customCursor);

  const cursorInst = new CustomCursor(document);
  cursorInst.init();
}

// 메뉴 호버시 로티 애니메이션 플레이
if (document.querySelector(".archi-list-wrap") && !isMobile) {
  const listWrap = document.querySelector(".archi-list-wrap");

  const hoverLottieInst = new HoverLottie(listWrap);
  hoverLottieInst.init();
}

// 서브 페이지 공통 함수
//  최상단 이미지 패럴렉스
if (document.querySelector(".archi-sub-top-group .img-area")) {
  const parallxCont = document.querySelector(".archi-sub-top-group");
  const trigger = parallxCont.querySelector(".img-area");
  const parallaxOptions = {
    startY: "-200px",
    endY: "0",
    start: "top 50%",
    end: "bottom top",
    scrub: true,
    markers: false,
  };

  const parallaxEle = isMobile
    ? parallxCont.querySelectorAll(".img-area .mo-show")
    : parallxCont.querySelectorAll(".img-area .pc-show");

  const topParallax = new ParallaxScroll(trigger, parallaxEle, parallaxOptions);
  topParallax.init();
}

// 메인 타이틀, 이미지, tab-list 등장
if (document.querySelector(".archi-sub-top-group .img-area")) {
  const container = document.querySelector(".archi-sub-top-group");
  const mainTit = container.querySelector(".text-row");
  const subTit = container.querySelector(".type-sub-tit");
  const imgArea = container.querySelector(".img-area");
  const tabList = document.querySelector(".archi-component-tab .tab-list");
  const switchBtn = document.querySelector(".archi-component-switch");

  const mainTitReveal = new TextReveal(mainTit, basicOptions.revealFirst);
  const subTitReveal = new TextReveal(subTit, basicOptions.revealSecond);

  mainTitReveal.settingGsap(mainTit);
  subTitReveal.settingGsap(subTit);

  if (imgArea) {
    const imgReveal = new TextReveal(imgArea, basicOptions.revealThird);
    imgReveal.settingGsap(imgArea);
  }

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        mainTitReveal.revealMainTitle(mainTit);
        subTitReveal.revealTextBasic(subTit);
        if (imgArea) {
          const imgReveal = new TextReveal(imgArea, basicOptions.revealThird);
          imgReveal.revealTextBasic(imgArea);
        }
        tabList &&
          gsap.to(tabList, {
            alpha: 1,
            ease: "power4.out",
            duration: 0.4,
            delay: isMobile ? 0.6 : 1.1,
          });
        switchBtn &&
          gsap.to(switchBtn, {
            alpha: 1,
            ease: "power4.out",
            duration: 0.4,
            delay: isMobile ? 0.6 : 1.1,
          });
        observer.unobserve(entry.target);
      }
    });
  };

  const intersectionOptions = {
    revealThirdshold: 0.1,
  };

  const target = container;

  const observe = new IntersectionObserver(
    intersectionCallback,
    intersectionOptions
  );
  observe.observe(target);
}

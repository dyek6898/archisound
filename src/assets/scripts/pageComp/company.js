// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/counter.min.js";
import "../lib/jquery.easing.js";

import { gsap } from "../lib/gsap/all.js";
import { useIntersectionObserver } from "../uiComp/intersection_observer.js";
import { TextReveal } from "../uiComp/text_reveal.js";
import { ImageFadeIn } from "../uiComp/image_fadein.js";

document.addEventListener("DOMContentLoaded", () => {
  // tab -> overview
  devCompanyFunction.compChangeLang();
  devCompanyFunction.fadeInBackgroundImage();
  devCompanyFunction.cont01Animation();
  devCompanyFunction.cont02Animation();
  devCompanyFunction.cont03Animation();
  devCompanyFunction.cont04Animation();
  devCompanyFunction.cont05Animation();
  devCompanyFunction.cont06Animation();
  devCompanyFunction.cont07Animation();
  devCompanyFunction.visionSetting();
  // tab -> vision
  window.addEventListener("scroll", () => {
    devCompanyFunction.handleLangBtn();
    if (window.scrollY) return;
    devCompanyFunction.visionTextAnimation();
    devCompanyFunction.visionListAnimation();
  });
});

const isMobile = window.matchMedia("(max-width: 1024px)").matches;

const devCompanyFunction = {
  // 백그라운드 이미지 점점 커지는 인터렉션 (공통 예정)
  fadeInBackgroundImage: () => {
    if (document.querySelector(".overview-cont01")) {
      const container = document.querySelector(
        ".overview-cont01 .img-full-wrap"
      );

      const fadeInInst = new ImageFadeIn(container);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isMobile) {
              // 모바일
              fadeInInst.imageFadeIn("mobile");
            } else {
              // pc
              fadeInInst.imageFadeIn();
            }
            observer.unobserve(entry.target);
          }
        });
      };

      const intersectionOptions = {
        threshold: isMobile ? 0.01 : 0.2,
      };

      const observer = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observer.observe(container);
    }
  },

  compChangeLang() {
    const switchBtn = document.querySelector(".archi-component-switch");
    if (!switchBtn) return;
    const checkbox = switchBtn.querySelector(".checkbox");

    checkbox.addEventListener("click", () => {
      if (!switchBtn.classList.contains("eng")) {
        switchBtn.classList.add("eng");
      } else {
        switchBtn.classList.remove("eng");
      }
    });
  },

  // 첫 번째 컴포넌트
  cont01Animation: () => {
    if (document.querySelector(".overview-cont01")) {
      const container = document.querySelector(".overview-cont01");
      const mainTitle = container.querySelectorAll(".text-row");
      const subTitle = container.querySelector(".txt-r");

      const target = container.querySelector(".txt-area");
      const mainRevealOptions = {
        initialY: "100%",
        delay: 0,
        duration: 1.2,
        ease: "power4.out",
      };

      const subRevealOptions = {
        initialY: "120px",
        delay: 0.3,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const LeftReveal = new TextReveal(target, mainRevealOptions);
      LeftReveal.settingGsap(mainTitle);

      const rightReveal = new TextReveal(target, subRevealOptions);
      rightReveal.settingGsap(subTitle);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            LeftReveal.revealMainTitle(mainTitle);
            rightReveal.revealSubTitle(subTitle);
            observer.unobserve(entry.target);
          }
        });
      };

      let intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.5,
      };

      const observer = new useIntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observer.observe(target);
    }
  },
  cont02Animation: () => {
    if (document.querySelector(".overview-cont02")) {
      const container = document.querySelector(".overview-cont02");
      const tag = container.querySelector(".small-tit");
      const mainTitle = container.querySelectorAll(".text-row");
      const subTitle = container.querySelector(".txt-area");
      const imageWrap = container.querySelector(".img-area");

      const intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.4,
      };

      const tagRevealOptions = {
        initialY: "40px",
        delay: 0,
        duration: 1.2,
        ease: "power4.out",
      };

      const mainRevealOptions = {
        initialY: "100%",
        delay: 0.2,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const subRevealOptions = {
        initialY: "120px",
        delay: isMobile ? 0.6 : 0.5,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const imgRevealOptions = {
        initialY: "120px",
        delay: isMobile ? 0.4 : 0.8,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const tagReveal = new TextReveal(tag, tagRevealOptions);
      tagReveal.settingGsap(tag);

      const mainTitleReveal = new TextReveal(mainTitle, mainRevealOptions);
      mainTitleReveal.settingGsap(mainTitle);

      const subTitleReveal = new TextReveal(subTitle, subRevealOptions);
      subTitleReveal.settingGsap(subTitle);

      const imgReveal = new TextReveal(imageWrap, imgRevealOptions);
      imgReveal.settingGsap(imageWrap);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tagReveal.revealTextBasic(tag);
            mainTitleReveal.revealMainTitle(mainTitle);
            subTitleReveal.revealSubTitle(subTitle);
            imgReveal.revealTextBasic(imageWrap);
            observer.unobserve(entry.target);
          }
        });
      };

      // options에 따라 인스턴스 생성
      const observer = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      const target = container;

      // 타겟 요소 관찰 시작
      observer.observe(target);
    }
  },
  cont03Animation: () => {
    if (document.querySelector(".overview-cont03")) {
      const container = document.querySelector(".overview-cont03");
      const tag = container.querySelector(".small-tit");
      const mainTitle = container.querySelector(".text-row");
      const counterWrap = container.querySelector(".count-list");
      const counterArr = document.querySelectorAll(".count-num");
      const yearTxt = container.querySelector(".txt-years");

      const intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.2,
      };

      const tagRevealOptions = {
        initialY: "20px",
        delay: 0.3,
        duration: 1.2,
        ease: "power4.out",
      };

      const mainRevealOptions = {
        initialY: "100%",
        delay: 0.5,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const counterRevealOptions = {
        initialY: "50px",
        delay: 0.9,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const yearRevealOptions = {
        initialY: "50px",
        delay: 0.9,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const tagReveal = new TextReveal(tag, tagRevealOptions);
      tagReveal.settingGsap(tag);

      const mainTitleReveal = new TextReveal(mainTitle, mainRevealOptions);
      mainTitleReveal.settingGsap(mainTitle);

      const counterReveal = new TextReveal(counterWrap, counterRevealOptions);
      counterReveal.settingGsap(counterWrap);

      const yearReveal = new TextReveal(yearTxt, yearRevealOptions);
      counterReveal.settingGsap(yearTxt);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // text reveal 부분
            mainTitleReveal.revealMainTitle(mainTitle);
            tagReveal.revealTextBasic(tag);
            counterReveal.revealTextBasic(counterWrap);
            yearReveal.revealTextBasic(yearTxt);

            // counting 부분
            counterArr.forEach((countEl, idx) => {
              const countingNum = Number(countEl.textContent.toLocaleString());
              if (countingNum >= 1000) {
                $(countEl).counter({
                  duration: 2000,
                  countFrom: 0,
                  countTo: countingNum.toLocaleString(),
                  // easing: "easeOutCubic",
                  onComplete: () => {
                    idx && (countEl.innerHTML = countingNum.toLocaleString());
                  },
                });
              } else if (countingNum >= 100) {
                $(countEl).counter({
                  duration: 2000,
                  countFrom: 0,
                  countTo: String(countEl.textContent),
                  // easing: "easeOutCubic",
                });
              } else {
                $(countEl).counter({
                  duration: 2000,
                  countFrom: 0,
                  countTo: String(countEl.textContent),
                  // easing: "easeOutCubic",
                });
              }
            });
            observer.unobserve(entry.target);
          }
        });
      };

      // options에 따라 인스턴스 생성
      const observer = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );

      const target = container;

      // 타겟 요소 관찰 시작
      observer.observe(target);
    }
  },
  cont04Animation: () => {
    if (document.querySelector(".overview-cont04")) {
      const container = document.querySelector(".overview-cont04");
      const mainTitle = container.querySelectorAll(".text-row");
      const subTitle = container.querySelector(".txt-l");
      const imgFlow = container.querySelector(".img-flow-list");

      const intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.3,
      };

      const titTextOptions = {
        initialY: "100px",
        delay: 0,
        duration: 1.2,
        ease: "power4.out",
      };

      const subTitleOptions = {
        initialY: "80px",
        delay: 0.3,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const imgFlowOptions = {
        initialY: isMobile ? "50px" : 0,
        initalAlpha: 1,
        delay: 0.8,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0,
      };

      const mainTitleReveal = new TextReveal(mainTitle, titTextOptions);
      mainTitleReveal.settingGsap(mainTitle);

      const subTitleReveal = new TextReveal(subTitle, subTitleOptions);
      subTitleReveal.settingGsap(subTitle);

      const imgFlowAnimation = new TextReveal(imgFlow, imgFlowOptions);
      isMobile && imgFlowAnimation.settingGsap(imgFlow);

      let intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            mainTitleReveal.revealMainTitle(mainTitle);
            subTitleReveal.revealSubTitle(subTitle);
            isMobile
              ? imgFlowAnimation.revealTextBasic(imgFlow)
              : imgFlowAnimation.revealFlow(imgFlow);
            observer.unobserve(entry.target);
          }
        });
      };

      // options에 따라 인스턴스 생성
      const observer = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );

      // 타겟 요소 관찰 시작
      const target = container;
      observer.observe(target);
    }
  },
  cont05Animation: () => {
    if (document.querySelector(".overview-cont05")) {
      const container = document.querySelector(".overview-cont05");
      const tag = container.querySelector(".small-tit");
      const mainTitle = container.querySelector(".text-row");
      const subTitle = container.querySelector(".sub-tit");
      const logoArea = container.querySelector(".logo-line-wrap");

      let options = {
        threshold: isMobile ? 0.1 : 0.3,
      };

      const tagRevealOptions = {
        initialY: "20px",
        delay: 0,
        duration: 1.2,
        ease: "power4.out",
      };

      const mainRevealOptions = {
        initialY: "100%",
        delay: 0.2,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const subRevealOptions = {
        initialY: "40px",
        delay: 0.6,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0,
      };

      const logoRevealOptions = {
        initialY: "50px",
        delay: 0.9,
      };

      const tagTitleReveal = new TextReveal(tag, tagRevealOptions);
      tagTitleReveal.settingGsap(tag);

      const mainTitleReveal = new TextReveal(mainTitle, mainRevealOptions);
      mainTitleReveal.settingGsap(mainTitle);

      const subTitleReveal = new TextReveal(subTitle, subRevealOptions);
      subTitleReveal.settingGsap(subTitle);

      const logoReveal = new TextReveal(logoArea, logoRevealOptions);
      subTitleReveal.settingGsap(logoArea);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tagTitleReveal.revealTextBasic(tag);
            mainTitleReveal.revealMainTitle(mainTitle);
            subTitleReveal.revealSubTitle(subTitle);
            isMobile && logoReveal.revealTextBasic(logoArea);
            observer.unobserve(entry.target);
          }
        });
      };

      // options에 따라 인스턴스 생성
      const observer = new IntersectionObserver(intersectionCallback, options);

      // 타겟 요소 관찰 시작
      const target = container;
      observer.observe(target);
    }
  },
  cont06Animation: () => {
    if (document.querySelector(".overview-cont06.scroll")) {
      const container = document.querySelector(".overview-cont06");
      const tag = container.querySelector(".small-tit");
      const mainTit = container.querySelectorAll(".text-row");
      const dateList = container.querySelector(".date-list");
      const backgroundBg = container.querySelector(".content-inner");

      gsap.set(tag, {
        alpha: 0,
        y: "20px",
        ease: "power4.out",
      });
      gsap.set(mainTit, {
        alpha: 0,
        y: "100%",
        ease: "power4.out",
      });

      if (isMobile) {
        // 모바일
        const moTimeline = gsap.timeline({
          ease: "power4.out",
        });
        moTimeline.set(dateList, {
          alpha: 0,
          y: "50px",
        });

        let moCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(tag, {
                delay: 0,
                y: 0,
                alpha: 1,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.to(mainTit, {
                delay: 0.2,
                y: 0,
                alpha: 1,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.to(dateList, {
                delay: 0.4,
                y: 0,
                alpha: 1,
                duration: 1.2,
                ease: "power4.out",
              });
              observer.unobserve(entry.target);
            }
          });
        };

        const target = container;
        let options = {
          threshold: isMobile ? 0.1 : 0.2,
        };

        let observer = new IntersectionObserver(moCallback, options);
        observer.observe(target);
      } else {
        // pc
        const textTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: backgroundBg,
            start: "-10% center",
            end: "200% bottom",
            onEnter: () => {
              gsap.to(tag, {
                alpha: 1,
                y: 0,
                ease: "power4.out",
                duration: 1.2,
              });
              gsap.to(mainTit, {
                alpha: 1,
                y: 0,
                delay: 0.3,
                duration: 1.2,
                ease: "power4.out",
              });
            },
          },
        });

        const pcTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: backgroundBg,
            start: "top top",
            end: "200% bottom",
            scrub: 1,
            pin: true,
            pinSpace: false,
            onUpdate: (self) => {
              if (self.direction === -1) {
                gsap.to(tag, {
                  css: { marginTop: 100 },
                });
              } else {
                gsap.to(tag, {
                  css: { marginTop: 0 },
                });
              }
            },
          },
        });
        pcTimeline
          .to(dateList, {
            alpha: 1,
          })
          .to(dateList, {
            bottom: "62%",
            yoyo: true,
            duration: 10,
          });
      }
    }
  },
  cont07Animation: () => {
    if (document.querySelector(".license-cont")) {
      const container = document.querySelector(".license-cont");
      const tag = container.querySelector(".small-tit");
      const mainTitle = container.querySelector(".text-row");
      const subTitle = container.querySelector(".sub-tit");

      const intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.3,
      };

      const tagRevealOptions = {
        initialY: "20px",
        delay: 0,
        duration: 1,
        ease: "power4.out",
      };

      const mainRevealOptions = {
        initialY: "100%",
        delay: 0.3,
        duration: 1,
        ease: "power4.out",
        stagger: 0,
      };

      const subRevealOptions = {
        initialY: "20px",
        delay: 0.6,
        duration: 1,
        ease: "power4.out",
        stagger: 0,
      };

      const tagTitleReveal = new TextReveal(tag, tagRevealOptions);
      tagTitleReveal.settingGsap(tag);

      const mainTitleReveal = new TextReveal(mainTitle, mainRevealOptions);
      mainTitleReveal.settingGsap(mainTitle);

      const subTitleReveal = new TextReveal(subTitle, subRevealOptions);
      subTitleReveal.settingGsap(subTitle);

      let intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tagTitleReveal.revealTextBasic(tag);
            mainTitleReveal.revealMainTitle(mainTitle);
            subTitleReveal.revealSubTitle(subTitle);
            observer.unobserve(entry.target);
          }
        });
      };

      // options에 따라 인스턴스 생성
      let observer = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );

      // 타겟 요소 관찰 시작
      const target = container;
      observer.observe(target);
    }
  },

  // company > vision 텍스트 인터렉션
  // setting
  visionSetting: () => {
    const container = document.querySelector(".vision-cont01 .archi-tit-wrap");
    if (!container) return;

    const tag = container.querySelector(".small-tit");
    const mainTitReveal = container.querySelectorAll(".text-row");

    const tagRevealOptions = {
      initialY: "20px",
      delay: 0,
      duration: 1.2,
    };

    const mainRevealOptions = {
      initialY: "100%",
      delay: 0.2,
      duration: 1.2,
    };

    const tagReveal = new TextReveal(tag, tagRevealOptions);
    const mainTitleReveal = new TextReveal(mainTitReveal, mainRevealOptions);

    tagReveal.settingGsap(tag);
    mainTitleReveal.settingGsap(mainTitReveal);

    const listWrap = document.querySelector(".vision-list");
    const listItem = document.querySelectorAll(".vision-item");

    if (isMobile) {
      // mobile
      listItem.forEach((item) => {
        const itemTag = item.querySelector(".small-tit");
        const itemMainTit = item.querySelector(".text-row");

        gsap.set(item, {
          alpha: 0,
          y: "50px",
          ease: "power4.out",
        });
        gsap.set(itemTag, {
          alpha: 0,
          y: "20px",
          ease: "power4.out",
        });
        gsap.set(itemMainTit, {
          alpha: 0,
          y: "100%",
          ease: "power4.out",
        });
      });
    } else {
      // pc
      const listRevealOptions = {
        initialY: "150px",
        alpha: 0,
        duration: 1.2,
      };

      const listReveal = new TextReveal(container, listRevealOptions);
      listReveal.settingGsap(listWrap);
    }
  },
  handleLangBtn: () => {
    // vision 탭 on 됐을 때 번역 버튼 display none 처리
    const langBtn = document.querySelector(".archi-component-switch");
    const tabList = document.querySelector(".tab-list");
    const btnTabList = document.querySelectorAll(".tab-list .btn-tab");

    btnTabList.forEach((el, idx) => {
      el.addEventListener("click", () => {
        langBtn.style.display = idx ? "none" : "block";
      });
    });
    if (isMobile && btnTabList[0].classList.contains("on")) {
      langBtn.style.display = tabList.classList.contains("fixed")
        ? "none"
        : "block";
    }
  },
  visionTextAnimation: () => {
    if (!document.querySelector(".vision-cont01 .archi-tit-wrap")) return;
    const container = document.querySelector(".vision-cont01 .archi-tit-wrap");
    const tag = container.querySelector(".small-tit");
    const mainTitReveal = container.querySelectorAll(".text-row");
    const target = container;

    const tagRevealOptions = {
      initialY: "20px",
      delay: 0,
      duration: 1.2,
    };

    const mainRevealOptions = {
      initialY: "100%",
      delay: 0.2,
      duration: 1.2,
    };

    const intersectionOptions = {
      threshold: isMobile ? 0.1 : 0.3,
    };

    const tagReveal = new TextReveal(tag, tagRevealOptions);
    const mainTitleReveal = new TextReveal(mainTitReveal, mainRevealOptions);

    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tagReveal.revealTextBasic(tag);
          mainTitleReveal.revealTextBasic(mainTitReveal);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );

    observer.observe(target);
  },

  // company > vision 리스트 인터렉션
  visionListAnimation: () => {
    const container = document.querySelector(".vision-cont01 .vision-wrap");
    if (!container) return;

    const listWrap = container.querySelector(".vision-list");
    const listItem = container.querySelectorAll(".vision-item");
    const target = container;

    const listRevealOptions = {
      initialY: "150px",
      alpha: 0,
      duration: 1.2,
    };

    const listReveal = new TextReveal(container, listRevealOptions);

    if (isMobile) {
      // mobile
      let intersectionOptions = {
        threshold: 0.1,
      };
      listItem.forEach((item) => {
        const itemTag = item.querySelector(".small-tit");
        const itemMainTit = item.querySelector(".text-row");
        const itemImgMask = item.querySelector(".vision-img-mask");

        const intersectionCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(item, {
                y: 0,
                alpha: 1,
                delay: 0,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.to(itemTag, {
                y: 0,
                alpha: 1,
                delay: 0.3,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.to(itemMainTit, {
                y: 0,
                alpha: 1,
                delay: 0.3,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.to(itemImgMask, {
                height: 0,
                delay: 0.7,
                duration: 1.2,
                ease: "power4.out",
              });
              listReveal.revealTextBasic(listWrap);
              observer.unobserve(entry.target);
            }
          });
        };

        const observer = new IntersectionObserver(
          intersectionCallback,
          intersectionOptions
        );
        observer.observe(item);
      });
    } else {
      // pc
      const intersectionOptions = {
        threshold: 0.1,
      };

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            listReveal.revealTextBasic(listWrap);
            observer.unobserve(entry.target);
          }
        });
      };
      const observer = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observer.observe(target);
    }
  },
};

// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/counter.min.js";

import { gsap } from "../lib/gsap/all.js";
import { useIntersectionObserver } from "../uiComp/intersection_observer.js";
import { TextReveal } from "../uiComp/text_reveal.js";
import { ImageFadeIn } from "../uiComp/image_fadein.js";
import { ScrollDown } from "../uiComp/scroll_down.js";

const isMobile = window.matchMedia("(max-width: 1024px)").matches;

document.addEventListener("DOMContentLoaded", () => {
  devCompanyFunction.createLottie();
  devCompanyFunction.fadeInBackgroundImage();
  devCompanyFunction.busiCont01TextReveal();
  devCompanyFunction.busiContTextReveal();
  devCompanyFunction.busiContListReveal();
  devCompanyFunction.scrollTextReveal();
  devCompanyFunction.imageBiggerEvent();
  devCompanyFunction.projectScrollEvent();
  devCompanyFunction.busiInTabBoxShowAnimation();
  devCompanyFunction.subTabBox04ShowAnimation();
  devCompanyFunction.busiInTabCreateLottie();
});

const basicOptions = {
  tagReveal: {
    initialY: "40px",
    delay: 0,
    duration: 1.2,
    ease: "power4.out",
  },

  mainTitReveal: {
    initialY: "100%",
    delay: 0.2,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0,
  },

  subRevealOptions: {
    initialY: "120px",
    delay: isMobile ? 0.4 : 0.5,
    duration: 1.2,
    ease: "power4.out",
    stagger: 0,
  },
};

const mainTitBasicOptions = {
  initialY: "100%",
  alpha: 0,
  ease: "power4.out",
  duration: 1.2,
  delay: 0,
};

const subTitBasicOptions = {
  initialY: "40px",
  alpha: 0,
  ease: "power4.out",
  duration: 1.2,
  delay: isMobile ? 0.2 : 0.3,
};

const otherBasicOptions = {
  initialY: "40px",
  alpha: 0,
  ease: "power4.out",
  duration: 1.2,
  delay: isMobile ? 0.4 : 0.6,
};

const devCompanyFunction = {
  // 비즈니스 1번 ~ 5번 탭 로티 추가
  createLottie: () => {
    const containers = document.querySelectorAll(".business-cont02 .list-wrap");

    if (
      !containers.length ||
      document.querySelector(".business-cont02.bigger-cont")
    )
      return;

    containers.forEach((cont) => {
      const lottieDiv = document.createElement("div");
      lottieDiv.classList.add("lottie-circle");

      cont.appendChild(lottieDiv);

      const lottieAnimation = bodymovin.loadAnimation({
        container: lottieDiv,
        path: "../../assets/images/lottie/archi_circle.json",
        renderer: "svg",
        loop: true,
        autoPlay: true,
        id: "lottieCircle",
      });

      lottieAnimation.play();
    });
  },
  // 백그라운드 이미지 점점 커지는 인터렉션 (공통 예정)
  fadeInBackgroundImage: () => {
    if (!document.querySelector(".fadein-cont")) return;
    const containers = document.querySelectorAll(".fadein-cont");
    containers.forEach((cont) => {
      const fadeInInst = new ImageFadeIn(cont);
      let intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isMobile
              ? fadeInInst.imageFadeIn("mobile")
              : fadeInInst.imageFadeIn();
            observer.unobserve(entry.target);
          }
        });
      };

      let intersectionOptions = {
        threshold: isMobile ? 0.01 : 0.2,
      };
      let target = cont;
      let observe = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observe.observe(target);
    });
  },

  busiCont01TextReveal: () => {
    const containers = document.querySelectorAll(".business-cont01");
    if (!containers) return;

    containers.forEach((cont) => {
      const mainTitle = cont.querySelectorAll(".text-row");
      const subTitle = cont.querySelector(".txt-r");

      let intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.5,
      };
      const target = cont.querySelector(".txt-area");
      const mainRevealOptions = {
        initialY: "100%",
        delay: 0,
        duration: 1.2,
        ease: "power4.out",
      };

      const subRevealOptions = {
        initialY: isMobile ? "50px" : "120px",
        delay: isMobile ? 0.2 : 0.3,
        duration: 1.2,
        ease: "power4.out",
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

      const observer = new useIntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observer.observe(target);
    });
  },

  busiContTextReveal: () => {
    if (!document.querySelector(".company-introduce-cont")) return;
    const containers = document.querySelectorAll(".company-introduce-cont");

    containers.forEach((cont) => {
      const mainTitle = cont.querySelectorAll(".text-row");
      const subTitle = cont.querySelector(".col-txt-list");

      let intersectionOptions = {
        threshold: isMobile ? 0.1 : 0.2,
      };

      const target = cont;
      const mainRevealOptions = {
        initialY: "100%",
        delay: 0,
        duration: 1.2,
        ease: "power4.out",
      };

      const subRevealOptions = {
        initialY: "50px",
        delay: isMobile ? 0.2 : 0.3,
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

      const observer = new useIntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observer.observe(target);
    });
  },
  busiContListReveal: () => {
    if (document.querySelector(".business-cont02")) {
      const containers = document.querySelectorAll(".business-cont02");
      containers.forEach((cont) => {
        const colItems = cont.querySelectorAll(".col-item");

        const itemRevealOptions = {
          initialY: "120px",
          duration: 1.2,
          ease: "power4.out",
        };

        const intersectionCallback02 = (entries, observer) => {
          entries.forEach((entry) => {
            const innerTarget = entry.target.querySelector(".col-inner");
            const itemReveal = new TextReveal(innerTarget, itemRevealOptions);
            itemReveal.settingGsap(innerTarget);
            if (entry.isIntersecting) {
              itemReveal.revealTextBasic(innerTarget);
              observer.unobserve(entry.target);
            }
          });
        };

        let intersectionOptions02 = {
          threshold: isMobile ? 0.1 : 0.1,
        };

        const observer02 = new IntersectionObserver(
          intersectionCallback02,
          intersectionOptions02
        );
        colItems.forEach((item) => {
          observer02.observe(item);
        });
      });
    }
  },
  scrollTextReveal: () => {
    const containers = document.querySelectorAll(".scroll-text-cont");
    if (!containers) return;

    containers.forEach((cont) => {
      const tag = cont.querySelector(".small-tit");
      const mainTit = cont.querySelectorAll(".text-row");
      const dateList = cont.querySelector(".date-list");
      const backgroundVideo = cont.querySelector(".background-video");

      // gsap 세팅 (공통)
      gsap.set(tag, {
        y: "20px",
        alpha: 0,
        ease: "power4.out",
      });
      gsap.set(mainTit, {
        y: "100%",
        alpha: 0,
        ease: "power4.out",
      });
      gsap.set(dateList, {
        ease: "power4.out",
      });

      gsap.set(dateList, {
        y: "130%",
      });

      // 모바일
      if (isMobile) {
        //gsap 세팅
        gsap.set(tag, {
          y: "20px",
          alpha: 0,
          ease: "power4.out",
        });

        gsap.set(mainTit, {
          y: "100%",
          alpha: 0,
          ease: "power4.out",
        });

        gsap.set(dateList, {
          y: "50px",
          alpha: 0,
          ease: "power4.out",
        });
        gsap.set(backgroundVideo.querySelector("video"), {
          alpha: 0,
        });

        // 비디오 타임라인
        const videoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: cont,
            start: "top center",
            end: "bottom 70%",
            onEnter: () => {
              gsap.to(backgroundVideo, {
                autoAlpha: 1,
                display: "block",
                duration: 0.2,
                ease: "power4.out",
                onComplete: () => {
                  gsap.to(backgroundVideo.querySelector("video"), {
                    alpha: 0.5,
                    duration: 1.2,
                    ease: "power4.out",
                  });
                },
              });
            },
            onLeave: () => {
              gsap.to(backgroundVideo, {
                autoAlpha: 0,
                display: "none",
                duration: 1.2,
                ease: "power4.out",
                onComplete: () => {
                  backgroundVideo.style.opacity = 0;
                },
              });
            },
            onEnterBack: () => {
              gsap.to(backgroundVideo, {
                autoAlpha: 1,
                display: "block",
                duration: 1.2,
                ease: "power4.out",
                onComplete: () => {
                  gsap.to(backgroundVideo.querySelector("video"), {
                    alpha: 0.5,
                  });
                },
              });
            },
            onLeaveBack: () => {
              gsap.to(backgroundVideo, {
                autoAlpha: 0,
                display: "none",
                duration: 1.2,
                ease: "power4.out",
                onComplete: () => {
                  backgroundVideo.style.opacity = 0;
                },
              });
            },
          },
        });
      } else {
        // pc
        const videoBlockControl = gsap.timeline({
          scrollTrigger: {
            trigger: cont,
            start: "10% 80%",
            end: "50% 60%",
            scrub: 1,
          },
        });
        videoBlockControl.to(backgroundVideo, {
          display: "block",
          autoAlpha: 1,
          ease: "power4.out",
        });
        const videoNoneControl = gsap.timeline({
          scrollTrigger: {
            trigger: cont,
            start: "90% 60%",
            end: "105% 60%",
            scrub: 1,
          },
        });
        videoNoneControl.to(backgroundVideo, {
          autoAlpha: 0,
          ease: "power4.out",
          display: "none",
        });
      }

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isMobile) {
              // 모바일
              // gsap 세팅

              // 글씨 나오는 부분
              gsap.to(tag, {
                alpha: 1,
                y: 0,
                delay: 0.2,
                duration: 1.2,
                ease: 'power4.out'
              });
              gsap.to(mainTit, {
                alpha: 1,
                y: 0,
                delay: 0.4,
                duration: 1.2,
                ease: 'power4.out'
              });
              gsap.to(dateList, {
                alpha: 1,
                y: 0,
                delay: 0.6,
                duration: 1.2,
                ease: 'power4.out'
              });
              observer.unobserve(entry.target);
            } else {
              // pc
              gsap.to(tag, {
                alpha: 1,
                y: 0,
                delay: 0.3,
                ease: "power4.out",
                duration: 1.2,
              });
              gsap.to(mainTit, {
                alpha: 1,
                y: 0,
                delay: 0.5,
                duration: 1.2,
                ease: "power4.out",
              });
            }
          }
        });
      };
      const intersectionOptions = {
        threshold: 0,
      };
      const observe = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observe.observe(cont);
    });
  },

  // 이미지 커지면서 패럴렉스 되는 부분
  imageBiggerEvent: () => {
    const containers = document.querySelectorAll(".bigger-cont");
    if (!containers) return;

    containers.forEach((cont) => {
      const imgWrap = cont.querySelector(".img-dim-wrap");
      const imgArea = cont.querySelector(".img-area");
      const imgAreaMask = cont.querySelector(".img-area-mask");
      const imgTit = cont.querySelector(".img-tit");
      const dim = cont.querySelector(".dim");
      const dimTit = cont.querySelector(".center-txt");

      if (isMobile) {
        // 모바일
        gsap.set(dimTit, {
          y: "200px",
          alpha: 0,
        });

        gsap.fromTo(
          imgWrap,
          {
            backgroundPositionY: "-100px",
          },
          {
            backgroundPositionY: "100px",
            scrollTrigger: {
              trigger: imgWrap,
              start: "top 40%",
              end: "120% top",
              scrub: 1,
            },
          }
        );

        const moIntersectionCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(dimTit, {
                y: 0,
                alpha: 1,
                delay: 0.2,
                duration: 1.0,
                ease: "power4.out",
              });
              observer.unobserve(entry.target);
            }
          });
        };
        const intersectionOptions = {
          threshold: 0.3,
        };
        const target = imgWrap;
        const observe = new IntersectionObserver(
          moIntersectionCallback,
          intersectionOptions
        );
        observe.observe(target);
      } else {
        // pc
        gsap.set(dimTit, {
          x: "0px",
          y: "500px",
          xPercent: -50,
          yPercent: -50,
          alpha: 0,
        });

        const intersectionCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const t1 = gsap.timeline({
                alpha: 0,
                duration: 1.2,
                ease: "power4.out",
                onStart: () => {
                  imgAreaMask.style.setProperty("--border-x", 0);
                  imgAreaMask.style.setProperty("--border-y-top", 0);
                  gsap.to(dim, {
                    duration: 0.8,
                    alpha: 0.6,
                    ease: "power4.out",
                  });
                  gsap.fromTo(
                    imgArea,
                    {
                      backgroundPositionY: "-100px",
                    },
                    {
                      backgroundPositionY: "100px",
                      scrollTrigger: {
                        trigger: imgArea,
                        start: "top 40%",
                        end: "120% top",
                        scrub: 1,
                      },
                    }
                  );
                },
              });
              gsap.to(dimTit, {
                x: "0",
                y: "0",
                xPercent: -50,
                yPercent: -50,
                delay: 0.6,
                duration: 0.8,
                ease: "power4.out",
                alpha: 1,
              });
              observer.unobserve(entry.target);
            }
          });
        };
        const intersectionOptions = {
          threshold: 0.2,
        };
        const observe = new IntersectionObserver(
          intersectionCallback,
          intersectionOptions
        );
        observe.observe(cont);
      }
    });
  },

  // 평가단계 대표 프로젝트 영역
  projectScrollEvent: () => {
    const containers = document.querySelectorAll(".list-down-cont");
    if (!containers.length) return;

    containers.forEach((cont) => {
      const tag = cont.querySelectorAll(".small-tit");
      const mainTitle = cont.querySelectorAll(".text-row");
      const arrowBtn = cont.querySelector(".btn-area");
      const listWrap = isMobile
        ? cont.querySelectorAll(".archi-component-swiper")
        : cont.querySelectorAll(".archi-list-wrap");
      const projectList = cont.querySelectorAll(".row-list li");
      const moreBtn = cont.querySelector(".btn-more");

      const listWrapRevealOptions = {
        initialY: "20px",
        delay: 0.6,
        duration: 1.2,
        ease: "power4.out",
      };

      const moreBtnOptions = {
        delay: 0.9,
      };

      const tagReveal = new TextReveal(tag, basicOptions.tagReveal);
      const arrowBtnReveal = new TextReveal(arrowBtn, basicOptions.tagReveal);
      const mainTitleReveal = new TextReveal(mainTitle, mainTitBasicOptions);
      const listWrapReveal = new TextReveal(listWrap, listWrapRevealOptions);
      const moreBtnReveal = new TextReveal(moreBtn, moreBtnOptions);

      // 세팅
      mainTitleReveal.settingGsap(mainTitle);
      tagReveal.settingGsap(tag);
      arrowBtnReveal.settingGsap(arrowBtn);
      listWrapReveal.settingGsap(listWrap);
      moreBtnReveal.settingGsap(moreBtn);

      const observerOptionsTop = {
        threshold: 0.1,
      };

      const target = cont;

      const intersectionCallback = (entries, obsrever) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tagReveal.revealTextBasic(tag);
            mainTitleReveal.revealMainTitle(mainTitle);
            arrowBtnReveal.revealTextBasic(arrowBtn);
            listWrapReveal.revealTextBasic(listWrap);
            projectList.forEach((list) => {
              const revealImg = new ScrollDown(list);
              revealImg.init();
            });

            obsrever.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(
        intersectionCallback,
        observerOptionsTop
      );
      observer.observe(target);

      const intersectionCallback02 = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isMobile && moreBtnReveal.revealTextBasic(moreBtn);
            observer.unobserve(entry.target);
          }
        });
      };

      const observerOptionsBottom = {
        threshold: 0.5,
      };

      const observer02 = new IntersectionObserver(
        intersectionCallback02,
        observerOptionsBottom
      );
      isMobile && observer02.observe(target);
    });
  },

  // 네 번째 탭(시공단계) in-tab 등장 이벤트
  subTabBox04ShowAnimation: () => {
    if (document.querySelector(".sub-tab-area.tab4")) {
      const container = document.querySelector(".sub-tab-area.tab4");
      const tabMainTit = container.querySelector(".text-row");
      const inTabList = container.querySelector(".in-tab-list");

      const tabMainTitReveal = new TextReveal(tabMainTit, mainTitBasicOptions);
      const inTabListReveal = new TextReveal(inTabList, subTitBasicOptions);

      tabMainTitReveal.settingGsap(tabMainTit);
      inTabListReveal.settingGsap(inTabList);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tabMainTitReveal.revealMainTitle(tabMainTit);
            inTabListReveal.revealMainTitle(inTabList);
            observer.unobserve(entry.target);
          }
        });
      };

      const intersectionOptions = {
        threshold: 0.05,
      };

      const observe = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observe.observe(container);
    }
  },

  // business > 평가단계(5번째 탭)
  // 탭 안에 스와이퍼 나타나는 이벤트
  busiInTabBoxShowAnimation: () => {
    const inTabWrap = document.querySelector(".archi-component-tab.tab6");
    if (!inTabWrap) return;

    // 첫 번째 탭 (실내음향 성능평가)
    const containerEx = inTabWrap.querySelector(".in-tab-box");
    const slides = containerEx.querySelectorAll(".swiper-slide");
    const swiperBox = containerEx.querySelector(".swiper-area");
    const mainTitWrap01 = containerEx.querySelector(".tit.slide01");
    const mainTitWrap02 = containerEx.querySelector(".tit.slide02");
    const mainTit01 = mainTitWrap01.querySelector(".text-row");
    const mainTit02 = mainTitWrap02.querySelector(".text-row");
    const subTit01 = containerEx.querySelector(".col-txt-list.slide01");
    const subTit02 = containerEx.querySelector(".col-txt-list.slide02");

    gsap.set(mainTit01, {
      y: "100%",
      alpha: 0,
    });

    gsap.set(mainTit02, {
      y: "100%",
      alpha: 0,
    });

    gsap.set(subTit01, {
      y: "40px",
      alpha: 0,
    });

    gsap.set(subTit02, {
      y: "40px",
      alpha: 0,
    });

    gsap.set(swiperBox, {
      y: "40px",
      alpha: 0,
    });

    const swiperExcept = document.querySelector(".swiper-except");

    swiperExcept.swiper.on("slideChangeTransitionEnd", (swiper) => {
      if (swiper.activeIndex === 0) {
        mainTitWrap02.style.display = "none";
        subTit02.style.display = "none";
        mainTitWrap01.style.display = "block";
        subTit01.style.display = "block";
      } else {
        mainTitWrap01.style.display = "none";
        subTit01.style.display = "none";
        mainTitWrap02.style.display = "block";
        subTit02.style.display = "block";
      }
    });

    // intersectionObserver callback 함수 생성
    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(mainTit01, {
            alpha: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
          });
          gsap.to(subTit01, {
            y: 0,
            alpha: 1,
            delay: 0.3,
            duration: 1.2,
            ease: "power4.out",
          });
          gsap.to(swiperBox, {
            y: "40px",
            alpha: 1,
            y: 0,
            delay: 0.6,
            duration: 1.2,
            ease: "power4.out",
          });
          swiperExcept.swiper.on("slideChangeTransitionEnd", (swiper) => {
            if (swiper.activeIndex) {
              gsap.to(mainTit02, {
                alpha: 1,
                y: 0,
                duration: 1.2,
                ease: "power4.out",
              });
              gsap.to(subTit02, {
                y: 0,
                alpha: 1,
                delay: 0.3,
                duration: 1.2,
                ease: "power4.out",
              });
            }
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observe = new IntersectionObserver(intersectionCallback, {
      threshold: 0,
      rootMargin: "200px",
    });

    slides.forEach((slide) => {
      observe.observe(slide);
    });

    // 나머지 탭
    const containers = inTabWrap.querySelectorAll(".in-tab-box");

    containers.forEach((cont, idx) => {
      if (!idx) return;
      const mainTit = cont.querySelector(".text-row");
      const subTit = cont.querySelector(".col-txt-list");
      const swiperBox = cont.querySelector(".swiper-area");

      const mainTitReveal = new TextReveal(mainTit, mainTitBasicOptions);
      const subTitReveal = new TextReveal(subTit, subTitBasicOptions);
      const swiperBoxReveal = new TextReveal(swiperBox, otherBasicOptions);

      mainTitReveal.settingGsap(mainTit);
      subTitReveal.settingGsap(subTit);
      swiperBoxReveal.settingGsap(swiperBox);

      const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            swiperBoxReveal.revealTextBasic(swiperBox);
            mainTitReveal.revealMainTitle(mainTit);
            subTitReveal.revealSubTitle(subTit);
            observer.unobserve(entry.target);
          }
        });
      };
      const intersectionOptions = {
        threshold: 0.1,
      };
      const observe = new IntersectionObserver(
        intersectionCallback,
        intersectionOptions
      );
      observe.observe(cont);
    });
  },
  busiInTabCreateLottie: () => {
    const container = document.querySelector('.tab-box.tab6')
    if (!container) return;
    const swiperWrap = container.querySelectorAll('.in-tab-box .row-tab-wrap')
    swiperWrap.forEach(cont => {
      const lottieDiv = document.createElement("div");
      lottieDiv.classList.add("lottie-circle");

      cont.appendChild(lottieDiv);

      const lottieAnimation = bodymovin.loadAnimation({
        container: lottieDiv,
        path: "../../assets/images/lottie/archi_circle.json",
        renderer: "svg",
        loop: true,
        autoPlay: true,
        id: "lottieCircle",
      });

      lottieAnimation.play();
    })

  },
};

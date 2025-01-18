// library import
import "../lib/swiper-bundle.min.js";
import "../lib/jquery.js";
import "../lib/lottie.min.js";
import { gsap, ScrollTrigger } from "../lib/gsap/all.js";

// module import
import { TextReveal } from "../uiComp/text_reveal.js";
import { TextFill } from "../uiComp/text_fill.js";
import { ParallaxScroll } from "../uiComp/scroll_parallax.js";
import { ScrollDown } from "../uiComp/scroll_down.js";
import { ImageChange } from "../uiComp/image_change.js";

const isMobile = window.matchMedia("(max-width: 1024px)").matches;

document.addEventListener("DOMContentLoaded", () => {
  const $mainStyle = document.querySelector("#main-style");
  if ($mainStyle) {
    document
      .querySelector("head")
      .removeChild(document.querySelector("#main-style"));
  }
  document.querySelector("#wrap").style.display = "block";
  document.querySelector("body").style.background = "#ffffff";

  devMainFunction.registerScrollTrigger();

  if (sessionStorage.getItem("noIntro")) {
    sessionStorage.removeItem("noIntro");
    devMainFunction.soundPlayButton();
    devMainFunction.mainTextShow(0);
    devMainFunction.topParallaxAnimation(0);
  } else {
    document.querySelector("body").style.overflow = "hidden";
    devMainFunction.fnIntroMotion();
  }
  devMainFunction.textFillAnimation();
  devMainFunction.mainScrollAnimation();
  devMainFunction.prideContAnimation();
  devMainFunction.projectAreaScrollEvent();
  devMainFunction.prCenterMouseEvent();
  !isMobile && devMainFunction.handleClipPathText();
});

const devMainFunction = {
  // gsap scrollTrigger pluging 등록
  registerScrollTrigger: () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    const menuBtn = document.querySelectorAll(".btn-area button");
    const closeBtn = document.querySelectorAll(".btn-utill-close");

    menuBtn.forEach((button) => {
      button.addEventListener("click", () => {
        lenis.stop();
      });
    });

    closeBtn.forEach((closeButton) => {
      closeButton.addEventListener("click", () => {
        lenis.start();
      });
    });

    // 부드러운 스크롤
    if (ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 500);
      });
      gsap.ticker.lagSmoothing(0);
    }
  },

  // 인트로 모션
  fnIntroMotion() {
    window.scrollTo(0, 0);

    // HTML 요소 생성 및 추가
    const introArea = document.createElement("div");
    introArea.classList.add("intro-area");

    const introLottie = document.createElement("div");
    introLottie.classList.add("intro-lottie");

    const introBg01 = document.createElement("div");
    introBg01.classList.add("intro-bg01");

    const introBg02 = document.createElement("div");
    introBg02.classList.add("intro-bg02");

    const btnEnterWrap = document.createElement("div");
    btnEnterWrap.classList.add("btn-enter-wrap");

    const btnEnter = document.createElement("button");
    btnEnter.classList.add("btn-enter");

    const fadeEl01 = document.createElement("span");
    fadeEl01.classList.add("fade-01");

    const fadeEl02 = document.createElement("span");
    fadeEl02.classList.add("fade-02");

    const fadeEl03 = document.createElement("span");
    fadeEl03.classList.add("fade-03");

    const btnEnterIco = document.createElement("i");
    btnEnterIco.classList.add("btn-enter-ico");

    const textEnter = document.createElement("p");
    textEnter.classList.add("text-enter");
    textEnter.textContent = "사운드와 함께 아키사운드 시작하기";

    // lottie 생성
    const animation1 = bodymovin.loadAnimation({
      container: introLottie,
      path: "../../assets/images/lottie/intro_animation01.json",
      renderer: "svg",
      loop: false,
      autoplay: false,
    });

    if (!isMobile) {
      // pc
      gsap.to(fadeEl01, {
        scale: 1.1,
        duration: 0.4,
        repeat: -1,
        yoyo: true, // 왕복 애니메이션
      });

      gsap.to(fadeEl02, {
        scale: 3.6,
        alpha: 0,
        duration: 0.9,
        repeat: -1,
      });
    } else {
      // mobile
      gsap.to(fadeEl01, {
        scale: 1.1,
        duration: 0.4,
        repeat: -1,
        yoyo: true, // 왕복 애니메이션
      });
      gsap.to(fadeEl02, {
        scale: 2.8,
        alpha: 0,
        duration: 0.9,
        repeat: -1,
      });
    }

    btnEnter.appendChild(btnEnterIco);
    btnEnter.appendChild(fadeEl01);
    btnEnter.appendChild(fadeEl02);
    btnEnter.appendChild(fadeEl03);
    btnEnterWrap.appendChild(btnEnter);
    btnEnterWrap.appendChild(textEnter);

    introArea.appendChild(introLottie);
    introArea.appendChild(introBg01);
    introArea.appendChild(introBg02);
    introArea.appendChild(btnEnterWrap);
    document.body.appendChild(introArea);

    const playIntro = (clicked) => {
      btnEnterWrap.style.display = "none";
      animation1.play();

      const audio = document.createElement("audio");
      const soundSource = document.createElement("source");
      audio.classList.add("audio-type01");

      soundSource.src =
        "https://uxdev.etribe.co.kr/Archisound-front/dist/assets/images/mp4/intro_bgm.mp3";
      soundSource.type = "audio/mpeg";
      audio.appendChild(soundSource);
      document.body.appendChild(audio);

      setTimeout(() => {
        if (!clicked) return;
        audio.play().catch((error) => {
          // Autoplay was blocked. Do something
        });
      }, 100);

      const audio2 = document.createElement("audio");
      const soundSource2 = document.createElement("source");
      audio2.classList.add("audio-type02");

      soundSource2.src =
        "https://uxdev.etribe.co.kr/Archisound-front/dist/assets/images/mp4/background_bgm.mp3";
      soundSource2.type = "audio/mpeg";
      audio2.appendChild(soundSource2);
      document.body.appendChild(audio2);

      if (clicked) {
        devMainFunction.soundPlayButton(audio, audio2, audio.paused);
      } else {
        devMainFunction.soundPlayButton(audio, audio2);
      }

      setTimeout(() => {
        if (!clicked) return;
        audio2.play().catch((error) => {
          // Autoplay was blocked. Do something
        });
      }, 4000);

      removeIntro();
    };
    const btnEnterPlayTime = setTimeout(() => {
      playIntro();
      devMainFunction.mainTextShow();
      devMainFunction.topParallaxAnimation();
    }, 3000);

    btnEnter.addEventListener("click", (e) => {
      clearTimeout(btnEnterPlayTime);
      playIntro(e.target);
      devMainFunction.mainTextShow();
      devMainFunction.topParallaxAnimation();
    });

    const removeIntro = () => {
      gsap.set(introBg01, { y: 0 });
      gsap.set(introBg02, { y: 0 });
      gsap.set(introLottie, { autoAlpha: 1, scale: 1 });
      gsap.to(introBg01, {
        y: "-100%",
        delay: 3.95,
        duration: 0.7,
        ease: "power3.inOut",
      });
      gsap.to(introBg02, {
        y: "-100%",
        delay: 3.95,
        duration: 0.85,
        ease: "power3.inOut",
      });
      gsap.to(introLottie, {
        autoAlpha: 0,
        delay: 3.9,
        duration: 0.3,
        scale: 0.95,
      });

      setTimeout(() => {
        document.body.style.overflow = "auto";
      }, 4000);

      // animation 실행 후 요소 제거
      setTimeout(function () {
        introArea.parentNode.removeChild(introArea);
      }, 5100);
    };
  },

  soundPlayButton(audio1, audio2, clicked) {
    const soundPlayBtn = document.createElement("button");
    const div = document.createElement("div");
    div.classList.add("play-btn-wrap");
    div.appendChild(soundPlayBtn);
    soundPlayBtn.classList.add("sound-play-btn");
    document.querySelector(".archi-main-wrap").appendChild(div);

    if (!audio1) {
      audio1 = {
        paused: true,
      };
      audio2 = document.createElement("audio");
      const soundSource2 = document.createElement("source");
      audio2.classList.add("audio-type02");

      soundSource2.src =
        "https://uxdev.etribe.co.kr/Archisound-front/dist/assets/images/mp4/background_bgm.mp3";
      soundSource2.type = "audio/mpeg";
      audio2.appendChild(soundSource2);
      document.body.appendChild(audio2);
    }

    if (!audio1.paused || clicked) {
      soundPlayBtn.classList.add("on");
    } else {
      soundPlayBtn.classList.add("off");
    }

    // 재생 버튼 음악 재생
    soundPlayBtn.addEventListener("click", () => {
      soundPlayBtn.classList.toggle("on");
      soundPlayBtn.classList.toggle("off");

      if (soundPlayBtn.classList.contains("off")) {
        audio2.pause();
      } else if (soundPlayBtn.classList.contains("on")) {
        audio2.play();
      }
    });

    // 화면밖으로 나갔을때 오디오 정지
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && !audio2.paused) {
        audio2.pause();
        soundPlayBtn.classList.add("off");
        soundPlayBtn.classList.remove("on");
      }
    });
  },

  // 최상단 텍스트 애니메이션
  mainTextShow: (startDelay = 4) => {
    const container = document.querySelector(".top-cont01");
    if (!container) return;

    const mainTitPc = container.querySelector(".top-text-center.pc-show");
    const mainTitMo = container.querySelector(".top-text-center.mo-show");
    const textMain = container.querySelectorAll(".text-row");
    const textRight = container.querySelector(".top-text-r");
    const textLeft = container.querySelector(".top-text-l");

    // 메인 텍스트
    const mainTitOptions = {
      delay: startDelay + 0.4,
    };

    // 왼쪽 텍스트
    const leftTxtOptions = {
      initialY: "30px",
      delay: startDelay + 0.9,
      duration: 1.2,
      ease: "power4.out",
    };

    // 오른쪽 텍스트
    const rightTxtOptions = {
      y: "30px",
      delay: startDelay + 0.4,
      duration: 1.2,
      ease: "power4.out",
    };

    const textMainReveal = new TextReveal(textMain, mainTitOptions);
    const textRightReval = new TextReveal(textRight, rightTxtOptions);
    const textLeftReveal = new TextReveal(textLeft, leftTxtOptions);

    textRightReval.settingGsap(textRight);
    textLeftReveal.settingGsap(textLeft);

    isMobile
      ? textMainReveal.revealSkew(mainTitMo.querySelectorAll(".text-row"))
      : textMainReveal.revealSkew(mainTitPc.querySelectorAll(".text-row"));
    textRightReval.revealTextBasic(textRight);
    textLeftReveal.revealTextBasic(textLeft);
  },

  // 텍스트 채워지는 애니메이션
  textFillAnimation: () => {
    const containers = document.querySelectorAll(".top-cont03");
    if (!containers) return;

    containers.forEach((container) => {
      const textFillAnimation = new TextFill(container);
      const intersectionOptions01 = {
        threshold: 0.1,
      };
      const revealOptions01 = {
        y: "100px",
        delay: 0.4,
        duration: 0.8,
        ease: "power4.out",
      };
      textFillAnimation.init();
    });
  },

  // 탑 패럴랙스
  topParallaxAnimation: (startDelay = 4) => {
    const parallaxWrap = document.querySelector(".top-cont02");
    if (!parallaxWrap) return;

    const parallaxEle = document.querySelector(".top-visual-bg");

    const revealOptions01 = {
      initialY: "60px",
      delay: startDelay + 1,
      duration: 1,
      ease: "power4.out",
    };
    const parallaxOptions01 = {
      startY: "-400px",
      start: "0% 95%",
      end: "120% top",
      scrub: true,
      markers: false,
    };

    const parallaxReveal = new TextReveal(parallaxWrap, revealOptions01);
    const topParallax = new ParallaxScroll(
      parallaxWrap,
      parallaxEle,
      parallaxOptions01
    );

    parallaxReveal.settingGsap(parallaxWrap);
    parallaxReveal.revealTextBasic(parallaxWrap);
    topParallax.init();
  },

  // 시공단계 스크롤 영역
  mainScrollAnimation: () => {
    const mainContainer = document.querySelector(".main-scroll-container");
    if (!mainContainer) return;

    const fixedBg = mainContainer.querySelector(".fixed-bg");
    const fixedTit = mainContainer.querySelector(".fixed-tit");
    const scrollContents = mainContainer.querySelectorAll(".cont-inner");
    const titTexts = mainContainer.querySelectorAll(".word-change-wrap .sub");
    const contentTitles = mainContainer.querySelectorAll(
      ".scroll-cont .tit-area"
    );
    const backgroundVideo = fixedBg.querySelector("video");

    // 화면 높이에 따라 threshold값 다르게 조절
    const getWindowHeight = () => {
      let height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      return height;
    };

    let windowHeight = getWindowHeight();
    const intersectionOptions = {
      rootMargin: "-200px 0px 0px 0px",
      threshold: windowHeight > 700 ? 0.01 : 0.1,
    };
    // BG 색상 변경
    gsap.to(fixedBg, {
      scrollTrigger: {
        trigger: mainContainer,
        start: isMobile ? "-10% 30%" : "-20% 30%",
        end: isMobile ? "-10% top" : "-19% top",
        scrub: 1,
      },
      display: "block",
      duration: 0.6,
      alpha: 1,
      ease: "power4.out",
    });

    const outTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: isMobile ? "96% 40%" : "105% 40%",
        end: isMobile ? "98% 38%" : "108% 38%",
        scrub: 1,
      },
    });
    outTimeline
      .to(fixedBg, {
        alpha: 0,
        duration: 0.6,
        ease: "power4.out",
      })
      .to(fixedBg, {
        display: "none",
      });

    // 이퀄라이저 등장 (enter)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainContainer,
          start: isMobile ? "-10% 30%" : "-20% 30%",
          end: isMobile ? "-10% top" : "-10% top",
          scrub: 1,
        },
      })
      .to(backgroundVideo, {
        alpha: 0.5,
      });
    // 이퀄라이저 사라짐 (leave)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainContainer,
          start: "90% 40%",
          end: isMobile ? "92% 38%" : "104% 38%",
          scrub: 1,
        },
      })
      .to(backgroundVideo, {
        autoAlpha: 0,
      });

    // 이퀄라이저 사라졌다가 나타남 (enterBack)
    gsap.from(backgroundVideo, {
      alpha: 0.5,
      scrollTrigger: {
        trigger: mainContainer,
        start: "90% 40%",
        end: isMobile ? "92% 38%" : "104% 38%",
        scrub: 1,
      },
    });
    // 이퀄라이저 나타났다가 사라짐 (leaveBack)
    gsap.from(backgroundVideo, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: mainContainer,
        start: isMobile ? "-10% 30%" : "-20% 30%",
        end: isMobile ? "-10% top" : "-10% top",
        scrub: 1,
      },
    });

    // 메인 스크롤 고정 타이틀 수정 부분
    // 메인 스크롤 고정 타이틀
    const mainTitMotion = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer,
        start: isMobile ? "-5% 30%" : "-15% 30%",
        end: isMobile ? "92% center" : "bottom center",
        onLeaveBack: () =>
          gsap.to(fixedTit, {
            display: "none",
            y: "50px",
            autoAlpha: 0,
            duration: 0.5,
          }),
        onLeave: () =>
          gsap.to(fixedTit, {
            display: "none",
            y: 0,
            autoAlpha: 0,
            duration: 0.5,
          }),
        onEnterBack: () =>
          gsap.to(fixedTit, {
            display: "block",
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
          }),
        onEnter: () =>
          gsap.to(fixedTit, {
            display: "block",
            y: 0,
            autoAlpha: 1,
            duration: 0.5,
          }),
      },
    });

    // fixedTit이 나타나는 로직
    mainTitMotion.set(fixedTit, {
      top: isMobile ? "45%" : "38%",
      left: "50%",
      xPercent: -50,
      yPercent: isMobile ? -45 : -38,
      ease: "power4.out",
    });
    mainTitMotion.fromTo(
      fixedTit,
      {
        display: "none",
        autoAlpha: 0,
        y: 50,
        duration: 0.5,
      },
      {
        display: "block",
        autoAlpha: 1,
        y: 0,
      }
    );

    // 센터 타이틀 변경 로직,
    // 컨텐츠 텍스트 색깔 변경 로직
    function handleOpacityChange(idx) {
      for (let i = 0; i < titTexts.length; i++) {
        titTexts[i].style.opacity = idx === i ? 1 : 0;
        contentTitles[i].style.color = idx === i ? "rgb(248, 182, 45)" : "#fff";
      }
    }

    scrollContents.forEach((content, idx) => {
      const textChangeToBottomTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: "top 50%",
          end: "bottom bottom",
          onEnter: () => {
            handleOpacityChange(idx);
          },
        },
      });
      const textChangeToTopTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: "bottom 50%",
          end: "top top",
          onEnterBack: () => {
            handleOpacityChange(idx);
          },
        },
      });
    });
  },

  projectAreaScrollEvent: () => {
    // 프로젝트 소개 영역
    const container = document.querySelector(".main-proj-container");
    if (!container) return;

    const mainTitle = container.querySelector(".archi-tit span");
    const subTitle = container.querySelector(".archi-sub");
    const btn = container.querySelector(".btn-area");
    const listWrap = container.querySelector(".row-list");
    const projectList = container.querySelectorAll(".row-list li");
    const listTit = listWrap.querySelectorAll(".tit-area");

    // 모바일
    const listWrapMo = container.querySelector(".archi-component-swiper");

    // 옵션
    const btnRevealOptions = {
      initialY: "20px",
      delay: 0,
      duration: 1,
      ease: "power4.out",
    };

    const subRevealOptions01 = {
      initialY: "30px",
      delay: 0.3,
      duration: 1,
      ease: "power4.out",
    };

    const listRevealOptions01 = {
      initialY: "20px",
      delay: 0.6,
      duration: 1,
      ease: "power4.out",
    };

    const listTopTitOptions = {
      initialY: 0,
      delay: 1.4,
      duration: 1,
      ease: "power4.out",
    };

    const topMaskImageOptions = {
      delay: 0.6,
      height: 0,
      duration: 1.6,
      ease: "power4.out",
    };

    const mainOptions = {
      delay: 0,
      initialY: "50px",
    };

    // instance 생성
    const mainTitleReveal = new TextReveal(mainTitle, mainOptions);
    const subTitleReveal = new TextReveal(subTitle, subRevealOptions01);
    const btnReveal = new TextReveal(btn, btnRevealOptions);
    const listRevealMo = new TextReveal(listWrapMo, listRevealOptions01);

    // gsap 세팅
    mainTitleReveal.settingGsap(mainTitle);
    subTitleReveal.settingGsap(subTitle);
    btnReveal.settingGsap(btn);
    listRevealMo.settingGsap(listWrapMo);

    // 리스트 텍스트 instance 생성, gsap 세팅
    listTit.forEach((tit) => {
      const listTitReveal = new TextReveal(tit, listTopTitOptions);
      listTitReveal.settingGsap(tit);
    });

    const textObserveCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainTitleReveal.revealMainTitle(mainTitle);
          subTitleReveal.revealTextBasic(subTitle);
          btnReveal.btnLinkReveal(btn);
          listRevealMo.revealTextBasic(listWrapMo);

          observer.unobserve(entry.target);
        }
      });
    };

    const textObserver = new IntersectionObserver(textObserveCallback, {
      threshold: isMobile ? 0.1 : 0.2,
    });

    textObserver.observe(container);

    if (isMobile) return;
    // 리스트 이미지 reveal

    // 리스트 instance 생성, gsap 세팅
    projectList.forEach((list) => {
      // reveal
      const listReveal = new TextReveal(list, listRevealOptions01);
      listReveal.settingGsap(list);
    });

    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const listReveal = new TextReveal(entry.target, listRevealOptions01);
          const revealImg = new ScrollDown(entry.target, topMaskImageOptions);

          revealImg.init();
          listReveal.revealTextBasic(entry.target);

          const revealTit = new TextReveal(
            entry.target.querySelector(".tit-area"),
            listTopTitOptions
          );
          revealTit.revealTextBasic(entry.target.querySelector(".tit-area"));

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, {
      threshold: 0.1,
    });
    projectList.forEach((list) => {
      observer.observe(list);
    });
  },

  // 하단 패럴렉스, 텍스트 애니메이션
  prideContAnimation: () => {
    const container = document.querySelector(".main-pride-container");
    if (!container) return;

    const trigger = container.querySelector(".pride-cont-wrap");
    const ParallaxBg = container.querySelector(".bg-area");
    const mainTitle = container.querySelectorAll(".text-row");
    const subTitle = container.querySelector(".sub-tit");

    const parallaxOptions01 = {
      startY: "-400px",
      start: "top bottom",
      end: "110% top",
      markers: false,
    };

    const bottomParallaxBg = new ParallaxScroll(
      trigger,
      ParallaxBg,
      parallaxOptions01
    );

    const mainRevealOptions = {
      initialY: "100px",
      delay: 0.6,
      duration: 1,
      ease: "power4.out",
    };

    const subRevealOptions = {
      initialY: "40px",
      delay: 1,
      duration: 1,
      ease: "power4.out",
    };

    const intersectionOptions = {
      threshold: 0.3,
    };

    const mainTitleReveal = new TextReveal(mainTitle, mainRevealOptions);
    const subTitleReveal = new TextReveal(subTitle, subRevealOptions);

    // 백그라운드 패럴렉스
    bottomParallaxBg.init();
    // gsap setting
    mainTitleReveal.settingGsap(mainTitle);
    subTitleReveal.settingGsap(subTitle);

    const target = container;

    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 메인 타이틀 등장
          mainTitleReveal.revealMainTitle(mainTitle);
          // 서브 타이틀 등장
          subTitleReveal.revealTextBasic(subTitle);
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

  // pr center 영역
  prCenterMouseEvent: () => {
    const container = document.querySelector(".main-pr-container");
    if (!container) return;

    const mainTitle = container.querySelector(".archi-tit span");
    const subTitle = container.querySelector(".archi-sub");
    const listWrap = container.querySelector(".archi-board-wrap");
    const btn = container.querySelector(".btn-area");

    const mainOptions = {
      delay: 0,
      initialY: "60px",
      duration: 1,
    };
    const subRevealOptions01 = {
      initialY: "30px",
      delay: 0.3,
      duration: 1,
      ease: "power4.out",
    };

    const listRevealOptions01 = {
      initialY: "30px",
      delay: 0.6,
      duration: 1,
      ease: "power4.out",
    };

    const intersectionOptions = {
      threshold: 0.5,
    };

    const mainTitleReveal = new TextReveal(mainTitle, mainOptions);
    const subTitleReveal = new TextReveal(subTitle, subRevealOptions01);
    const listWrapReveal = new TextReveal(listWrap, listRevealOptions01);
    const btnReveal = new TextReveal(btn);

    mainTitleReveal.settingGsap(mainTitle);
    subTitleReveal.settingGsap(subTitle);
    listWrapReveal.settingGsap(listWrap);
    btnReveal.settingGsap(btn);
    const target = container;

    const intersectionCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          mainTitleReveal.revealMainTitle(mainTitle);
          subTitleReveal.revealTextBasic(subTitle);
          btnReveal.btnLinkReveal(btn);
          listWrapReveal.revealTextBasic(listWrap);
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

  handleClipPathText() {
    const container = document.querySelector(".main-pr-container");
    if (isMobile || !container) return;

    const imageWrap = document.querySelector(".archi-img-wrap");
    const boardWrap = document.querySelector(".archi-board-wrap");
    const listItems = boardWrap.querySelectorAll(".new-board-list li");
    const checkListImage = boardWrap.querySelectorAll("img").length;

    if (!checkListImage) return;

    const imgAnimation = new ImageChange(container);
    imgAnimation.init();

    listItems.forEach((item, index) => {
      item.addEventListener("mousemove", function (e) {
        const boardRect = boardWrap.getBoundingClientRect();
        const imageRect = imageWrap.getBoundingClientRect();

        const offsetX = e.clientX - boardRect.left;
        const centerX = imageRect.width / 2.1;
        const deltaX = Math.floor(offsetX - centerX);

        const topY = 0;
        const bottomY = 200;
        const leftX = Math.max(deltaX, 0);
        const rightX = deltaX + imageRect.width;

        const targetOverlay = item.querySelector(".list-item-overlay");
        if (targetOverlay) {
          targetOverlay.style.clipPath = `polygon(${leftX}px ${topY}px, ${rightX}px ${topY}px, ${rightX}px ${bottomY}px, ${leftX}px ${bottomY}px)`;
        }
      });

      item.addEventListener("mouseenter", function () {
        const targetOverlay = item.querySelector(".list-item-overlay");
        targetOverlay.classList.add("ux-active");
      });

      item.addEventListener("mouseleave", function () {
        const targetOverlay = item.querySelector(".list-item-overlay");
        if (targetOverlay) {
          targetOverlay.classList.remove("ux-active");
        }
      });
    });
  },
};

export const props = {
  example: "aaa",
};

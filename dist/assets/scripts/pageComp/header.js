// library import
import { gsap } from "../lib/gsap/all.js";

class headerScroll {
  constructor() {
    // 헤더,progress control
    this.progressBar = document.querySelector(".progress-bar");
    this.header = document.querySelector(".header");
    this.headerInner = document.querySelector(".header-inner");
    this.progressBg = document.querySelector(".progress-box");
    this.headerBg = document.querySelectorAll(".gnb-bg");
    this.lastScrollTop = 0;
    this.prevHeaderActive = false;

    // 전체메뉴,전체검색
    this.btnMenu = document.querySelector(".btn-menu");
    this.btnSearch = document.querySelector(".btn-search");
    this.allMenuGroup = document.querySelector(".all-menu-group");
    this.moMenuGroup = document.querySelector(".mo-menu-group");
    this.allSearchGroup = document.querySelector(".all-search-group");
    this.body = document.querySelector("body");
    this.tabListHeight = document
      ?.querySelector(".tab-list")
      ?.getBoundingClientRect().top;
  }

  init() {
    if (!this.header) return;
    this.fnGnbControl();
    this.fnAllMenuClick();
    this.fnAllSearchClick();
    window.addEventListener("scroll", (e) => this.fnHeaderScroll(e));
  }

  // Header
  fnHeaderScroll(e) {
    const { scrollY } = window;
    const scrollDown = scrollY > this.lastScrollTop && scrollY > 0;
    const headerH = this.headerInner.offsetHeight;

    // progress bar
    const getPercent = (scroll, total) => {
      return (scroll / total) * 100;
    };
    const updateProgressBar = () => {
      const scrollTop = document.documentElement.scrollTop;
      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      this.progressBar.style.width =
        getPercent(scrollTop, documentHeight) + "%";
    };

    // header scroll
    // 클래스 핸들러를 함수로 분리해보는건 어떨까요?
    if (scrollDown) {
      this.header.classList.add("on");
      this.progressBg.classList.add("on");
    } else if (scrollY === 0) {
      this.headerInner.classList.remove("on");
      this.progressBg.classList.remove("on");
      this.headerBg.forEach((bg) => {
        bg.style.backgroundColor = "#f8b62d";
      });
    } else {
      this.headerInner.classList.add("on");
      this.progressBg.classList.add("on");
      this.header.classList.remove("on");
      this.headerBg.forEach((bg) => {
        bg.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      });
    }

    const tabListHandler = () => {
      const tabTopEl = document.querySelector(".tab-list");
      if (!tabTopEl) return;

      const tabListHeight = this.tabListHeight;
      const progressH = document.querySelector(".progress-box").offsetHeight;
      const hasHeaderClass = this.header.classList.contains("on");

      if (!tabTopEl) return;

      const isCombine = tabTopEl.getBoundingClientRect().top - progressH <= 0;
      const shouldFixTab = scrollY + headerH + progressH >= tabListHeight;

      hasHeaderClass
        ? (tabTopEl.style.top = `${progressH - 1}px`)
        : (tabTopEl.style.top = `${headerH + progressH - 1}px`);

      if (isCombine) {
        tabTopEl.classList.add("fixed");
        // hasHeaderClass
        //   ? (tabTopEl.style.top = `${progressH - 1}px`)
        //   : (tabTopEl.style.top = `${headerH + progressH - 1}px`);
        hasHeaderClass
          ? (tabTopEl.style.transition = "none")
          : (tabTopEl.style.transition =
              "top 0.6s cubic-bezier(0.51, 0.04, 0.07, 0.97)");
      } else if (!shouldFixTab) {
        tabTopEl.classList.remove("fixed");
        tabTopEl.style.top = "";
      } else if (shouldFixTab && hasHeaderClass) {
        tabTopEl.style.top = `${progressH - 1}px`;
      }
    };

    this.lastScrollTop = scrollY;
    tabListHandler();
    updateProgressBar();
  }

  // GNB
  fnGnbControl() {
    const oneDepthItem = document.querySelectorAll(".one-depth");
    const twoDepthItem = document.querySelectorAll(".two-depth");
    const tabList = document.querySelector(".tab-list");

    oneDepthItem.forEach((oneDepth) => {
      const twoDepthList = oneDepth.querySelector(".two-depth-list");
      oneDepth.addEventListener("mouseover", () => {
        if (twoDepthList) {
          oneDepth.classList.add("on");
          this.headerBg.forEach((bg) => bg.classList.add("on"));
          if (twoDepthList && tabList) {
            twoDepthList.style.zIndex = 120;
            if (tabList) {
              tabList.style.zIndex = -1;
            }
          }
        } else {
          oneDepth.classList.remove("on");
          this.headerBg.forEach((bg) => bg.classList.remove("on"));
        }
      });
      oneDepth.addEventListener("mouseleave", () => {
        oneDepth.classList.remove("on");
        this.headerBg.forEach((bg) => bg.classList.remove("on"));

        if (twoDepthList) {
          twoDepthList.style.zIndex = 1;
          if (tabList) {
            tabList.style.zIndex = 110;
          }
        }
      });
    });

    twoDepthItem.forEach((twoDepth) => {
      twoDepth.addEventListener("mouseover", () => {
        twoDepth.classList.add("on");
        this.headerBg.forEach((bg) => bg.classList.add("on"));
      });
      twoDepth.addEventListener("mouseleave", () => {
        twoDepth.classList.remove("on");
        this.headerBg.forEach((bg) => bg.classList.remove("on"));
      });
    });
  }

  // 전체메뉴
  fnAllMenuClick() {
    const closeBtnEl = document.querySelectorAll(".btn-utill-close");
    const tabList = document.querySelector(".tab-list");

    if (!this.btnMenu) return;
    this.btnMenu.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        this.moMenuGroup.style.display = "block";
        gsap.set(this.moMenuGroup, {
          x: "100%",
        });
        gsap.to(this.moMenuGroup, {
          duration: 0.3,
          delay: 0,
          x: 0,
          ease: "power1.inOut",
        });
      } else {
        this.allMenuGroup.style.display = "block";
        gsap.set(this.allMenuGroup, { y: "-100%" });
        gsap.to(this.allMenuGroup, {
          duration: 0.5,
          delay: 0,
          y: 0,
          ease: "power3.inOut",
        });
      }
      if (tabList) {
        tabList.style.zIndex = 99;
      }
      this.body.style.overflow = "hidden";
    });

    closeBtnEl.forEach((el) => {
      el.addEventListener("click", () => {
        if (el.closest(".all-menu-group")) {
          gsap.set(this.allMenuGroup, { y: 0 });
          gsap.to(this.allMenuGroup, {
            duration: 0.3,
            delay: 0,
            y: "-100%",
            ease: "power3.inOut",
            onComplete: () => {
              this.allMenuGroup.style.display = "none";
            },
          });
        } else if (window.innerWidth <= 1024) {
          gsap.set(this.moMenuGroup, {
            x: 0,
          });
          gsap.to(this.moMenuGroup, {
            duration: 0.3,
            delay: 0,
            x: 0,
            ease: "power1.inOut",
            onComplete: () => {
              this.moMenuGroup.style.display = "none";
            },
          });
        }
        this.body.style.overflow = "auto";
      });
    });

    const menuItem = document.querySelectorAll(".menu-list .two-depth-list");
    menuItem.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "auto";
        if (window.innerWidth <= 1024) {
          this.moMenuGroup.style.display = "none";
        } else {
          this.allMenuGroup.style.display = "none";
        }
      });
    });
  }

  // 전체검색
  fnAllSearchClick() {
    const closeBtnEl = document.querySelectorAll(".btn-utill-close");
    const tabList = document.querySelector(".tab-list");

    if (!this.btnSearch) return;
    this.btnSearch.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        this.moMenuGroup.style.display = "block";
        gsap.set(this.moMenuGroup, {
          x: "100%",
        });
        gsap.to(this.moMenuGroup, {
          duration: 0.3,
          x: 0,
          ease: "power1.inOut",
        });
      } else {
        this.allSearchGroup.style.display = "block";

        gsap.set(this.allSearchGroup, { y: "-100%" });
        gsap.to(this.allSearchGroup, {
          duration: 0.5,
          y: 0,
          ease: "power3.inOut",
          onComplete: () => {
            this.moMenuGroup.style.display = "none";
          },
        });
      }
      if (tabList) {
        tabList.style.zIndex = 99;
      }
      this.body.style.overflow = "hidden";
    });

    closeBtnEl.forEach((el) => {
      el.addEventListener("click", () => {
        if (el.closest(".all-search-group")) {
          gsap.set(this.allSearchGroup, { y: 0 });
          gsap.to(this.allSearchGroup, {
            duration: 0.3,
            delay: 0,
            y: "-100%",
            ease: "power3.inOut",
            onComplete: () => {
              this.allSearchGroup.style.display = "none";
            },
          });
        } else if (el.closest(".mo-menu-group")) {
          gsap.set(this.moMenuGroup, {
            x: 0,
          });
          gsap.to(this.moMenuGroup, {
            duration: 0.3,
            delay: 0,
            x: "100%",
            ease: "power1.inOut",
            onComplete: () => {
              this.moMenuGroup.style.display = "none";
            },
          });
        }
        if (tabList) {
          tabList.style.zIndex = 110;
        }
        this.body.style.overflow = "auto";
      });
    });

    // 메뉴 항목 클릭 시 메뉴 닫힘
    const menuItem = document.querySelectorAll(".menu-list .two-depth-list");
    menuItem.forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        document.querySelector("body").style.overflow = "auto";
        if (window.innerWidth <= 1024) {
          this.moMenuGroup.style.display = "none";
        } else {
          this.allSearchGroup.style.display = "none";
        }
      });
    });
  }
}

export default headerScroll;

import { gsap, ScrollTrigger } from "../lib/gsap/all.js";
gsap.registerPlugin(ScrollTrigger);

class ImageFadeIn {
  constructor(el) {
    this.container = el;
    this.fadeInImgMask = this.container.querySelector(".img-area-mask");
  }
  init() {
    this.imageFadeIn();
  }
  imageFadeIn(isMobile) {
    gsap.to(this.fadeInImgMask, {
      duration: isMobile ? 0.8 : 1.2,
      ease: "power4.out",
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
    });
    // gsap.fromTo(
    //   this.container.querySelector("img"),
    //   {
    //     scale: 2,
    //   },
    //   {
    //     duration: 1.2,
    //     ease: "power4.out",
    //     scale: 1,
    //   }
    // );
  }
  scrollSetting(cont) {
    const tag = cont.querySelector(".small-tit");
    const mainTit = cont.querySelector(".text-row");
    const dateList = cont.querySelector(".date-list");

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
    gsap.set(dateList, {
      alpha: 0,
      y: "50px",
      ease: "power4.out",
    });
  }

  imageFadeInScroll(cont) {
    const tag = cont.querySelector(".small-tit");
    const mainTit = cont.querySelector(".text-row");
    const dateList = cont.querySelector(".date-list");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cont,
        start: "top 60%",
        end: "bottom bottom",
        markers: false,
        scrub: 1,
        onUpdate: (self) => {
          const translateYValue =
            self.direction === 1
              ? `${-self.progress * 100}%`
              : `${-(1 - self.progress) * 100}%`;
          gsap.to(dateList, {
            y: translateYValue,
            ease: "power4.out",
          });
        },
        onEnter: (self) => {
          if (self.progress === 1) return;
          gsap.to(imgArea, {
            borderWidth: 0,
          });
          imgArea.style.position = "fixed";
          gsap.to(dim, {
            alpha: 0.8,
            duration: 1,
            ease: "power4.out",
          });
          gsap.to(tag, {
            alpha: 1,
            y: 0,
            delay: 0.6,
          });
          gsap.to(mainTit, {
            alpha: 1,
            y: 0,
            delay: 0.9,
          });
          gsap.to(dateList, {
            alpha: 1,
            y: 0,
            delay: 1.2,
          });
        },
        onLeave: () => {
          imgArea.style.position = "absolute";
          txtArea.style.position = "absolute";
          dim.style.opacity = 0;

          gsap.to(tag, {
            alpha: 0,
            y: "20px",
          });
          gsap.to(mainTit, {
            alpha: 0,
            y: "100%",
          });
          gsap.to(dateList, {
            alpha: 0,
            y: "50px",
          });
          gsap.to(imgArea, {
            borderTopWidth: "536px",
            borderBottomWidth: "536px",
            borderLeftWidth: "603px",
            borderRightWidth: "603px",
          });
          gsap.to(dim, {
            alpha: 0,
          });
        },
        onEnterBack: () => {
          imgArea.style.position = "fixed";
          txtArea.style.position = "fixed";
          gsap.to(imgArea, {
            borderWidth: 0,
          });
          gsap.to(dim, {
            alpha: 0.8,
            duration: 1,
            ease: "power4.out",
          });
          gsap.to(tag, {
            alpha: 1,
            y: 0,
            delay: 0.6,
          });
          gsap.to(mainTit, {
            alpha: 1,
            y: 0,
            delay: 0.9,
          });
          gsap.to(dateList, {
            alpha: 1,
            y: 0,
            delay: 1.2,
          });
        },
        onLeaveBack: () => {
          imgArea.style.position = "absolute";
          txtArea.style.position = "absolute";

          gsap.to(tag, {
            alpha: 0,
            y: "20px",
            ease: "power4.out",
          });
          gsap.to(mainTit, {
            alpha: 0,
            y: "100%",
            ease: "power4.out",
          });
          gsap.to(dateList, {
            alpha: 0,
            y: "50px",
            ease: "power4.out",
          });
          gsap.to(imgArea, {
            onStart: () => {
              imgArea.style.setProperty("--border-width-x", "603px");
              imgArea.style.setProperty("--border-width-y", "536px");
            },
          });
        },
      },
    });
  }
  imageFadeInScrollDim() {
    const tag = cont.querySelector(".small-tit");
    const mainTit = cont.querySelector(".text-row");
    const dateList = cont.querySelector(".date-list");

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cont,
        start: "top 60%",
        end: "bottom bottom",
        markers: false,
        scrub: 1,
        onUpdate: (self) => {
          const translateYValue =
            self.direction === 1
              ? `${-self.progress * 100}%`
              : `${-(1 - self.progress) * 100}%`;
          gsap.to(dateList, {
            y: translateYValue,
            ease: "power4.out",
          });
        },
        onEnter: (self) => {
          if (self.progress === 1) return;
          gsap.to(imgArea, {
            borderWidth: 0,
          });
          imgArea.style.position = "fixed";
          gsap.to(dim, {
            alpha: 0.8,
            duration: 1,
            ease: "power4.out",
          });
          gsap.to(tag, {
            alpha: 1,
            y: 0,
            delay: 0.6,
          });
          gsap.to(mainTit, {
            alpha: 1,
            y: 0,
            delay: 0.9,
          });
          gsap.to(dateList, {
            alpha: 1,
            y: 0,
            delay: 1.2,
          });
        },
        onLeave: () => {
          imgArea.style.position = "absolute";
          txtArea.style.position = "absolute";
          dim.style.opacity = 0;

          gsap.to(tag, {
            alpha: 0,
            y: "20px",
          });
          gsap.to(mainTit, {
            alpha: 0,
            y: "100%",
          });
          gsap.to(dateList, {
            alpha: 0,
            y: "50px",
          });
          gsap.to(imgArea, {
            borderTopWidth: "536px",
            borderBottomWidth: "536px",
            borderLeftWidth: "603px",
            borderRightWidth: "603px",
          });
          gsap.to(dim, {
            alpha: 0,
          });
        },
        onEnterBack: () => {
          imgArea.style.position = "fixed";
          txtArea.style.position = "fixed";
          gsap.to(imgArea, {
            borderWidth: 0,
          });
          gsap.to(dim, {
            alpha: 0.8,
            duration: 1,
            ease: "power4.out",
          });
          gsap.to(tag, {
            alpha: 1,
            y: 0,
            delay: 0.6,
          });
          gsap.to(mainTit, {
            alpha: 1,
            y: 0,
            delay: 0.9,
          });
          gsap.to(dateList, {
            alpha: 1,
            y: 0,
            delay: 1.2,
          });
        },
        onLeaveBack: () => {
          imgArea.style.position = "absolute";
          txtArea.style.position = "absolute";

          gsap.to(tag, {
            alpha: 0,
            y: "20px",
            ease: "power4.out",
          });
          gsap.to(mainTit, {
            alpha: 0,
            y: "100%",
            ease: "power4.out",
          });
          gsap.to(dateList, {
            alpha: 0,
            y: "50px",
            ease: "power4.out",
          });
          gsap.to(imgArea, {
            onStart: () => {
              imgArea.style.setProperty("--border-width-x", "603px");
              imgArea.style.setProperty("--border-width-y", "536px");
            },
          });
          gsap.to(dim, {
            alpha: 0,
          });
        },
      },
    });
  }
}

export { ImageFadeIn };

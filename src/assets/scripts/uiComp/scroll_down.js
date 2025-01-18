import { gsap, ScrollTrigger } from "../lib/gsap/all.js";
gsap.registerPlugin(ScrollTrigger);

class ScrollDown {
  constructor(el, options) {
    this.el = el;
    this.listImgMask = this.el.querySelector(".img-mask");
    this.listTit = this.el.querySelector(".tit-area");
    this.basicOptions = {
      delay: 0.6,
      height: 0,
      duration: 1.6,
      ease: "power4.out",
    };
    this.options = Object.assign(this.basicOptions, options);
  }

  init() {
    this.scrollDownImages();
    this.textShow();
  }

  scrollDownImages() {
    gsap.to(this.listImgMask, {
      delay: this.options.delay,
      height: this.options.height,
      duration: this.options.duration,
      ease: this.options.ease,
      alpha: 1,
    });
  }

  textShow() {
    gsap.to(this.listTit, {
      y: 0,
      delay: 1.4,
      duration: 1,
      ease: "power4.out",
      alpha: 1,
    });
  }
}

export { ScrollDown };

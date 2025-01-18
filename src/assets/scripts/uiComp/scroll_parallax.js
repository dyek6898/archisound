import { gsap, ScrollTrigger } from "../lib/gsap/all.js";
gsap.registerPlugin(ScrollTrigger);

class ParallaxScroll {
  constructor(trigger, parallaxEle, options) {
    this.trigger = trigger;
    this.parallaxEle = parallaxEle;
    const basicOptions = {
      startY: "-400px",
      endY: 0,
      ease: "ease",
      start: "top 80%",
      end: "120% top",
      delay: 0,
      scrub: true, // true면 반복(숫자 가능), false면 한 번만
      markers: false,
    };
    this.options = Object.assign(basicOptions, options);
  }

  init() {
    this.scrolling();
  }

  scrolling() {
    gsap.fromTo(
      this.parallaxEle,
      {
        y: this.options.startY,
      },
      {
        y: this.options.endY,
        ease: this.options.ease,
        duration: 0.5,
        delay: this.options.delay,
        scrollTrigger: {
          trigger: this.trigger,
          start: this.options.start,
          end: this.options.end,
          scrub: this.options.scrub,
          markers: this.options.markers,
          ease: this.options.ease,
        },
      }
    );
  }
}

export { ParallaxScroll };

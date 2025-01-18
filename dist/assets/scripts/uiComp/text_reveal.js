import { gsap } from "../lib/gsap/all.js";
class TextReveal {
  constructor(el, options) {
    this.el = el;
    const basicOptions = {
      initialY: "40px",
      initalAlpha: 0,
      delay: 0.4,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0,
      skewY: 0,
    };

    this.options = Object.assign(basicOptions, options);
  }

  settingMainTit(target) {
    gsap.set(target, {
      y: "100%",
      alpha: 0,
    });
  }

  settingGsap(target) {
    gsap.set(target, {
      y: this.options.initialY,
      alpha: 0,
    });
  }

  btnLinkReveal(target) {
    gsap.to(target, {
      alpha: 1,
      y: 0,
      duration: this.options.duration,
      delay: 0,
      ease: this.options.ease,
    });
  }

  // 메인 타이틀 마스크로 등장
  revealMainTitle(target) {
    gsap.to(target, {
      alpha: 1,
      delay: this.options.delay,
      duration: 1,
      y: 0,
      ease: "power4.out",
    });
  }

  // 서브 타이틀 등장
  revealSubTitle(target) {
    gsap.to(target, {
      alpha: 1,
      y: 0,
      duration: this.options.duration,
      delay: this.options.delay,
      ease: this.options.ease,
    });
  }

  // 기본 등장
  revealTextBasic(target) {
    gsap.to(target, {
      alpha: 1,
      delay: this.options.delay,
      duration: this.options.duration,
      y: 0,
      ease: this.options.ease,
      stagger: this.options.stagger,
    });
  }

  revealTextTransfromNone(target) {
    gsap.to(target, {
      alpha: 1,
      delay: this.options.delay,
      duration: this.options.duration,
      y: 0,
      ease: this.options.ease,
      stagger: this.options.stagger,
      onComplete: () => {
        if (!target) return;
        target.style.transform = "none";
      },
    });
  }

  revealFlow(target) {
    gsap.fromTo(
      target,
      {
        x: "100%",
      },
      {
        alpha: 1,
        delay: this.options.delay,
        duration: this.options.duration,
        x: 0,
        ease: this.options.ease,
      }
    );
  }

  // 메인 페이지 첫 텍스트 애니메이션
  revealSkew(target) {
    gsap.set(target, {
      y: "300px",
      skewY: 7,
    });

    gsap.to(target, {
      duration: 1,
      delay: this.options.delay,
      y: 0,
      skewY: 0,
      ease: "power4.out",
      stagger: 0.06,
      alpha: 1,
    });
  }
}

export { TextReveal };

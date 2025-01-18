import { gsap } from "../lib/gsap/all.js";

const effect01 = {
  dimm: true,
  type: "opacity",
  forwardDuration: 0.3,
  backwardDuration: 0.3,
  delay: 0,
  forwardEasing: "cubic-bezier(0.22, 1, 0.36, 1)",
  initXPercent: 0,
  initYPercent: 20,
  backwardXPercent: 0,
  backwardYPercent: 20,
  x: 0,
  y: 0,
  callback: {
    beforeOpen: () => {},
    afterOpen: () => {},
    beforeClose: () => {},
    afterClose: () => {},
  },
};

const lenisEl = document.querySelector(".lenis");

class Modal {
  constructor(el) {
    this.modalWrap = el;
    this.modalType = el.getAttribute("data-modal-trigger");
    this.effect = effect01;
    if (lenisEl) {
      this.lenis = new Lenis();
    }
    this.setSelecting();
  }

  setSelecting() {
    this.dimm = this.modalWrap.querySelector(".modal-dimm");
    this.modal = this.modalWrap.querySelector(".modal-frame");
    this.modalOpenBtn = document.querySelectorAll(
      `[data-modal-open="${this.modalType}"]`
    );
    this.modalCloseBtn = document.querySelectorAll(
      `[data-modal-close="${this.modalType}"]`
    );
  }

  init() {
    this.initialState();
    this.bindOpenEvent();
    this.bindCloseEvent();
  }

  openModal() {
    this.showModal();
    this.animateModal();
    this.handleDimmingEffect();
    this.preventBodyScroll();
  }

  initialState() {
    gsap.set(this.modal, {
      alpha: 0,
      xPercent: this.effect.initXPercent,
      yPercent: this.effect.initYPercent,
      x: this.effect.x,
      y: this.effect.y,
      scale: this.effect.initScale,
      rotationX: this.effect.rotateX,
      rotationY: this.effect.rotateY,
      transformPerspective: this.effect.transformPerspective,
    });
  }

  gsapForward(target) {
    gsap.to(target, {
      onStart: () => {
        target === this.modal && this.effect.callback.beforeOpen();
      },
      delay: this.effect.delay,
      duration: this.effect.forwardDuration,
      alpha: target === this.modal ? 1 : 0.6,
      ease: this.effect.forwardEasing,
      xPercent: 0,
      yPercent: 0,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
      rotationX: 0,
      rotationY: 0,
      transformPerspective: this.effect.transformPerspective,
      onComplete: () => {
        target === this.modal && this.effect.callback.afterOpen();
      },
    });
  }

  gsapBackward(target) {
    gsap.to(target, {
      onStart: () => {
        target === this.modal && this.effect.callback.beforeClose();
      },
      delay: this.effect.delay,
      duration: this.effect.backwardDuration,
      alpha: 0,
      ease: this.effect.backwardEasing,
      xPercent: target === this.modal ? this.effect.backwardXPercent : 0,
      yPercent: target === this.modal ? this.effect.backwardYPercent : 0,
      x: this.effect.x,
      y: this.effect.y,
      scale: target === this.modal ? this.effect.backwardScale : 1,
      rotationX: target === this.modal ? this.effect.backwardRotateX : 0,
      rotationY: target === this.modal ? this.effect.backwardRotateY : 0,
      transformPerspective: this.effect.transformPerspective,
      onComplete: () => {
        target.style.display = "none";
        target === this.modal && this.effect.callback.afterClose();
        this.initialState();
      },
    });
  }

  showModal() {
    this.modal.style.display = "flex";
    if (window.innerWidth <= 1024) {
      this.modal.classList.add("full");
    }
    this?.lenis?.stop();
  }

  animateModal() {
    const animationFunction =
      this.effect.name === "bounce"
        ? this.gsapForwardBounce.bind(this)
        : this.gsapForward.bind(this);
    animationFunction(this.modal);
  }

  handleDimmingEffect() {
    if (!this.effect.dimm) return;
    this.dimm.style.display = "block";
    this.gsapForward(this.dimm);
  }

  bindOpenEvent() {
    this.modalOpenBtn.forEach((ele) =>
      ele.addEventListener("click", () => {
        this.showModal();
        this.animateModal();
        this.handleDimmingEffect();
        this.preventBodyScroll();
      })
    );
  }

  modalClose() {
    this.gsapBackward(this.modal);
    this.effect.dimm && this.gsapBackward(this.dimm);
    document.body.style.overflow = "auto";
    this?.lenis?.start();
  }

  bindCloseEvent() {
    this.modalCloseBtn.forEach((ele) =>
      ele.addEventListener("click", () => {
        this.modalClose();
      })
    );
  }

  preventBodyScroll() {
    document.body.style.overflow = "hidden";
  }
}

export default Modal;

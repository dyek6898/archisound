import { gsap } from "../lib/gsap/all.js";
class ImageChange {
  constructor(el) {
    this.el = el;
    this.boardWarp = this.el.querySelector(".archi-board-wrap");
    this.imageArr = this.el.querySelectorAll(".board-img img");
    this.imageBox = this.el.querySelector(".archi-img-wrap");
    this.liList = this.el.querySelectorAll(".new-board-list li");
  }

  init() {
    this.mouseMoveEvent();
    this.mouseOverEvent();
    this.mouseLeaveEvent();
  }

  mouseMoveEvent() {
    const throttleFnc = this.useThrottle(this.imageBoxMove.bind(this));
    this.liList.forEach((li) => {
      li.addEventListener("mousemove", (e) => {
        throttleFnc(e.clientX, e.clientY);
      });
    });
  }

  mouseOverEvent() {
    this.liList.forEach((li, num) => {
      const currentImg = this.imageArr[num];

      li.addEventListener("mouseover", () => {
        this.imageBox.style.display = "block";
        this.controlClassName(currentImg, num);
      });
    });
  }

  mouseLeaveEvent() {
    this.boardWarp.addEventListener("mouseleave", (e) => {
      if (!e.relatedTarget || !this.boardWarp.contains(e.relatedTarget)) {
        this.resetGsap();
      }
    });
  }

  useThrottle(func, limit) {
    let inThrottle;
    return function () {
      const context = this;
      const args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  resetGsap() {
    this.imageArr.forEach((img) => {
      img.classList.remove("show", "prev", "next");
      gsap.to(img, {
        zIndex: 0,
        scale: 1,
        alpha: 0,
        onStart: () => {
          this.imageBox.style.opacity = 0;
        },
      });
    });
    gsap.to(this.imageBox, {
      alpha: 0,
      ease: "power4.out",
    });
  }

  imageBoxMove(x, y) {
    const mouseX = x;
    const mouseY = y;
    const imageBoxRect = this.boardWarp.getBoundingClientRect();
    const offsetX = mouseX - imageBoxRect.left;
    const offsetY = mouseY - imageBoxRect.top;

    const centerX = imageBoxRect.width / 7;
    const centerY = imageBoxRect.height / 3;
    const deltaX = offsetX - centerX;
    const deltaY = offsetY - centerY;

    const transformX = deltaX;
    const transformY = deltaY;
    gsap.to(this.imageBox, {
      alpha: 1,
      left: transformX + "px",
      top: transformY + "px",
      duration: 0.15,
      delay: 0,
      ease: "linear",
    });

    return {
      transformX,
    };
  }

  controlClassName(currentImg, num) {
    if (num === 0) {
      if (currentImg.classList.contains("prev")) {
        currentImg.classList.remove("prev");
        this.gsapForwardEffect(currentImg);
        this.gsapBackward(currentImg.nextElementSibling);
      } else {
        this.gsapForward(currentImg);
      }
      currentImg.nextElementSibling.classList.add("next");
    } else if (num === 1) {
      if (
        currentImg.classList.contains("prev") ||
        currentImg.classList.contains("next")
      ) {
        currentImg.classList.remove("prev", "next");
        this.gsapForwardEffect(currentImg);
        this.gsapBackward(currentImg.previousElementSibling);
        this.gsapBackward(currentImg.nextElementSibling);
      } else {
        this.gsapForward(currentImg);
      }
      currentImg.previousElementSibling.classList.add("prev");
      currentImg.nextElementSibling.classList.add("next");
    } else {
      if (currentImg.classList.contains("next")) {
        currentImg.classList.remove("next");
        this.gsapForwardEffect(currentImg);
        this.gsapBackward(currentImg.previousElementSibling);
      } else {
        this.gsapForward(currentImg);
      }
      currentImg.previousElementSibling.classList.add("prev");
    }
  }

  gsapForward(target) {
    gsap.to(target, {
      alpha: 1,
      zIndex: 1,
      ease: "power4.out",
      duration: 1,
    });
  }

  gsapForwardEffect(target) {
    gsap.fromTo(
      target,
      {
        y: "100%",
        scale: 1.5,
        zIndex: 0,
      },
      {
        y: 0,
        scale: 1,
        zIndex: 1,
        ease: "power4.out",
        duration: 1,
        alpha: 1,
      }
    );
  }

  gsapBackward(target) {
    gsap.fromTo(
      target,
      {
        y: 0,
        zIndex: 1,
      },
      {
        y: "-100%",
        zIndex: 1,
        ease: "power4.out",
        duration: 1,
      }
    );
  }
}

export { ImageChange };

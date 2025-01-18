import { gsap } from "../lib/gsap/all.js";
class HoverLottie {
  constructor(el) {
    this.el = el;
    this.listImgs = this.el.querySelectorAll(".img-area");
  }
  init() {
    if (window.matchMedia("(max-width: 1024px)").matches) return;
    this.createLottie();
  }

  createLottie() {
    this.listImgs.forEach((imgList) => {
      const hoverLottieDiv = document.createElement("div");
      hoverLottieDiv.classList.add("hover-lottie");

      imgList.appendChild(hoverLottieDiv);

      const hoverAnimation = bodymovin.loadAnimation({
        container: hoverLottieDiv,
        path: "../../assets/images/lottie/archi_hover.json",
        renderer: "svg",
        loop: false,
        autoplay: false,
        id: "hoverLottie",
      });

      this.mouseOverEvent(imgList, hoverAnimation);
      this.mouseLeaveEvent(imgList, hoverAnimation);
    });
  }

  mouseOverEvent(target, animation) {
    target.addEventListener("mouseover", () => {
      animation.play();
    });
  }

  mouseLeaveEvent(target, animation) {
    target.addEventListener("mouseleave", () => {
      animation.stop();
    });
  }
}

export { HoverLottie };

import { gsap, ScrollTrigger } from "../lib/gsap/all.js";

class TextFill {
  constructor(el) {
    this.el = el;
    this.letters = this.el.querySelectorAll(".text-line");
  }

  init() {
    this.convertText();
    this.fillAnimation();
  }

  convertText() {
    this.letters.forEach((letter) => {
      const letterText = letter.innerText;
      letter.innerHTML = "";
      const textArr = letterText.replace(/\s+/g, " ").split("\n");
      const splitTextFnc = (el) => el.split("");
      textArr.forEach((text) => {
        const splitWords = splitTextFnc(text);
        this.makeDomFnc(splitWords, letter);
      });
    });
  }

  makeDomFnc(word, textEle) {
    const space = document.createElement("span");
    space.textContent = "\u00A0";

    word.forEach((el) => {
      if (el === " ") {
        textEle.appendChild(space);
      } else {
        textEle.innerHTML += `<span class="split">${el}</span>`;
      }
    });
  }

  fillAnimation() {
    const splitWords = this.el.querySelectorAll(".split");
    this.letters.forEach((_) => {
      gsap.fromTo(
        splitWords,
        {
          color: "#000",
        },
        {
          color: "#F8B62D",
          stagger: 1,
          scrollTrigger: {
            trigger: this.el,
            start: "-30% 80%",
            end: "50% 30%",
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }
}

export { TextFill };

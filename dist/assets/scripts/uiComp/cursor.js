class CustomCursor {
  constructor(el) {
    this.el = el;
    this.body = document.querySelector("body");
    this.customCursor = document.getElementById("custom_cursor");

    this.moveCustomCursor = this.moveCustomCursor.bind(this);
    this.showCustomCursor = this.showCustomCursor.bind(this);
    this.hideCustomCursor = this.hideCustomCursor.bind(this);
    this.hoverCustomCursor = this.hoverCustomCursor.bind(this);
    this.unhoverCustomCursor = this.unhoverCustomCursor.bind(this);
  }
  init() {
    this.customCursor.classList.add("mix-blend-on");
    window.addEventListener("mousemove", this.moveCustomCursor);
    this.body.addEventListener("mouseleave", this.hideCustomCursor);
    this.body.addEventListener('mouseenter', () => {
      this.customCursor.classList.add('mix-blend-on')
    })

    document
      .querySelectorAll(
        "a, input, button, .clickable-area, label, textarea, .archi-component-dropdown, .swiper-area"
      )
      .forEach((clickable) => {
        clickable.addEventListener("mouseover", this.hoverCustomCursor);
        clickable.addEventListener("mouseleave", this.unhoverCustomCursor);
        clickable.style.cursor = 'none';
      });
  }
  showCustomCursor() {
    this.customCursor.classList.contains("custom_cursor_hidden") &&
      this.customCursor.classList.remove("custom_cursor_hidden");
    this.customCursor.classList.add("custom_cursor_visible");
  }
  hideCustomCursor() {
    this.customCursor.classList.contains("custom_cursor_visible") &&
      this.customCursor.classList.remove("custom_cursor_visible");
    this.customCursor.classList.add("custom_cursor_hidden");
    this.customCursor.classList.remove('mix-blend-on')
  }
  moveCustomCursor(e) {
    this.showCustomCursor();
    const customCursorWidth = this.customCursor.offsetWidth * 0.5;
    const customCursorHeight = this.customCursor.offsetHeight * 0.5;
    const customCursorX = e.clientX - customCursorWidth;
    const customCursorY = e.clientY - customCursorHeight;
    const customCursorPos = `translate(${customCursorX}px, ${customCursorY}px)`;
    this.customCursor.style.transform = customCursorPos;
  }
  hoverCustomCursor() {
    this.customCursor.classList.add("custom_cursor_hover");
    this.customCursor.classList.remove("mix-blend-on");
  }
  unhoverCustomCursor() {
    this.customCursor.classList.remove("custom_cursor_hover");
    this.customCursor.classList.add("mix-blend-on");
  }
}

export { CustomCursor };

class SetObserver {
  constructor(el, callback, threshold) {
    this.el = el;
    this.callback = callback;
    this.threshold = threshold;
  }

  observe() {
    if (!this.el) return;

    let defaultOptions = {};

    if (typeof this.threshold === "undefined") {
      defaultOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };
    } else if (typeof this.threshold === "number") {
      defaultOptions = {
        root: null,
        rootMargin: "0px",
        threshold: this.threshold,
      };
    } else {
      defaultOptions = this.threshold;
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (this.callback && typeof this.callback === "function") {
            this.callback();
          }
          this.observer.unobserve(this.el);
        }
      });
    }, defaultOptions);

    this.observer.observe(this.el);
  }
}

export default SetObserver;

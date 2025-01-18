class useIntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.intersectionObserver = null;
  }

  observe(target) {
    this.intersectionObserver = new IntersectionObserver(
      this.callback,
      this.options
    );
    this.intersectionObserver.observe(target);
  }

  unobserve(target) {
    if (this.intersectionObserver) {
      this.intersectionObserver.unobserve(target);
    }
  }

  disconnect() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}

export { useIntersectionObserver };

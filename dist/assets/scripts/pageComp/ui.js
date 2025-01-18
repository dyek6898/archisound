class pageCommon {
  constructor() {
    // tab
    this.tabBtn = document.querySelectorAll(".tab-list .btn-tab");
    this.tabCont = document.querySelectorAll(".tab-content .tab-box");
    this.inTabBtn = document.querySelectorAll(".in-tab-list .in-btn-tab");
    this.inTabCont = document.querySelectorAll(".in-tab-content .in-tab-box");

    // input clear
    this.textInput = document.querySelector(".archi-component-input input");
    this.clearButton = document.querySelector(".btn-clear");

    // dropdown
    this.customSelect = document.querySelector(".archi-component-dropdown");
    this.selectTit = document.querySelector(".dropdown-tit");
    this.selectOptions = document.querySelector(".dropwdwon-option");
    this.optionList = document.querySelectorAll(".dropwdwon-option li");

    // accordion
    this.accordionItem = document.querySelectorAll(".accordion-item");

    // scrolltop
    this.scrollToTopButton = document.querySelector(".btn-top");
  }

  init() {
    this.fnTab();
    this.fnAccordion();
    this.fnScrollTop();
    this.fnDorpDown();
    this.fnInputClear();
    this.changeLang();
  }

  // Tab
  fnTab() {
    // 해상도가 1024px 미만일 경우 스크롤 센터 정렬
    const scrollCenter = (btns, container) => {
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          let tabList = document.querySelector(container);
          let scrollLeft = tabList?.scrollLeft;
          let tabWidth = tabList?.offsetWidth;
          let btnWidth = btn.offsetWidth;
          let btnOffsetLeft = btn.offsetLeft;
          let centerScrollLeft = btnOffsetLeft - tabWidth / 2 + btnWidth / 2;
          tabList?.scrollTo({
            left: centerScrollLeft,
            behavior: "smooth",
          });
        });
      });
    };

    // 1depth tab
    this.tabBtn.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        const isBusiness = document.querySelector(".archi-business");
        this.tabBtn.forEach((otherBtn) => otherBtn.classList.remove("on"));
        !isBusiness &&
          this.tabCont.forEach((othercont) => othercont.classList.remove("on"));
        btn.classList.add("on");
        this.tabCont[idx].classList.add("on");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    });

    // 2depth tab
    this.inTabBtn.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        this.inTabBtn.forEach((otherBtn) => otherBtn.classList.remove("on"));
        this.inTabCont.forEach((othercont) => othercont.classList.remove("on"));
        btn.classList.add("on");
        this.inTabCont[idx].classList.add("on");
      });

      if (window.innerWidth < 1024) {
        scrollCenter(this.inTabBtn, ".tab6 .in-tab-list");
      }
    });
  }

  // Input Clear
  fnInputClear() {
    if (!document.querySelector(".btn-clear")) return;

    const inputEl = document.querySelectorAll(".archi-component-input input");

    inputEl.forEach((input) => {
      const clearBtn = input.parentElement.querySelector(".btn-clear");

      const updateClearBtn = () => {
        clearBtn.style.visibility = input.value ? "visible" : "hidden";
      };

      const clearInput = () => {
        input.value = "";
        updateClearBtn();
      };
      const hideClearBtn = () => {
        setTimeout(() => {
          clearBtn.style.visibility = "hidden";
        }, 200);
      };

      clearBtn.addEventListener("click", clearInput);
      input.addEventListener("input", updateClearBtn);
      input.addEventListener("blur", hideClearBtn);
    });
  }

  // dropdown
  fnDorpDown() {
    if (!this.selectTit) return;

    const toggleOption = () => {
      this.selectOptions.style.display =
        this.selectOptions.style.display === "none" ? "block" : "none";
      this.customSelect.classList.toggle("on");
    };

    const selectOption = (option) => {
      this.selectTit.textContent = option.textContent;
      toggleOption();
    };

    document.addEventListener("click", (event) => {
      if (
        !this.customSelect.contains(event.target) &&
        !this.selectOptions.contains(event.target)
      ) {
        this.selectOptions.style.display = "none";
        this.customSelect.classList.remove("on");
      }
    });

    this.selectTit.addEventListener("click", toggleOption);

    this.optionList.forEach((option) =>
      option.addEventListener("click", () => selectOption(option))
    );
  }

  // accordion
  fnAccordion() {
    if (!document.querySelector(".mg-accordion-trigger")) return;

    this.accordionItem.forEach((item) => {
      const header = item.querySelector(".mg-accordion-trigger");
      const content = item.querySelector(".accordion-content");

      header.addEventListener("click", () => {
        this.accordionItem.forEach((otherItem) => {
          const otherContent = otherItem.querySelector(".accordion-content");
          if (otherItem !== item && otherContent) {
            otherItem.classList.remove("on");
          }
        });
        if (content) {
          item.classList.toggle("on");
        }
      });
    });
  }

  // scroll top
  fnScrollTop() {
    if (!this.scrollToTopButton) return;
    this.scrollToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  //lang change
  changeLang() {
    const checkbox = document.querySelector(".checkbox");
    const target = document.querySelector(".archi-sub-content-group");

    checkbox?.addEventListener("click", () => {
      if (checkbox.checked) {
        target.classList.add("eng");
      } else {
        target.classList.remove("eng");
      }
    });
  }
}

export default pageCommon;

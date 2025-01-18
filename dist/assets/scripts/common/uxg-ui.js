import Modal from "../uiComp/modal.js";
import SetObserver from "../uiComp/test_intersectionobserver.js";
import "../lib/lottie.min.js";
import { setupSwiper } from "../uiComp/swiper.js";
import { HoverLottie } from "../uiComp/hover_lottie.js";

let animation1; // 전역 변수로 선언
let loading; // 전역 변수로 선언

const uxgUi = {
  Modal,
  SetObserver,

  // 리스트 이미지 호버 했을 때 로티 실행
  setLottie() {
    const listWrap = document.querySelector(".archi-list-wrap");

    const hoverLottieInst = new HoverLottie(listWrap);
    hoverLottieInst.init();
  },

  // main modal
  showModal() {
    const modal01 = document.querySelector(`[data-modal-trigger="modal01"]`);
    new uxgFn.Modal(modal01).init();
    new uxgFn.Modal(modal01).openModal();
  },

  // 로딩 실행
  showLoading() {
    loading = document.createElement("div");
    loading.classList.add("loading-area");

    const loadingLottie = document.createElement("div");
    loadingLottie.classList.add("loading");

    const loadingDimm = document.createElement("div");
    loadingDimm.classList.add("loading-dimm");

    // lottie 생성
    animation1 = bodymovin.loadAnimation({
      container: loadingLottie,
      path: "../../assets/images/lottie/loading_animation01.json",
      renderer: "svg",
      loop: true,
      autoplay: false,
    });

    // 애니메이션의 완료 이벤트를 감지하여 hideLoading 함수 호출
    animation1.addEventListener("complete", () => uxgUi.hideLoading());

    loading.appendChild(loadingLottie);
    loading.appendChild(loadingDimm);
    document.body.appendChild(loading);

    animation1.play();
  },

  // 로딩 멈춤
  hideLoading() {
    loading.parentNode.removeChild(loading);
  },

  // 탭 센터정렬
  scrollCenter() {
    const scrollCenter = (containerSelector, activeBtnSelector) => {
      const scrollContainers = document.querySelectorAll(containerSelector);
      scrollContainers.forEach((scrollContainer) => {
        const activeElement = scrollContainer.querySelector(activeBtnSelector);
        if (activeElement) {
          const scrollLeft = activeElement.offsetLeft - 100;
          scrollContainer.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }
      });
    };

    document.addEventListener("DOMContentLoaded", function () {
      scrollCenter(".list-area", ".btn-tab.on");
    });
  },
};

// 스와이퍼
setupSwiper.init();

export default uxgUi;

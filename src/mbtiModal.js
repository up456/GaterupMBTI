'use strict';

export default class MbtiModal {
  constructor() {
    this.mbtiModal = document.querySelector('.mbti_modal');
  }

  showModal(compositeAlphabet) {
    const template = `
    <div class="modal__container">
      <img class="mbti__img" src="./img/${compositeAlphabet.toLowerCase()}.jfif" alt="${compositeAlphabet}사진">
      <div class="btn-container">
      <button class="mbti__detail-btn modal-btn" data-mbti="${compositeAlphabet}">${compositeAlphabet} 자세히 보기</button>
      <button class="mbti__board-btn modal-btn" data-mbti="${compositeAlphabet}">${compositeAlphabet} 게시판 가기</button>
      </div>
      <button class="mbti__x-btn">X</button>
    </div>
    `;
    this.mbtiModal.innerHTML = template;
    this.mbtiModal.style.opacity = 1;
    this.init();
  }

  init() {
    this.xBtn = document.querySelector('.mbti__x-btn');
    this.xBtn.addEventListener('click', () => this.closeModal());
  }

  closeModal() {
    this.mbtiModal.innerHTML = '';
    this.mbtiModal.style.opacity = 0;
  }
}

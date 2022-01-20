'use strict';

export default class MbtiModal {
  constructor() {
    this.mbtiModal = document.querySelector('.mbti_modal');
  }

  showModal(compositeAlphabet) {
    const template = `
    <div class="modal__container">
      <img class="mbti__img" src="./img/${compositeAlphabet}.jfif" alt="${compositeAlphabet}사진">
      <button class="mbti__board-btn" data-mbti="${compositeAlphabet}">${compositeAlphabet} 게시판 가기</button>
      <button class="mbti__x-btn">X</button>
    </div>
    `;
    this.mbtiModal.innerHTML = template;
  }
}

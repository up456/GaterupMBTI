'use strict';

export default class MbtiSelect {
  constructor() {
    this.mbtiSection = document.querySelector('.mbti__section');
    this.selectedZone = document.querySelector('.selected-zone');
    this.selectedAlphabets = this.selectedZone.querySelectorAll('li');
    this.completeBtn = document.querySelector('.complete-btn');
    this.resetBtn = document.querySelector('.reset-btn');

    this.mbtiSection.addEventListener('mouseover', (event) =>
      this.hoverEffect(event, 'remove')
    );
    this.mbtiSection.addEventListener('mouseout', (event) =>
      this.hoverEffect(event, 'add')
    );
    this.mbtiSection.addEventListener('click', (event) => {
      const alphabet = event.target.dataset.in;
      this.selectAlphabet(alphabet);
      if (this.checkFullAlphabet()) {
        this.onActiveBtn();
      }
    });
    this.resetBtn.addEventListener('click', () => this.doResetBtn());
  }

  // 알파벳, 화살표, 제목에 hover 시 효과
  hoverEffect(event, operator) {
    const alphabet = event.target.dataset.in;
    const mbtiDescription = document.querySelector(
      `.mbti__description[data-out="${alphabet}"]`
    );
    if (mbtiDescription === null) return;
    if (operator == 'add') {
      mbtiDescription.classList.add('hidden');
    } else {
      mbtiDescription.classList.remove('hidden');
    }
  }

  // 선택된 알파벳 넣고, 색상 지정
  selectAlphabet(alphabet) {
    switch (true) {
      case ['e', 'i'].includes(alphabet):
        this.selectedAlphabets[0].innerText = alphabet.toUpperCase();
        this.selectedAlphabets[0].style.color = `var(--${alphabet}-color)`;
        break;
      case ['s', 'n'].includes(alphabet):
        this.selectedAlphabets[1].innerText = alphabet.toUpperCase();
        this.selectedAlphabets[1].style.color = `var(--${alphabet}-color)`;
        break;
      case ['t', 'f'].includes(alphabet):
        this.selectedAlphabets[2].innerText = alphabet.toUpperCase();
        this.selectedAlphabets[2].style.color = `var(--${alphabet}-color)`;
        break;
      case ['j', 'p'].includes(alphabet):
        this.selectedAlphabets[3].innerText = alphabet.toUpperCase();
        this.selectedAlphabets[3].style.color = `var(--${alphabet}-color)`;
        break;
      default:
        return;
    }
  }

  // 설정완료 버튼 활성화
  checkFullAlphabet() {
    return [...this.selectedAlphabets].every((el) => {
      return el.innerText !== '?';
    });
  }
  onActiveBtn() {
    this.completeBtn.removeAttribute('disabled');
    this.completeBtn.classList.add('abled');
  }

  // 리셋 버튼
  doResetBtn() {
    this.selectedAlphabets.forEach((el) => {
      el.innerText = '?';
      el.style.color = '#999';
    });
  }
}

'use strict';
import MbtiModal from './mbtiModal.js';

export default class MbtiSelect {
  constructor() {
    this.mbtiSection = document.querySelector('.mbti__section');
    this.selectedZone = document.querySelector('.selected-zone');
    this.selectedAlphabets = this.selectedZone.querySelectorAll('li');
    this.completeBtn = document.querySelector('.complete-btn');
    this.resetBtn = document.querySelector('.reset-btn');
    this.mbtiAlpahbets = document.querySelectorAll('.mbti__alphabet');

    this.mbtiSection.addEventListener('mouseover', (event) =>
      this.hoverEffect(event, 'remove')
    );
    this.mbtiSection.addEventListener('mouseout', (event) =>
      this.hoverEffect(event, 'add')
    );
    this.mbtiSection.addEventListener('click', (event) => {
      const alphabet = event.target.dataset.in;
      this.selectAlphabet(alphabet);
      this.focusAlphabet(event.target);
      if (this.checkFullAlphabet()) {
        this.onActiveBtn();
      }
    });
    this.resetBtn.addEventListener('click', () => this.doResetBtn());
    this.completeBtn.addEventListener('click', () =>
      this.showModalByCompositeAlphabet()
    );
    this.selectedZone.addEventListener('click', (event) => {
      this.viewSelectZone(event);
    });

    this.mbtiModal = new MbtiModal();
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

  focusAlphabet(target) {
    const alphabet = target.dataset.in;
    if (target.className === 'mbti__alphabet') {
      target.style.color = `var(--${alphabet}-color)`;
      switch (alphabet) {
        case 'e':
          this.restoreColor('i');
          break;
        case 'i':
          this.restoreColor('e');
          break;
        case 's':
          this.restoreColor('n');
          break;
        case 'n':
          this.restoreColor('s');
          break;
        case 't':
          this.restoreColor('f');
          break;
        case 'f':
          this.restoreColor('t');
          break;
        case 'j':
          this.restoreColor('p');
          break;
        case 'p':
          this.restoreColor('j');
          break;
      }
    }
  }
  restoreColor(alphabet) {
    let mbtiAlpahbet = document.querySelector(
      `.mbti__alphabet[data-in="${alphabet}"]`
    );
    mbtiAlpahbet.style.color = 'var(--alphabet-color)';
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
  unActiveBtn() {
    this.completeBtn.setAttribute('disabled', 'true');
    this.completeBtn.classList.remove('abled');
  }

  // 리셋 버튼
  doResetBtn() {
    this.selectedAlphabets.forEach((el) => {
      el.innerText = '?';
      el.style.color = '#999';
    });
    this.mbtiAlpahbets.forEach((el) => {
      el.style.color = 'var(--alphabet-color)';
    });
    this.unActiveBtn();
  }

  // 설정완료 버튼 클릭 => 조합된 단어 초기화
  showModalByCompositeAlphabet() {
    this.compositeAlphabet = '';
    this.selectedAlphabets.forEach((el) => {
      this.compositeAlphabet += el.innerText;
    });
    this.mbtiModal.showModal(this.compositeAlphabet);
    this.doResetBtn();
  }

  // 입력창 누르면 해당 선택사항으로 이동
  viewSelectZone(event) {
    const selectZoneName = event.target.className;

    switch (selectZoneName) {
      case 'selected-one':
        this.moveSelectZone('i');
        break;
      case 'selected-two':
        this.moveSelectZone('n');
        break;
      case 'selected-three':
        this.moveSelectZone('f');
        break;
      case 'selected-four':
        this.moveSelectZone('p');
        break;
    }
  }
  moveSelectZone(alphabet) {
    let mbtiDescription = document.querySelector(
      `.mbti__description[data-out="${alphabet}"]`
    );
    mbtiDescription.scrollIntoView({ block: 'end' });
    window.scrollBy(0, 7);
  }
}

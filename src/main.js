// 알파벳, 화살표, 제목에 hover 시 효과
const mbtiSection = document.querySelector('.mbti__section');

function hoverEffect(event, operator) {
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
mbtiSection.addEventListener('mouseover', (event) =>
  hoverEffect(event, 'remove')
);
mbtiSection.addEventListener('mouseout', (event) => hoverEffect(event, 'add'));

// 선택된 알파벳 넣고, 색상 지정
const selectedZone = document.querySelector('.selected-zone');
const selectedAlphabets = selectedZone.querySelectorAll('li');

function selectAlphabet(alphabet) {
  switch (true) {
    case ['e', 'i'].includes(alphabet):
      selectedAlphabets[0].innerText = alphabet.toUpperCase();
      selectedAlphabets[0].style.color = `var(--${alphabet}-color)`;
      break;
    case ['s', 'n'].includes(alphabet):
      selectedAlphabets[1].innerText = alphabet.toUpperCase();
      selectedAlphabets[1].style.color = `var(--${alphabet}-color)`;
      break;
    case ['t', 'f'].includes(alphabet):
      selectedAlphabets[2].innerText = alphabet.toUpperCase();
      selectedAlphabets[2].style.color = `var(--${alphabet}-color)`;
      break;
    case ['j', 'p'].includes(alphabet):
      selectedAlphabets[3].innerText = alphabet.toUpperCase();
      selectedAlphabets[3].style.color = `var(--${alphabet}-color)`;
      break;
    default:
      return;
  }
}

// 설정완료 버튼 활성화
const completeBtn = document.querySelector('.complete-btn');
const resetBtn = document.querySelector('.reset-btn');

function checkFullAlphabet() {
  return [...selectedAlphabets].every((el) => {
    return el.innerText !== '?';
  });
}
function onActiveBtn() {
  completeBtn.removeAttribute('disabled');
  completeBtn.classList.add('abled');
}

mbtiSection.addEventListener('click', (event) => {
  const alphabet = event.target.dataset.in;
  selectAlphabet(alphabet);
  if (checkFullAlphabet()) {
    onActiveBtn();
  }
});

// 리셋 버튼
function doResetBtn() {
  selectedAlphabets.forEach((el) => {
    el.innerText = '?';
    el.style.color = '#999';
  });
}

resetBtn.addEventListener('click', doResetBtn);

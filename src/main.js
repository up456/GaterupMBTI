const mbtiSection = document.querySelector('.mbti__section');

mbtiSection.addEventListener('mouseover', (event) => {
  const alphabet = event.target.dataset.in;
  const mbtiDescription = document.querySelector(
    `.mbti__description[data-out="${alphabet}"]`
  );
  if (mbtiDescription === null) return;
  mbtiDescription.classList.remove('hidden');
});

mbtiSection.addEventListener('mouseout', (event) => {
  const alphabet = event.target.dataset.in;
  const mbtiDescription = document.querySelector(
    `.mbti__description[data-out="${alphabet}"]`
  );
  if (mbtiDescription === null) return;
  mbtiDescription.classList.add('hidden');
});

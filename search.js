const texts = [
  "영어, 일본어, 중국어… 당신의 선택은?",
  "지금 책이 당신을 기다리고 있어요.",
  "어떤 언어를 시작하고 싶으신가요?",
  "지금 딱 필요한 그 책, 떠오르시나요?"
];
document.getElementById("face-front").textContent = texts[0];
document.getElementById("face-top").textContent = texts[1];
document.getElementById("face-back").textContent = texts[2];
document.getElementById("face-bottom").textContent = texts[3];
const cube = document.getElementById("cube");
let currentAngle = 0;
const displayDuration = 3000;
function rotateCube() {
  currentAngle += 90;
  cube.style.transform = `rotateX(${currentAngle}deg)`;
  setTimeout(rotateCube, displayDuration + 1000);
}
setTimeout(rotateCube, displayDuration);
document.querySelectorAll('.segmented-control button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.segmented-control button').forEach(btn => {
      btn.classList.remove('selected');
    });
    button.classList.add('selected');
  });
});
document.querySelectorAll('.recommended-keywords .keyword:not(.non-clickable)').forEach(keyword => {
  keyword.addEventListener('click', () => {
    document.querySelector('.search-bar').value = keyword.textContent;
  });
});
document.querySelectorAll('.text-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.search-bar').value = button.textContent;
  });
});
document.querySelectorAll('.text-buttons-container02 .text-button02').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.search-bar').value = button.textContent;
  });
});

const slider = document.getElementById('dragContainer');

let isDragging = false;
let startX;
let scrollStart;

slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  slider.classList.add('dragging');

  // getBoundingClientRect()로 정확한 좌표 측정
  startX = e.clientX - slider.getBoundingClientRect().left;
  scrollStart = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();

  const x = e.clientX - slider.getBoundingClientRect().left;
  const distance = (x - startX); // 민감도 값을 낮추어 부드럽게

  slider.scrollLeft = scrollStart - distance;
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    slider.classList.remove('dragging');
  }
});

// 컨테이너 바깥에서 마우스를 놓아도 문제없도록 처리
document.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    slider.classList.remove('dragging');
  }
});

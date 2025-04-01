const slider = document.getElementById('dragContainer');
let isDragging = false;
let startX;
let scrollStart;
slider.addEventListener('mousedown', (e) => {
  isDragging = true;
  slider.classList.add('dragging');
  startX = e.clientX - slider.getBoundingClientRect().left;
  scrollStart = slider.scrollLeft;
});
slider.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.clientX - slider.getBoundingClientRect().left;
  const distance = x - startX;
  slider.scrollLeft = scrollStart - distance;
});
document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    slider.classList.remove('dragging');
  }
});
document.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    slider.classList.remove('dragging');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const notificationIcon = document.getElementById('notificationIcon');
  const menuIcon = document.getElementById('menuIcon');
  const notificationModal = document.getElementById('notificationModal');
  const menuModal = document.getElementById('menuModal');
  const closeNotification = document.getElementById('closeNotification');
  const closeMenu = document.getElementById('closeMenu');
  notificationIcon.addEventListener('click', () => {
    notificationModal.style.display = 'block';
    const content = notificationModal.querySelector('.modal-content');
    content.classList.add('opening');
    content.addEventListener('animationend', () => {
      content.classList.remove('opening');
    }, { once: true });
  });
  menuIcon.addEventListener('click', () => {
    menuModal.style.display = 'block';
    const content = menuModal.querySelector('.modal-content');
    content.classList.add('opening');
    content.addEventListener('animationend', () => {
      content.classList.remove('opening');
    }, { once: true });
  });
  closeNotification.addEventListener('click', (e) => {
    e.stopPropagation();
    notificationModal.style.display = 'none';
  });
  closeMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    menuModal.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    if (event.target === notificationModal) {
      notificationModal.style.display = 'none';
    }
    if (event.target === menuModal) {
      menuModal.style.display = 'none';
    }
  });
});

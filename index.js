document.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('dragContainer');
  if (slider) {
    let isDragging = false, startX, scrollStart;
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
      slider.scrollLeft = scrollStart - (x - startX);
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
  }
  slider.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });


  if (window.innerWidth > 768) {
    const notifModal = document.getElementById("notificationModal");
    const menuModal = document.getElementById("menuModal");
    if (notifModal) notifModal.remove();
    if (menuModal) menuModal.remove();
  } else {
    const notificationIcon = document.getElementById('notificationIcon');
    const menuIcon = document.getElementById('menuIcon');
    const notificationModal = document.getElementById('notificationModal');
    const menuModal = document.getElementById('menuModal');
    const closeNotification = document.getElementById('closeNotification');
    const closeMenu = document.getElementById('closeMenu');

    if (notificationIcon && notificationModal) {
      notificationIcon.addEventListener('click', () => {
        notificationModal.style.display = 'block';
        const content = notificationModal.querySelector('.modal-content');
        if (content) {
          content.classList.add('opening');
          content.addEventListener('animationend', () => {
            content.classList.remove('opening');
          }, { once: true });
        }
      });
    }
    if (menuIcon && menuModal) {
      menuIcon.addEventListener('click', () => {
        menuModal.style.display = 'block';
        const content = menuModal.querySelector('.modal-content');
        if (content) {
          content.classList.add('opening');
          content.addEventListener('animationend', () => {
            content.classList.remove('opening');
          }, { once: true });
        }
      });
    }
    if (closeNotification && notificationModal) {
      closeNotification.addEventListener('click', (e) => {
        e.stopPropagation();
        notificationModal.style.display = 'none';
      });
    }
    if (closeMenu && menuModal) {
      closeMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        menuModal.style.display = 'none';
      });
    }
    window.addEventListener('click', (event) => {
      if (notificationModal && event.target === notificationModal) {
        notificationModal.style.display = 'none';
      }
      if (menuModal && event.target === menuModal) {
        menuModal.style.display = 'none';
      }
    });

    const menuList = document.querySelector('.menu-list');
    if (menuList) {
      menuList.addEventListener('click', (e) => {
        const button = e.target.closest('.sub-toggle-btn');
        if (button) {
          const li = button.closest('li');
          const currentSubMenu = li ? li.querySelector('.sub-menu') : null;
          if (currentSubMenu) {
            document.querySelectorAll('.menu-list .sub-menu').forEach(menu => {
              if (menu !== currentSubMenu) {
                menu.classList.add('hidden');
              }
            });
            currentSubMenu.classList.toggle('hidden');
          }
        }
      });
    }
  }
});

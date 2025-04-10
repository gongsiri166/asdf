document.addEventListener('DOMContentLoaded', function () {
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

    slider.addEventListener('dragstart', (e) => {
      e.preventDefault();
    });
  }

  const notificationIcon = document.getElementById('notificationIcon');
  const menuIcon = document.getElementById('menuIcon');
  const notificationModal = document.getElementById('notificationModal');
  const menuModal = document.getElementById('menuModal');
  const closeNotification = document.getElementById('closeNotification');
  const closeMenu = document.getElementById('closeMenu');

  if (notificationIcon && notificationModal) {
    notificationIcon.addEventListener('click', function () {
      notificationModal.style.display = 'block';
    });
  }

  if (menuIcon && menuModal) {
    menuIcon.addEventListener('click', function () {
      menuModal.style.display = 'block';
    });
  }

  if (closeNotification && notificationModal) {
    closeNotification.addEventListener('click', function (e) {
      e.stopPropagation();
      notificationModal.style.display = 'none';
    });
  }

  if (closeMenu && menuModal) {
    closeMenu.addEventListener('click', function (e) {
      e.stopPropagation();
      menuModal.style.display = 'none';
    });
  }

  window.addEventListener('click', function (event) {
    if (notificationModal && event.target === notificationModal) {
      notificationModal.style.display = 'none';
    }
    if (menuModal && event.target === menuModal) {
      menuModal.style.display = 'none';
    }
  });

  const notice = document.getElementById('notice');
  const closeBtn = document.querySelector('.notice .close-btn');

  if (notificationIcon && notice && closeBtn) {
    notificationIcon.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        notice.style.display = 'block';
        setTimeout(() => {
          notice.classList.add('show');
        }, 10);
      }
    });

    closeBtn.addEventListener('click', function () {
      notice.classList.remove('show');
      setTimeout(() => {
        notice.style.display = 'none';
      }, 400);
    });
  }

  const menuBox = document.getElementById('menuBox');
  const closeMenuBoxBtn = document.querySelector('.menuBox .close-btn');
  const menuTitles = document.querySelectorAll('.menu-title');

  if (menuIcon && menuBox && closeMenuBoxBtn) {
    menuIcon.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        menuBox.classList.add('show');
      }
    });

    closeMenuBoxBtn.addEventListener('click', function () {
      menuBox.classList.remove('show');
      document.querySelectorAll('.menu-group.active').forEach(group => {
        group.classList.remove('active');
      });
    });
  }

  menuTitles.forEach(title => {
    title.addEventListener('click', function () {
      const currentGroup = this.parentElement;
      document.querySelectorAll('.menu-group').forEach(group => {
        if (group !== currentGroup) {
          group.classList.remove('active');
        }
      });
      currentGroup.classList.toggle('active');
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var additionalImagesContainer = document.querySelector('.additional-images-container');
  if (additionalImagesContainer) {
    additionalImagesContainer.innerHTML += additionalImagesContainer.innerHTML;
    
    function autoSlide() {
      additionalImagesContainer.scrollLeft += 1;
      if (additionalImagesContainer.scrollLeft >= additionalImagesContainer.scrollWidth - additionalImagesContainer.clientWidth) {
        additionalImagesContainer.scrollLeft = 0;
      }
      requestAnimationFrame(autoSlide);
    }
    requestAnimationFrame(autoSlide);
  }
});
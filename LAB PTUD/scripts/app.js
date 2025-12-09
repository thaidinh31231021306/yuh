// scripts/app.js
document.addEventListener('DOMContentLoaded', function () {
  // Tab switching
  const menuItems = document.querySelectorAll('.menu-item');
  const tabContents = document.querySelectorAll('.tab-content');

  menuItems.forEach(mi => {
    mi.addEventListener('click', () => {
      // logout special handling
      if (mi.classList.contains('logout')) {
        // mock logout action
        alert('Bạn sẽ được đăng xuất (mock).');
        return;
      }

      // activate menu
      menuItems.forEach(m => m.classList.remove('active'));
      mi.classList.add('active');

      const target = mi.getAttribute('data-tab');
      tabContents.forEach(tc => {
        if (tc.id === target) {
          tc.hidden = false;
        } else {
          tc.hidden = true;
        }
      });

      // change page heading when switching
      const heading = document.querySelector('.page-title');
      if (target === 'profile') heading.textContent = 'Hồ sơ';
      if (target === 'appointments') heading.textContent = 'Lịch đặt';
      if (target === 'settings') heading.textContent = 'Cài đặt';
    });
  });

  // Open / close edit modal
  const openEdit = document.getElementById('openEdit');
  const editModal = document.getElementById('editModal');
  const cancelEdit = document.getElementById('cancelEdit');
  const modalBackdrop = document.getElementById('modalBackdrop');

  function showModal() {
    editModal.classList.add('show');
    editModal.setAttribute('aria-hidden', 'false');
  }
  function hideModal() {
    editModal.classList.remove('show');
    editModal.setAttribute('aria-hidden', 'true');
  }

  openEdit && openEdit.addEventListener('click', showModal);
  cancelEdit && cancelEdit.addEventListener('click', hideModal);
  modalBackdrop && modalBackdrop.addEventListener('click', hideModal);

  // Mock save action (no backend)
  const editForm = document.getElementById('editForm');
  editForm && editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Normally here you'd call API to save profile.
    alert('Lưu hồ sơ (mock). Hãy tích hợp API để lưu thực sự.');
    hideModal();
  });

  // Notifications toggles (mock)
  ['notifEmail', 'notifSms', 'notifWa'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', function () {
        // Save to localStorage as mock persistence
        localStorage.setItem(id, this.checked ? '1' : '0');
      });
      // init from localStorage
      const saved = localStorage.getItem(id);
      if (saved === '1') el.checked = true;
    }
  });

  // Go to search/home (mock)
  const goToHome = document.getElementById('goToHome');
  goToHome && goToHome.addEventListener('click', () => {
    window.location.href = 'index.html'; // or trang chủ thực tế
  });

  // Initialize empty-profile placeholders (user not logged in)
  // Intentionally leave fields blank; developers will replace by fetching user data.
});

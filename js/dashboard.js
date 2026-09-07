/**
 * HAVEN & HEIR - Admin Dashboard Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initDashboardTabs();
  initDashboardSidebar();
});

function initDashboardTabs() {
  const navItems = document.querySelectorAll('.admin-nav-item[data-tab]');
  const tabContents = document.querySelectorAll('.dashboard-tab-content');
  const pageTitle = document.getElementById('adminPageTitle');

  if (!navItems.length || !tabContents.length) return;

  const titles = {
    analytics: 'Analytics & Performance Overview',
    users: 'Client & Designer Management',
    orders: 'Staging Bookings & Orders',
    messages: 'Consultation Inquiries & Messages'
  };

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetTab = item.getAttribute('data-tab');

      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });

      if (pageTitle && titles[targetTab]) {
        pageTitle.textContent = titles[targetTab];
      }

      // Close mobile sidebar if open
      const sidebar = document.getElementById('adminSidebar');
      if (sidebar && window.innerWidth <= 991) {
        sidebar.classList.remove('open');
      }
    });
  });
}

function initDashboardSidebar() {
  const sidebarToggle = document.getElementById('adminSidebarToggle');
  const sidebar = document.getElementById('adminSidebar');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

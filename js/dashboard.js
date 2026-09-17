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
    orders: 'Staging Bookings & Orders',
    users: 'Client & Designer Management',
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
      if (window.innerWidth <= 991) {
        closeDashboardSidebar();
      }
    });
  });
}

function openDashboardSidebar() {
  const sidebar = document.getElementById('adminSidebar');
  const backdrop = document.getElementById('adminSidebarBackdrop');
  if (sidebar) sidebar.classList.add('open');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeDashboardSidebar() {
  const sidebar = document.getElementById('adminSidebar');
  const backdrop = document.getElementById('adminSidebarBackdrop');
  if (sidebar) sidebar.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function initDashboardSidebar() {
  const sidebarToggle = document.getElementById('adminSidebarToggle');
  const sidebarClose = document.getElementById('adminSidebarCloseBtn');
  const backdrop = document.getElementById('adminSidebarBackdrop');
  const sidebar = document.getElementById('adminSidebar');

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeDashboardSidebar();
      } else {
        openDashboardSidebar();
      }
    });
  }

  if (sidebarClose) {
    sidebarClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeDashboardSidebar();
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', () => {
      closeDashboardSidebar();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeDashboardSidebar();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991 && sidebar && sidebar.classList.contains('open')) {
      closeDashboardSidebar();
    }
  });
}

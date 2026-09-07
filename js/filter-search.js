/**
 * HAVEN & HEIR - Portfolio & Blog Filtering and Search Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilter();
  initBlogFilterAndSearch();
});

/* ==========================================================================
   1. PORTFOLIO FILTERING
   ========================================================================== */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-nav .filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-grid .portfolio-card');

  if (!filterBtns.length || !portfolioCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   2. BLOG CATEGORY FILTER & LIVE SEARCH
   ========================================================================== */
function initBlogFilterAndSearch() {
  const searchInput = document.getElementById('blogSearchInput');
  const categoryBtns = document.querySelectorAll('.blog-filter-btn');
  const blogCards = document.querySelectorAll('.blog-card');
  const noResultsMsg = document.getElementById('blogNoResults');

  if (!blogCards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  const filterCards = () => {
    let visibleCount = 0;

    blogCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardTitle = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
      const cardDesc = card.querySelector('p') ? card.querySelector('p').textContent.toLowerCase() : '';

      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesSearch = !searchTerm || cardTitle.includes(searchTerm) || cardDesc.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 50);
        visibleCount++;
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.96)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });

    if (noResultsMsg) {
      if (visibleCount === 0) {
        noResultsMsg.style.display = 'block';
      } else {
        noResultsMsg.style.display = 'none';
      }
    }
  };

  // Category Click Handler
  if (categoryBtns.length) {
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.getAttribute('data-category');
        filterCards();
      });
    });
  }

  // Live Search Input Handler with debounce
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        searchTerm = e.target.value.trim().toLowerCase();
        filterCards();
      }, 200);
    });
  }
}

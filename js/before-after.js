/**
 * HAVEN & HEIR - Before & After Interactive Comparison Slider
 */

document.addEventListener('DOMContentLoaded', () => {
  initBeforeAfterSliders();
});

function initBeforeAfterSliders() {
  const sliderWrappers = document.querySelectorAll('.before-after-wrapper');
  if (!sliderWrappers.length) return;

  sliderWrappers.forEach(wrapper => {
    const container = wrapper.querySelector('.before-after-container');
    const beforeWrap = wrapper.querySelector('.before-img-wrap');
    const handle = wrapper.querySelector('.ba-slider-handle');
    const beforeImg = beforeWrap ? beforeWrap.querySelector('img') : null;

    if (!container || !beforeWrap || !handle) return;

    let isDragging = false;

    // Synchronize inner image width with container width for proper parallax/clip effect
    const updateImgWidth = () => {
      const containerWidth = container.offsetWidth;
      if (beforeImg) {
        beforeImg.style.width = `${containerWidth}px`;
      }
    };

    updateImgWidth();
    window.addEventListener('resize', updateImgWidth);

    const setSliderPosition = (xPos) => {
      const rect = container.getBoundingClientRect();
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      let offset = xPos - rect.left;

      if (offset < 0) offset = 0;
      if (offset > rect.width) offset = rect.width;

      const percentage = (offset / rect.width) * 100;

      if (isRTL) {
        const rtlPercentage = 100 - percentage;
        beforeWrap.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
      } else {
        beforeWrap.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
      }
    };

    // Mouse Events
    const onMouseDown = (e) => {
      isDragging = true;
      setSliderPosition(e.clientX);
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      setSliderPosition(e.clientX);
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch Events
    const onTouchStart = (e) => {
      isDragging = true;
      if (e.touches && e.touches[0]) {
        setSliderPosition(e.touches[0].clientX);
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging) return;
      if (e.touches && e.touches[0]) {
        setSliderPosition(e.touches[0].clientX);
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    // Event listeners on handle and container
    handle.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    handle.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
  });
}

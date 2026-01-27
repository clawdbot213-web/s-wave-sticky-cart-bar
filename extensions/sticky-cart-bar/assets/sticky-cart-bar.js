(() => {
  const bar = document.getElementById('s-wave-sticky-cart-bar');
  if (!bar) return;

  const button = bar.querySelector('.s-wave-sticky-cart-bar__button');
  const productForm = document.querySelector('form[action*="/cart/add"]');

  const showBar = () => {
    bar.classList.add('is-visible');
  };

  const hideBar = () => {
    bar.classList.remove('is-visible');
  };

  const onScroll = () => {
    if (!productForm) {
      showBar();
      return;
    }
    const rect = productForm.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      showBar();
    } else {
      hideBar();
    }
  };

  const submitAddToCart = () => {
    if (!productForm) return;
    const submitButton = productForm.querySelector('[type="submit"]');
    if (submitButton) {
      submitButton.click();
    }
  };

  button?.addEventListener('click', submitAddToCart);
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();

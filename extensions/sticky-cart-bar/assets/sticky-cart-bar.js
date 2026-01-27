(() => {
  const bar = document.getElementById('s-wave-sticky-cart-bar');
  if (!bar) return;

  const button = bar.querySelector('.s-wave-sticky-cart-bar__button');
  const quantityInput = bar.querySelector('.s-wave-sticky-cart-bar__quantity');
  const productForm = document.querySelector('form[action*="/cart/add"]');
  const variantInput = productForm?.querySelector('input[name="id"]');

  const alwaysShow = bar.dataset.alwaysShow === 'true';
  const showAfter = parseInt(bar.dataset.showAfter || '0', 10) || 0;
  const defaultLabel = bar.dataset.buttonLabel || button?.textContent || 'Add to cart';
  const soldOutLabel = bar.dataset.soldOutLabel || 'Sold out';

  const syncVariantFromForm = () => {
    if (!variantInput) return;
    if (variantInput.value) {
      bar.dataset.variantId = variantInput.value;
    }
  };

  const syncAvailability = () => {
    const available = bar.dataset.available !== 'false';
    if (!button) return;
    button.disabled = !available;
    button.textContent = available ? defaultLabel : soldOutLabel;
  };

  if (variantInput) {
    syncVariantFromForm();
    variantInput.addEventListener('change', syncVariantFromForm);
    variantInput.addEventListener('input', syncVariantFromForm);
  }

  const shouldShow = () => {
    if (alwaysShow) return true;
    if (showAfter > 0 && window.scrollY < showAfter) return false;
    if (!productForm) return true;

    const rect = productForm.getBoundingClientRect();
    return rect.bottom < 0 || rect.top > window.innerHeight;
  };

  const toggleBar = () => {
    if (shouldShow()) {
      bar.classList.add('is-visible');
    } else {
      bar.classList.remove('is-visible');
    }
  };

  const submitAddToCart = () => {
    if (button?.disabled) return;
    const quantity = Math.max(1, parseInt(quantityInput?.value || '1', 10) || 1);

    if (productForm) {
      const formQuantity = productForm.querySelector('input[name="quantity"]');
      if (formQuantity) {
        formQuantity.value = String(quantity);
      }
      const submitButton = productForm.querySelector('[type="submit"]');
      if (submitButton) {
        submitButton.click();
      }
      return;
    }

    const variantId = bar.dataset.variantId;
    if (!variantId) return;

    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ items: [{ id: Number(variantId), quantity }] })
    }).catch(() => {});
  };

  syncAvailability();
  button?.addEventListener('click', submitAddToCart);
  document.addEventListener('scroll', toggleBar, { passive: true });
  window.addEventListener('resize', toggleBar);
  toggleBar();
})();

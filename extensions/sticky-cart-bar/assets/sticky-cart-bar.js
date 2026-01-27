(() => {
  const bar = document.getElementById('s-wave-sticky-cart-bar');
  if (!bar) return;

  const button = bar.querySelector('.s-wave-sticky-cart-bar__button');
  const quantityInput = bar.querySelector('.s-wave-sticky-cart-bar__quantity');
  const productForm = document.querySelector('form[action*="/cart/add"]');
  const variantInput = productForm?.querySelector('input[name="id"]');

  const syncVariantFromForm = () => {
    if (!variantInput) return;
    if (variantInput.value) {
      bar.dataset.variantId = variantInput.value;
    }
  };

  if (variantInput) {
    syncVariantFromForm();
    variantInput.addEventListener('change', syncVariantFromForm);
    variantInput.addEventListener('input', syncVariantFromForm);
  }

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

  button?.addEventListener('click', submitAddToCart);
  document.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();
})();

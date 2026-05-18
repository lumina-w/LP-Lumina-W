const items = document.querySelectorAll<HTMLElement>('.faq__item');

items.forEach((item) => {
  const btn = item.querySelector<HTMLButtonElement>('.faq__q');
  btn?.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    items.forEach((other) => {
      other.classList.remove('open');
      other.querySelector('.faq__q')?.setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

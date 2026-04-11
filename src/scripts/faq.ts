const triggers = document.querySelectorAll('.faq-trigger');

triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    const answer = item?.querySelector('.faq-answer') as HTMLElement;
    const icon = trigger.querySelector('.faq-icon');
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('.faq-item').forEach((el) => {
      const otherAnswer = el.querySelector('.faq-answer') as HTMLElement;
      const otherTrigger = el.querySelector('.faq-trigger');
      const otherIcon = el.querySelector('.faq-icon');

      if (otherAnswer && otherAnswer !== answer) {
        otherAnswer.style.maxHeight = '0px';
        otherAnswer.style.opacity = '0';
        otherTrigger?.setAttribute('aria-expanded', 'false');
        otherIcon?.classList.remove('rotate-180');
        setTimeout(() => otherAnswer.classList.add('hidden'), 300);
      }
    });

    if (!isOpen && answer) {
      answer.classList.remove('hidden');
      answer.style.maxHeight = '0px';
      answer.style.opacity = '0';

      requestAnimationFrame(() => {
        answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease';
        answer.style.maxHeight = `${answer.scrollHeight}px`;
        answer.style.opacity = '1';
      });

      trigger.setAttribute('aria-expanded', 'true');
      icon?.classList.add('rotate-180');
    } else if (answer) {
      answer.style.maxHeight = '0px';
      answer.style.opacity = '0';
      trigger.setAttribute('aria-expanded', 'false');
      icon?.classList.remove('rotate-180');
      setTimeout(() => answer.classList.add('hidden'), 300);
    }
  });
});

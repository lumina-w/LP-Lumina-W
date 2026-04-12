const triggers = document.querySelectorAll(
  '.faq-trigger'
) as NodeListOf<HTMLElement>;

triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item') as HTMLElement;
    const answer = item?.querySelector('.faq-answer') as HTMLElement;
    const icon = trigger.querySelector('.faq-icon') as HTMLElement;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';

    if (!item) return;

    document.querySelectorAll('.faq-item').forEach((el) => {
      const otherAnswer = el.querySelector('.faq-answer') as HTMLElement;
      const otherTrigger = el.querySelector('.faq-trigger') as HTMLElement;
      const otherIcon = el.querySelector('.faq-icon') as HTMLElement;
      const otherItem = el as HTMLElement;

      if (otherAnswer && otherAnswer !== answer) {
        otherItem.style.height = otherTrigger.offsetHeight + 'px';
        otherAnswer.style.opacity = '0';
        otherTrigger?.setAttribute('aria-expanded', 'false');
        otherIcon?.classList.remove('rotate-180');
        setTimeout(() => {
          otherAnswer.classList.add('hidden');
          otherItem.style.height = '';
        }, 300);
      }
    });

    if (!isOpen && answer) {
      answer.classList.remove('hidden');
      answer.style.opacity = '0';
      const buttonHeight = trigger.offsetHeight;
      const answerHeight = answer.scrollHeight;
      const openHeight = buttonHeight + answerHeight;
      item.style.height = buttonHeight + 'px';

      requestAnimationFrame(() => {
        item.style.height = openHeight + 'px';
        answer.style.opacity = '1';
      });

      trigger.setAttribute('aria-expanded', 'true');
      icon?.classList.add('rotate-180');
    } else if (answer) {
      item.style.height = trigger.offsetHeight + 'px';
      answer.style.opacity = '0';
      trigger.setAttribute('aria-expanded', 'false');
      icon?.classList.remove('rotate-180');
      setTimeout(() => {
        answer.classList.add('hidden');
        item.style.height = '';
      }, 300);
    }
  });
});

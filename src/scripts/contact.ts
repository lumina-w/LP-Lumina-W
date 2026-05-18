const form = document.getElementById('contact-form') as HTMLFormElement | null;
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
const success = document.getElementById('form-success');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!submitBtn) return;

  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  const data = {
    name: (document.getElementById('c-name') as HTMLInputElement).value,
    company: (document.getElementById('c-company') as HTMLInputElement).value,
    email: (document.getElementById('c-email') as HTMLInputElement).value,
    message: (document.getElementById('c-message') as HTMLTextAreaElement).value,
  };

  const res = await fetch('https://formspree.io/f/xpqovooa', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    form.style.display = 'none';
    success?.classList.add('show');
  } else {
    submitBtn.textContent = 'Error al enviar. Intenta de nuevo.';
    submitBtn.disabled = false;
  }
});

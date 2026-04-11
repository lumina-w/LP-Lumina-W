const form = document.getElementById('contact-form') as HTMLFormElement;
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
const success = document.getElementById('form-success');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  const data = {
    name: (document.getElementById('name') as HTMLInputElement).value,
    company: (document.getElementById('company') as HTMLInputElement).value,
    email: (document.getElementById('email') as HTMLInputElement).value,
    message: (document.getElementById('message') as HTMLTextAreaElement).value,
  };

  const res = await fetch('https://formspree.io/f/xpqovooa', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    form.classList.add('hidden');
    success?.classList.remove('hidden');
    success?.classList.add('flex');
  } else {
    submitBtn.textContent = 'Error al enviar. Intenta de nuevo.';
    submitBtn.disabled = false;
  }
});

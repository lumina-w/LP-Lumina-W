const form = document.getElementById('contact-form') as HTMLFormElement | null;
const submitBtn = document.getElementById(
  'submit-btn'
) as HTMLButtonElement | null;
const success = document.getElementById('form-success');
const errorBox = document.getElementById('form-error');

// Cadenas traducidas inyectadas como data-* desde el componente (i18n)
const labelSending = form?.dataset.sending ?? 'Enviando...';
const labelError = form?.dataset.error ?? 'No se pudo enviar el mensaje.';
const labelSubmit = submitBtn?.textContent?.trim() ?? '';

const showError = () => {
  if (errorBox) {
    errorBox.textContent = labelError;
    errorBox.hidden = false;
  }
  if (submitBtn) {
    submitBtn.textContent = labelSubmit;
    submitBtn.disabled = false;
  }
};

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!submitBtn) return;

  // Limpiar error previo
  if (errorBox) {
    errorBox.hidden = true;
    errorBox.textContent = '';
  }

  submitBtn.textContent = labelSending;
  submitBtn.disabled = true;

  const data = Object.fromEntries(new FormData(form).entries());

  try {
    const res = await fetch('https://formspree.io/f/xpqovooa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      form.style.display = 'none';
      success?.classList.add('show');
      // Mover el foco al mensaje de exito para anunciarlo en lectores de pantalla
      success?.focus();
    } else {
      showError();
    }
  } catch {
    showError();
  }
});

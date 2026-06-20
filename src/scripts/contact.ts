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

// Asociacion de errores por campo (WCAG 3.3.1 / 4.1.3). Usamos el mensaje
// nativo del navegador (`validationMessage`), ya localizado, y lo volcamos en
// el nodo referenciado por aria-describedby; aria-invalid marca el campo.
const fields = form
  ? Array.from(
      form.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >('input[aria-describedby], textarea[aria-describedby]')
    )
  : [];

const errNodeOf = (el: Element) => {
  const errId = el.getAttribute('aria-describedby');
  return errId ? document.getElementById(errId) : null;
};

fields.forEach((el) => {
  el.addEventListener('invalid', () => {
    el.setAttribute('aria-invalid', 'true');
    const errEl = errNodeOf(el);
    if (errEl) errEl.textContent = el.validationMessage;
  });
});

// Limpiar a nivel de formulario: cubre tambien los grupos de radio, donde el
// `change` ocurre en una opcion distinta a la que porta el aria-describedby.
const refreshErrors = () => {
  fields.forEach((el) => {
    if (el.getAttribute('aria-invalid') === 'true' && el.checkValidity()) {
      el.removeAttribute('aria-invalid');
      const errEl = errNodeOf(el);
      if (errEl) errEl.textContent = '';
    }
  });
};
form?.addEventListener('input', refreshErrors);
form?.addEventListener('change', refreshErrors);

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
  // Metadatos para triage en el backend propio (Supabase + Resend)
  data.locale = document.documentElement.lang || 'es';
  data.source = window.location.pathname;

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      form.style.display = 'none';
      if (success) {
        // Inyectar el contenido DESPUES de revelar la region role="status" para
        // que los lectores de pantalla lo anuncien (un toggle de display sobre
        // contenido preexistente no se anuncia de forma fiable).
        const h = document.createElement('h3');
        h.textContent = success.dataset.title ?? '';
        const p = document.createElement('p');
        p.textContent = success.dataset.text ?? '';
        success.append(h, p);
        success.classList.add('show');
        success.focus();
      }
    } else {
      showError();
    }
  } catch {
    showError();
  }
});

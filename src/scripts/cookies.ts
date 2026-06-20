declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');
const rejectBtn = document.getElementById('cookie-reject');

const COOKIE_KEY = 'lw_cookies';

function loadGA() {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-RBNC0VP6D3';
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-RBNC0VP6D3');
  };
}

let lastFocused: HTMLElement | null = null;

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    // Cerrar con Esc = solo esenciales: no carga analytics y la decisión se
    // guarda para no volver a preguntar.
    localStorage.setItem(COOKIE_KEY, 'rejected');
    hideBanner();
  }
}

function hideBanner() {
  if (!banner) return;
  banner.style.opacity = '0';
  document.removeEventListener('keydown', onKeydown);
  setTimeout(() => banner.classList.add('hidden'), 300);
  lastFocused?.focus();
}

function showBanner() {
  if (!banner) return;
  lastFocused = document.activeElement as HTMLElement | null;
  banner.classList.remove('hidden');
  banner.classList.add('flex');
  document.addEventListener('keydown', onKeydown);
  requestAnimationFrame(() => {
    banner.style.opacity = '1';
  });
}

const saved = localStorage.getItem(COOKIE_KEY);

if (saved === 'accepted') {
  loadGA();
} else if (!saved) {
  // Aparece tras el primer scroll, no al cargar, para no competir con el hero.
  let shown = false;
  const reveal = () => {
    if (shown) return;
    shown = true;
    window.removeEventListener('scroll', onScroll);
    clearTimeout(fallback);
    showBanner();
  };
  const onScroll = () => {
    if (window.scrollY > 80) reveal();
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  // Respaldo: si el usuario nunca hace scroll, mostrar de todos modos.
  const fallback = setTimeout(reveal, 8000);
}

acceptBtn?.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'accepted');
  hideBanner();
  loadGA();
});

rejectBtn?.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'rejected');
  hideBanner();
});

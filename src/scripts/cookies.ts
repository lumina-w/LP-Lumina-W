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

function hideBanner() {
  if (banner) {
    banner.style.opacity = '0';
    setTimeout(() => banner.classList.add('hidden'), 300);
  }
}

function showBanner() {
  if (banner) {
    banner.classList.remove('hidden');
    banner.classList.add('flex');
    requestAnimationFrame(() => {
      banner.style.opacity = '1';
    });
  }
}

const saved = localStorage.getItem(COOKIE_KEY);

if (saved === 'accepted') {
  loadGA();
} else if (!saved) {
  setTimeout(showBanner, 1500);
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
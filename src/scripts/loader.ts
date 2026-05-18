const loader = document.getElementById('loader');
const bar = document.getElementById('loader-bar');

if (loader && bar) {
  requestAnimationFrame(() => {
    bar.style.width = '100%';
  });

  const hide = () => {
    loader.classList.add('loader--hidden');
    setTimeout(() => loader.remove(), 600);
  };

  if (document.readyState === 'complete') {
    setTimeout(hide, 320);
  } else {
    window.addEventListener('load', () => setTimeout(hide, 320));
  }
}

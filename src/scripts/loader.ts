const loader = document.getElementById('loader');
const bar = document.getElementById('loader-bar');

if (bar) {
  setTimeout(() => {
    bar.style.width = '60%';
  }, 100);

  setTimeout(() => {
    bar.style.width = '100%';
  }, 400);
}

window.addEventListener('load', () => {
  if (bar) bar.style.width = '100%';

  setTimeout(() => {
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, 600);
});
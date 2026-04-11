const glow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
  glow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
  if (!glow) return;
  glow.style.opacity = '0';
});

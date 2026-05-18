const glow = document.getElementById('cursor-glow');

if (glow && !matchMedia('(pointer: coarse)').matches) {
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let raf = 0;

  const animate = () => {
    currentX += (targetX - currentX) * 0.18;
    currentY += (targetY - currentY) * 0.18;
    glow.style.transform = `translate(${currentX - 128}px, ${currentY - 128}px)`;
    raf = requestAnimationFrame(animate);
  };

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (glow.style.opacity !== '1') glow.style.opacity = '1';
    if (!raf) raf = requestAnimationFrame(animate);
  });

  window.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
}

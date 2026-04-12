let lastScrollY = window.scrollY;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const scrollingDown = window.scrollY > lastScrollY;

      if (entry.isIntersecting) {
        entry.target.classList.remove('from-top', 'from-bottom');
        entry.target.classList.add('visible');
      } else {
  entry.target.classList.remove('visible');
  if (scrollingDown) {
    entry.target.classList.add('from-top');  
  } else {
    entry.target.classList.add('from-bottom');  
  }
}
    });
  },
  { threshold: 0.15 }
);

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});
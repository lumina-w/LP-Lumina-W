const nav = document.getElementById('nav');
const burger = document.getElementById('nav-burger');
const mobile = document.getElementById('nav-mobile');
const groups = document.querySelectorAll<HTMLElement>('[data-nav-group]');

const onScroll = () => {
  if (!nav) return;
  if (window.scrollY > 8) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const closeMobile = () => {
  mobile?.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
  mobile?.setAttribute('aria-hidden', 'true');
};
const openMobile = () => {
  mobile?.classList.add('open');
  burger?.setAttribute('aria-expanded', 'true');
  mobile?.setAttribute('aria-hidden', 'false');
};

burger?.addEventListener('click', () => {
  if (mobile?.classList.contains('open')) closeMobile();
  else openMobile();
});
mobile?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', closeMobile);
});

const closeAllGroups = (except?: HTMLElement) => {
  groups.forEach((g) => {
    if (g === except) return;
    g.classList.remove('open');
    g.querySelector('.nav__group-btn')?.setAttribute('aria-expanded', 'false');
  });
};

groups.forEach((group) => {
  const btn = group.querySelector<HTMLButtonElement>('.nav__group-btn');
  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = group.classList.contains('open');
    closeAllGroups();
    if (!isOpen) {
      group.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
  group.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => closeAllGroups());
  });
});

document.addEventListener('click', (e) => {
  const target = e.target as Node;
  let inside = false;
  groups.forEach((g) => {
    if (g.contains(target)) inside = true;
  });
  if (!inside) closeAllGroups();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Devolver el foco al disparador del grupo abierto antes de cerrarlo
    const openGroup = Array.from(groups).find((g) =>
      g.classList.contains('open')
    );
    const openBtn =
      openGroup?.querySelector<HTMLButtonElement>('.nav__group-btn');
    closeAllGroups();
    closeMobile();
    openBtn?.focus();
  }
});

// Scrollspy: marca el enlace de la seccion visible con aria-current="location"
const spyLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>(
    '.nav__links a.nav__link[href*="#"]'
  )
);
const sectionToLink = new Map<Element, HTMLAnchorElement>();
spyLinks.forEach((link) => {
  const hash = link.getAttribute('href')?.split('#')[1];
  if (!hash) return;
  const section = document.getElementById(hash);
  if (section) sectionToLink.set(section, link);
});

if (sectionToLink.size > 0) {
  const clearCurrent = () =>
    spyLinks.forEach((l) => l.removeAttribute('aria-current'));
  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const link = sectionToLink.get(visible.target);
      if (!link) return;
      clearCurrent();
      link.setAttribute('aria-current', 'location');
    },
    { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
  );
  sectionToLink.forEach((_, section) => spy.observe(section));
}

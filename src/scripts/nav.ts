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

const closeMobile = (returnFocus = false) => {
  if (!mobile) return;
  mobile.classList.remove('open');
  mobile.setAttribute('aria-hidden', 'true');
  // `inert` saca el panel del orden de tabulacion y del arbol de accesibilidad
  // mientras esta cerrado (sus enlaces siguen en el DOM pero no son enfocables).
  mobile.setAttribute('inert', '');
  burger?.setAttribute('aria-expanded', 'false');
  if (returnFocus) burger?.focus();
};
const openMobile = () => {
  if (!mobile) return;
  mobile.classList.add('open');
  mobile.setAttribute('aria-hidden', 'false');
  mobile.removeAttribute('inert');
  burger?.setAttribute('aria-expanded', 'true');
  // Llevar el foco al primer enlace del panel para operarlo con teclado.
  mobile.querySelector('a')?.focus();
};

burger?.addEventListener('click', () => {
  if (mobile?.classList.contains('open')) closeMobile(true);
  else openMobile();
});
mobile?.querySelectorAll('a').forEach((a) => {
  // Al navegar desde un enlace no devolvemos el foco al burger (el foco debe
  // seguir al destino del enlace).
  a.addEventListener('click', () => closeMobile());
});

// La visibilidad del dropdown la gobierna SOLO la clase `.open` (mas
// aria-expanded), nunca CSS :hover. Asi Escape puede descartarlo aunque el
// puntero siga encima (WCAG 1.4.13) y el estado ARIA siempre coincide.
const openGroup = (group: HTMLElement, btn?: HTMLButtonElement | null) => {
  group.classList.add('open');
  btn?.setAttribute('aria-expanded', 'true');
};
const closeGroup = (group: HTMLElement, btn?: HTMLButtonElement | null) => {
  group.classList.remove('open');
  btn?.setAttribute('aria-expanded', 'false');
};
const closeAllGroups = (except?: HTMLElement) => {
  groups.forEach((g) => {
    if (g === except) return;
    closeGroup(g, g.querySelector<HTMLButtonElement>('.nav__group-btn'));
  });
};

const hoverCapable = window.matchMedia(
  '(hover: hover) and (pointer: fine)'
).matches;

groups.forEach((group) => {
  const btn = group.querySelector<HTMLButtonElement>('.nav__group-btn');
  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = group.classList.contains('open');
    closeAllGroups();
    if (!isOpen) openGroup(group, btn);
  });
  if (hoverCapable) {
    group.addEventListener('mouseenter', () => {
      closeAllGroups(group);
      openGroup(group, btn);
    });
    group.addEventListener('mouseleave', () => closeGroup(group, btn));
  }
  // Cerrar al salir con teclado (Tab fuera del grupo).
  group.addEventListener('focusout', (e) => {
    if (!group.contains(e.relatedTarget as Node | null)) closeGroup(group, btn);
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
  if (e.key !== 'Escape') return;
  // Devolver el foco al disparador del grupo abierto antes de cerrarlo; si el
  // que estaba abierto era el menu movil, devolver el foco al burger.
  const open = Array.from(groups).find((g) => g.classList.contains('open'));
  const openBtn = open?.querySelector<HTMLButtonElement>('.nav__group-btn');
  const mobileOpen = mobile?.classList.contains('open') ?? false;
  closeAllGroups();
  closeMobile(mobileOpen);
  if (openBtn) openBtn.focus();
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

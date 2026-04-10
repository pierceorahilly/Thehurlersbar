// ─── MENU LIGHTBOX ───────────────────────────────────────────
const menuImg      = document.getElementById('menuImg');
const lightbox     = document.getElementById('menuLightbox');
const lightboxClose = document.getElementById('lightboxClose');
if (menuImg && lightbox) {
  menuImg.addEventListener('click', () => lightbox.classList.add('open'));
  lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') lightbox.classList.remove('open');
  });
}

// ─── HERO FADE-IN ────────────────────────────────────────────
window.addEventListener('load', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const delay = parseInt(el.dataset.delay) || 0;
    setTimeout(() => el.classList.add('visible'), delay);
  });
});

// ─── CARVERY / FOOD IMAGE AUTO-SCROLL ───────────────────────
const carveryScroll = document.querySelector('.carvery-scroll');
if (carveryScroll) {
  let current = 0;
  const imgs = carveryScroll.querySelectorAll('img');
  setInterval(() => {
    current = (current + 1) % imgs.length;
    carveryScroll.scrollTo({ left: imgs[current].offsetLeft, behavior: 'smooth' });
  }, 3000);
}

// ─── NAVBAR (transparent → solid on scroll) ──────────────────
const navbar = document.getElementById('navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── MOBILE NAV TOGGLE ───────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ─── SET MIN DATE TO TODAY ────────────────────────────────────
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

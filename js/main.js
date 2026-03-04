// ── NAV ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
if (hamburger) hamburger.addEventListener('click', () => mobileNav.classList.add('open'));
if (mobileNavClose) mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('open'));
if (mobileNav) mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

// ── ACTIVE NAV ──
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
  if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html')) a.classList.add('active');
});

// ── SCROLL REVEAL ──
const ro = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), i * 70); ro.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// ── CERT BARS ──
const certObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.cert-bar-fill').forEach(b => b.style.width = b.dataset.width);
      certObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.cert-grid').forEach(el => certObs.observe(el));

// ── CONTACT FORM ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...'; btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Sent Successfully';
      btn.style.background = 'var(--orange)';
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; btn.style.background = ''; form.reset(); }, 2500);
    }, 1000);
  });
}

// ── TYPING (hero) ──
const typingEl = document.getElementById('typingText');
if (typingEl) {
  const words = ['Developer', 'Designer', 'Problem Solver', 'CS Student'];
  let wi = 0, ci = 0, del = false;
  function type() {
    const w = words[wi];
    if (!del) { typingEl.textContent = w.slice(0, ++ci); if (ci === w.length) { del = true; setTimeout(type, 1800); return; } }
    else { typingEl.textContent = w.slice(0, --ci); if (ci === 0) { del = false; wi = (wi + 1) % words.length; } }
    setTimeout(type, del ? 55 : 85);
  }
  type();
}

// ── FILTER TABS ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.filter-section').forEach(s => {
      s.style.display = (f === 'all' || s.dataset.category === f) ? 'block' : 'none';
    });
  });
});

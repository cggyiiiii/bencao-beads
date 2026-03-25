/* ===== Main JS ===== */
document.addEventListener('DOMContentLoaded', function() {
  // Nav scroll
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => observer.observe(el));
});

// WhatsApp helper
function openWhatsApp(product) {
  const msg = encodeURIComponent(product 
    ? `Hi, I'm interested in ${product}. Can you tell me more? 你好，我想了解 ${product}。` 
    : 'Hi, I found you on BenCao Beads! 你好，我想了解本草香珠的产品。');
  window.open(`https://wa.me/601164362283?text=${msg}`, '_blank');
}

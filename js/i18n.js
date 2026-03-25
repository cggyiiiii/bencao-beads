/* ===== Language Toggle ===== */
(function() {
  const saved = localStorage.getItem('bencao-lang') || 'cn';
  if (saved === 'en') document.body.classList.add('lang-en');

  document.addEventListener('click', function(e) {
    if (e.target.closest('.lang-btn')) {
      document.body.classList.toggle('lang-en');
      const lang = document.body.classList.contains('lang-en') ? 'en' : 'cn';
      localStorage.setItem('bencao-lang', lang);
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.textContent = lang === 'en' ? '中文' : 'EN';
      });
    }
  });

  // Set initial button text
  document.addEventListener('DOMContentLoaded', function() {
    const lang = document.body.classList.contains('lang-en') ? 'en' : 'cn';
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.textContent = lang === 'en' ? '中文' : 'EN';
    });
  });
})();

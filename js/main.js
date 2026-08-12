/* ZIT Connect — Main JavaScript */

// Initialize language on page load
(function initApp() {
  // Get saved language or browser default
  const savedLang = localStorage.getItem('zit-language');
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = savedLang || (browserLang === 'es' ? 'es' : 'fr');

  // Set initial language
  setLanguage(defaultLang);

  // Initialize intersection observer for scroll reveal
  initScrollReveal();
})();

/**
 * Set language and update UI
 * @param {string} lang - Language code ('fr' or 'es')
 */
function setLanguage(lang) {
  if (!['fr', 'es'].includes(lang)) return;

  // Update body class
  document.body.classList.remove('lang-fr', 'lang-es');
  document.body.classList.add('lang-' + lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update UI buttons
  const btnFr = document.getElementById('btn-fr');
  const btnEs = document.getElementById('btn-es');

  if (btnFr) btnFr.classList.toggle('on', lang === 'fr');
  if (btnEs) btnEs.classList.toggle('on', lang === 'es');

  // Save preference
  localStorage.setItem('zit-language', lang);
}

/**
 * Initialize scroll reveal animation using Intersection Observer
 */
function initScrollReveal() {
  // Check if IntersectionObserver is supported
  if (!('IntersectionObserver' in window)) {
    document.body.classList.remove('has-js');
    return;
  }

  document.body.classList.add('has-js');

  // Create observer for sections
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  // Observe all sections
  document.querySelectorAll('section').forEach(function(section) {
    observer.observe(section);
  });
}

// Expose setLanguage globally for inline onclick handlers
window.setLanguage = setLanguage;

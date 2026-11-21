/* ZIT Connect — progressive enhancement, no runtime dependencies. */
(() => {
  'use strict';
  const root = document.documentElement;
  const translated = [...document.querySelectorAll('[data-es]')].map(el => ({ el, fr: el.textContent, es: el.dataset.es }));
  const labels = [...document.querySelectorAll('[data-label-es]')].map(el => ({ el, fr: el.getAttribute('aria-label'), es: el.dataset.labelEs }));
  const placeholders = [...document.querySelectorAll('[data-placeholder-es]')].map(el => ({ el, fr: el.getAttribute('placeholder'), es: el.dataset.placeholderEs }));
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const copy = {
    fr: {
      title: 'ZIT Connect — Ingénierie infrastructure & télécoms à Toulouse',
      description: 'Jonathan Zambrano, ingénieur systèmes indépendant à Toulouse. VoIP, Proxmox, réseaux, supervision et automatisation. Un interlocuteur, de l’audit à l’exploitation.',
      sending: 'Envoi en cours…',
      success: 'Merci, votre demande a bien été transmise. Je reviens vers vous pour échanger sur votre projet.',
      error: 'Votre demande n’a pas pu être envoyée. Réessayez ou écrivez directement à jonathan.zambrano@zitconnect.fr.',
      menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu'
    },
    es: {
      title: 'ZIT Connect — Ingeniería de infraestructura & telecomunicaciones en Toulouse',
      description: 'Jonathan Zambrano, ingeniero de sistemas independiente en Toulouse. VoIP, Proxmox, redes, supervisión y automatización. Un interlocutor desde la auditoría hasta la operación.',
      sending: 'Enviando…',
      success: 'Gracias, su solicitud se ha enviado correctamente. Me pondré en contacto para hablar de su proyecto.',
      error: 'No se ha podido enviar su solicitud. Inténtelo de nuevo o escriba directamente a jonathan.zambrano@zitconnect.fr.',
      menuOpen: 'Abrir el menú', menuClose: 'Cerrar el menú'
    }
  };
  let language = 'fr';
  let sending = false;
  let statusKey = '';
  const menu = document.querySelector('#mobile-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const form = document.querySelector('#contact-form');
  const submit = form.querySelector('[type="submit"]');
  const status = document.querySelector('#form-status');

  function setLanguage(next) {
    if (!Object.hasOwn(copy, next)) return;
    language = next;
    root.lang = next;
    translated.forEach(({el, ...texts}) => { el.textContent = texts[next]; });
    labels.forEach(({el, ...texts}) => { el.setAttribute('aria-label', texts[next]); });
    placeholders.forEach(({el, ...texts}) => { el.placeholder = texts[next]; });
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    document.title = copy[next].title;
    document.querySelector('meta[name="description"]').content = copy[next].description;
    menuToggle.setAttribute('aria-label', copy[next][menu.hidden ? 'menuOpen' : 'menuClose']);
    if (sending) submit.textContent = copy[next].sending;
    if (statusKey) status.textContent = copy[next][statusKey];
    try { localStorage.setItem('zit-language', next); } catch { /* Private browsing may block storage. */ }
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('zit-language'); } catch { /* French remains available without storage. */ }
  setLanguage(Object.hasOwn(copy, savedLanguage) ? savedLanguage : 'fr');

  function closeMenu(restoreFocus = false) {
    menu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', copy[language].menuOpen);
    if (restoreFocus) menuToggle.focus();
  }
  menuToggle.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', copy[language][open ? 'menuClose' : 'menuOpen']);
  });
  menu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    closeMenu();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) { target.tabIndex = -1; target.focus({preventScroll: true}); }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) closeMenu(true); });
  document.addEventListener('click', event => { if (!menu.hidden && !event.target.closest('.site-header')) closeMenu(); });
  const desktop = window.matchMedia('(min-width: 981px)');
  desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });

  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
    document.querySelector('#contact-service').value = link.dataset.service;
  }));

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending || !form.reportValidity() || form.elements._gotcha.value) return;
    sending = true;
    statusKey = '';
    status.textContent = '';
    status.className = 'form-status';
    submit.disabled = true;
    submit.textContent = copy[language].sending;
    form.setAttribute('aria-busy', 'true');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(form.action, {
        method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' }, signal: controller.signal
      });
      if (!response.ok) throw new Error('Submission rejected');
      form.reset();
      statusKey = 'success';
      status.classList.add('success');
    } catch {
      statusKey = 'error';
      status.classList.add('error');
    } finally {
      clearTimeout(timeout);
      sending = false;
      submit.disabled = false;
      form.removeAttribute('aria-busy');
      submit.textContent = language === 'es' ? submit.dataset.es : translated.find(item => item.el === submit).fr;
      status.textContent = copy[language][statusKey];
    }
  });

  const legalDialog = document.querySelector('#legal-dialog');
  document.querySelector('.legal-trigger').addEventListener('click', () => legalDialog.showModal());
  legalDialog.querySelector('.dialog-close').addEventListener('click', () => legalDialog.close());
  legalDialog.addEventListener('click', event => {
    if (event.target === legalDialog) {
      const bounds = legalDialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) legalDialog.close();
    }
  });
  document.querySelector('#current-year').textContent = new Date().getFullYear();
})();

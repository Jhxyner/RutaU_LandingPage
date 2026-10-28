/* Punto de entrada: enlaza los CTA con la Web App y fija el año */
document.addEventListener('DOMContentLoaded', function () {
  var base = (window.RUTAU_CONFIG && window.RUTAU_CONFIG.APP_URL) || '#';
  var routes = { login: '/login', register: '/register', search: '/trips', publish: '/trips/new' };
  document.querySelectorAll('[data-app]').forEach(function (a) {
    var r = routes[a.getAttribute('data-app')] || '';
    a.setAttribute('href', base === '#' ? '#' : base.replace(/\/$/, '') + r);
  });
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026; });
});

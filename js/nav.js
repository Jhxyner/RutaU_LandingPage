/* Menú móvil accesible + enlace activo según sección visible */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }
    toggle.addEventListener('click', function () { setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
  }

  var links = document.querySelectorAll('.main-nav a[href^="#"]');
  if (!('IntersectionObserver' in window) || !links.length) return;
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = map[en.target.id]; if (a) a.setAttribute('aria-current', 'true');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
});

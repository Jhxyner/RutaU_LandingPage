/* i18n: es_419 / en_US. Los textos viven en i18n/es_419.js e i18n/en_US.js
   (archivos .js y no .json para que la página funcione abriendo index.html
   directamente, sin servidor). */
(function () {
  var cfg = window.RUTAU_CONFIG;
  var dict = window.RUTAU_I18N || {};
  var HTML_LANG = { es_419: 'es-419', en_US: 'en-US' };

  function get(lang) { return dict[lang] || dict[cfg.DEFAULT_LANG]; }

  function detect() {
    try { var saved = localStorage.getItem(cfg.STORAGE_KEY); if (dict[saved]) return saved; } catch (e) {}
    return (navigator.language || '').toLowerCase().indexOf('en') === 0 ? 'en_US' : cfg.DEFAULT_LANG;
  }

  function apply(lang) {
    var t = get(lang);
    document.documentElement.lang = HTML_LANG[lang] || 'es-419';
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')]; if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      // formato: "aria-label:clave;title:clave"
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':'); var v = t[p[1]]; if (v != null) el.setAttribute(p[0], v);
      });
    });
    var tk = document.body.getAttribute('data-title-key') || 'meta.title';
    var dk = tk.replace('title', 'description');
    if (t[tk]) document.title = t[tk];
    var desc = document.querySelector('meta[name="description"]');
    if (desc && t[dk]) desc.setAttribute('content', t[dk]);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    var live = document.getElementById('lang-live');
    if (live) live.textContent = t['a11y.langChanged'] || '';
    document.dispatchEvent(new CustomEvent('rutau:langchange', { detail: { lang: lang } }));
  }

  function set(lang, announce) {
    try { localStorage.setItem(cfg.STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
    if (!announce) { var live = document.getElementById('lang-live'); if (live) live.textContent = ''; }
  }

  window.RutaUI18n = { set: set, current: function () { return document.documentElement.lang === 'en-US' ? 'en_US' : 'es_419'; } };

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () { set(b.getAttribute('data-lang'), true); });
    });
    apply(detect());
  });
})();

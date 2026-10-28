/* Acordeón de preguntas frecuentes (botón + aria-expanded + aria-controls) */
document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.faq-q');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      document.getElementById(btn.getAttribute('aria-controls')).hidden = open;
      btn.querySelector('.faq-sign').textContent = open ? '+' : '–';
    });
  });
});

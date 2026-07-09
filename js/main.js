/* =========================================================================
   VUP — JS de la página (página de prueba)
   1) Carrusel de casos (flechas)
   2) Reveal de secciones al hacer scroll
   ========================================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) Carrusel ---------- */
  var track = document.getElementById('track');
  if (track) {
    var prev = document.querySelector('.carousel-arrow.prev');
    var next = document.querySelector('.carousel-arrow.next');
    var scrollBy = function () {
      var card = track.querySelector('.case-card');
      return card ? card.getBoundingClientRect().width + 18 : 300;
    };
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left:  scrollBy(), behavior: 'smooth' }); });
  }

  /* ---------- 2) Reveal al hacer scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // Sin soporte: mostrar todo
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

});

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

  /* ---------- 2) Logos de fondo flotando: más presencia en mobile ----------
     En mobile el fondo (.site-bg) pasa a cubrir todo el alto de la página
     (ver CSS, fix de la franja negra al scrollear). Los 5 logos flotantes
     quedaron pensados para una sola pantalla, así que en una página larga
     terminan muy separados entre sí y en la mayoría de los scrolls no se ve
     ninguno. Acá se regeneran a intervalos regulares según el alto real del
     documento, para que siempre haya alguno a la vista sin exagerar la
     cantidad. Los porcentajes de posición se resuelven contra .site-bg
     (que ya cubre todo el documento), no hace falta tocar el CSS. */
  var marksBox = document.querySelector('.site-bg .marks');
  if (marksBox && window.matchMedia('(max-width: 720px)').matches) {
    var spacing = 900; // separación vertical aprox. entre logos, en px
    var count = Math.min(16, Math.max(6, Math.ceil(document.body.scrollHeight / spacing)));
    var anims = ['drift', 'drift2'];
    var html = '';
    for (var i = 0; i < count; i++) {
      var topPct = ((i + 0.5) / count) * 100;
      var onLeft = i % 2 === 0;
      var inset = 6 + ((i * 13) % 28);
      var size = 90 + (i % 3) * 30;
      var anim = anims[i % 2];
      var duration = (14 + (i % 5) * 1.4).toFixed(1);
      var delay = (-(i * 2.2)).toFixed(1);
      var direction = i % 3 === 0 ? ' reverse' : '';
      html += '<img class="vup-mark" src="assets/logo-vup.png" alt="" style="' +
        'top:' + topPct.toFixed(2) + '%; ' + (onLeft ? 'left' : 'right') + ':' + inset + '%; ' +
        'width:' + size + 'px; ' +
        'animation: ' + anim + ' ' + duration + 's ease-in-out ' + delay + 's infinite' + direction + ';' +
        '" />';
    }
    marksBox.innerHTML = html;
  }

  /* ---------- 3) Reveal al hacer scroll ---------- */
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

/* ASIA LO POSIBLE — interacciones mínimas */
(function () {
  'use strict';

  // Navbar: fondo al hacer scroll
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Menú móvil
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') links.classList.remove('open');
    });
  }

  // Reveal al hacer scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // Reproductor de video (placeholder -> reproduce o carga embed)
  var videoBox = document.querySelector('.video');
  if (videoBox) {
    var playBtn = videoBox.querySelector('.video__play');
    var vid = videoBox.querySelector('video');
    var embedUrl = videoBox.getAttribute('data-embed'); // opcional: URL de YouTube/Vimeo
    if (playBtn) {
      playBtn.addEventListener('click', function () {
        if (vid) {
          vid.controls = true;
          vid.play();
          playBtn.style.display = 'none';
          var cap = videoBox.querySelector('.video__cap');
          if (cap) cap.style.display = 'none';
        } else if (embedUrl) {
          var iframe = document.createElement('iframe');
          iframe.src = embedUrl + (embedUrl.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1';
          iframe.allow = 'autoplay; encrypted-media; fullscreen';
          iframe.setAttribute('allowfullscreen', '');
          iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;z-index:1';
          videoBox.appendChild(iframe);
        }
      });
    }
  }

  // Video de fondo del hero: alterna entre varios clips de Asia
  var heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    var clips = (heroVideo.getAttribute('data-playlist') || '').split(',').filter(Boolean);
    if (clips.length) {
      var ci = 0;
      var playClip = function () {
        heroVideo.src = clips[ci];
        var p = heroVideo.play();
        if (p && p.catch) p.catch(function () {}); // si el navegador bloquea autoplay, queda el poster
      };
      if (clips.length > 1) {
        heroVideo.addEventListener('ended', function () {
          ci = (ci + 1) % clips.length;
          playClip();
        });
      } else {
        heroVideo.loop = true;
      }
      playClip();
    }
  }

  // Año dinámico en footer
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

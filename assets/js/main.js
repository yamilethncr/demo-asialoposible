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

  // Slider automático en loop (Sobre nosotros)
  document.querySelectorAll('.about-slider').forEach(function (slider) {
    var slides = slider.querySelectorAll('.slide');
    if (slides.length < 2) return;
    if (!slider.querySelector('.slide.active')) slides[0].classList.add('active');
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('active');
    }, 4000);
  });

  // Carrete de videos + lightbox
  var vidCar = document.getElementById('vidCarousel');
  if (vidCar) {
    document.querySelectorAll('.vid-nav button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = parseInt(btn.getAttribute('data-dir'), 10) || 1;
        var card = vidCar.querySelector('.vid-card');
        var step = card ? card.offsetWidth + 16 : 240;
        vidCar.scrollBy({ left: dir * step * 1.3, behavior: 'smooth' });
      });
    });
    var vModal = document.getElementById('vidModal');
    var vFrame = vModal ? vModal.querySelector('iframe') : null;
    var closeV = function () { if (vModal) vModal.classList.remove('open'); if (vFrame) vFrame.src = ''; };
    vidCar.querySelectorAll('.vid-card').forEach(function (card) {
      card.addEventListener('click', function () {
        var id = card.getAttribute('data-yt');
        if (!id || !vModal || !vFrame) return;
        vFrame.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1';
        vModal.classList.add('open');
      });
    });
    if (vModal) {
      vModal.addEventListener('click', function (e) {
        if (e.target === vModal || e.target.classList.contains('vid-modal__close')) closeV();
      });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeV(); });
    }
  }

  // Año dinámico en footer
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();

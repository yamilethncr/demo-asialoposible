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

  /* ===================== Chatbot de soporte ===================== */
  (function chatbot() {
    var WA = '84934949756';
    var TAGS = {
      serv: 'Atención al cliente · Interés en servicios',
      faq:  'Dudas frecuentes',
      sop:  'Soporte'
    };
    var FAQ = [
      { q: '¿Cuánto cuesta el viaje?', a: 'El viaje grupal a Vietnam &amp; Camboya es <b>desde $3,200 USD por persona</b>. El precio varía según la fecha, la forma de pago y el tipo de habitación. ¿Quieres que un asesor te pase el detalle?' },
      { q: '¿Cuándo son las próximas salidas?', a: 'Tenemos salidas confirmadas en <b>Agosto 2026</b> y <b>Abril 2027</b> para Vietnam &amp; Camboya. También diseñamos viajes privados en las fechas que tú elijas.' },
      { q: '¿Qué incluye el viaje?', a: 'Hoteles 4-5★, crucero por la Bahía de Halong, vuelos internos, transporte privado, entradas, guía en español, e-SIM y más. No incluye vuelos internacionales ni visados (te ayudamos con ellos).' },
      { q: '¿Es todo en español?', a: '¡Sí! Toda la planificación, el acompañamiento y los guías son <b>100% en español</b>.' },
      { q: '¿Necesito visado?', a: 'Para Vietnam ~$70 USD y Camboya ~$30 USD. No están incluidos, pero te guiamos paso a paso para tramitarlos sin estrés.' },
      { q: '¿Puedo pagar a plazos?', a: 'Sí, tenemos opciones de pago flexibles para que financies tu viaje con comodidad.' }
    ];

    var toggle = document.createElement('button');
    toggle.className = 'cb-toggle';
    toggle.setAttribute('aria-label', 'Abrir chat de ayuda');
    toggle.innerHTML = '<svg class="cb-chat-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2z"/></svg>' +
      '<svg class="cb-close-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

    var panel = document.createElement('div');
    panel.className = 'cb-panel';
    panel.innerHTML =
      '<div class="cb-head"><span class="cb-avatar">A</span><div><b>Asia Lo Posible</b><br><small>Normalmente respondemos al instante</small></div></div>' +
      '<div class="cb-body" id="cbBody"></div>' +
      '<form class="cb-foot" id="cbForm"><input id="cbInput" type="text" placeholder="Escribe tu mensaje..." autocomplete="off"><button type="submit" aria-label="Enviar"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></button></form>';

    document.body.appendChild(toggle);
    document.body.appendChild(panel);

    var body = panel.querySelector('#cbBody');
    var form = panel.querySelector('#cbForm');
    var input = panel.querySelector('#cbInput');
    var started = false;

    function scroll() { body.scrollTop = body.scrollHeight; }
    function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function add(cls, html) { var d = document.createElement('div'); d.className = cls; d.innerHTML = html; body.appendChild(d); scroll(); return d; }
    function bot(html) { return add('cb-msg bot', html); }
    function usr(text) { return add('cb-msg user', esc(text)); }
    function tag(t) { add('cb-tag', '🏷️ ' + t); }
    function waUrl(t, msg) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent('[' + t + '] ' + msg); }
    function quicks(items) {
      var wrap = document.createElement('div'); wrap.className = 'cb-quicks';
      items.forEach(function (it) {
        var b = document.createElement('button'); b.className = 'cb-quick'; b.type = 'button'; b.innerHTML = it.label;
        b.addEventListener('click', it.onClick); wrap.appendChild(b);
      });
      body.appendChild(wrap); scroll();
    }
    function waBtn(t, msg, label) {
      var wrap = document.createElement('div'); wrap.className = 'cb-quicks';
      var a = document.createElement('a'); a.className = 'cb-quick'; a.href = waUrl(t, msg); a.target = '_blank'; a.rel = 'noopener';
      a.style.borderColor = 'rgba(200,161,90,.55)'; a.innerHTML = '💬 ' + (label || 'Continuar por WhatsApp');
      wrap.appendChild(a); body.appendChild(wrap); scroll();
    }

    function start() {
      bot('¡Hola! 👋 Soy el asistente de <b>Asia Lo Posible</b>. ¿En qué te puedo ayudar?');
      quicks([
        { label: '💼 Quiero info de un viaje', onClick: pathServ },
        { label: '❓ Tengo una duda frecuente', onClick: pathFaq },
        { label: '🛠️ Necesito soporte', onClick: pathSop }
      ]);
    }
    function pathServ() {
      usr('Quiero info de un viaje'); tag(TAGS.serv);
      bot('¡Genial! ✨ ¿Qué estilo de viaje te interesa? Te paso con un asesor para darte todos los detalles.');
      quicks([
        { label: 'Viajes de Autor (grupal con nosotros)', onClick: function () { servDetail('Viajes de Autor'); } },
        { label: 'Asia en Grupo (con nuestra red)', onClick: function () { servDetail('Asia en Grupo'); } },
        { label: 'Sesión 1-a-1 (asesoría virtual)', onClick: function () { servDetail('una Sesión 1-a-1'); } },
        { label: 'Itinerarios Listos (rutas descargables)', onClick: function () { servDetail('Itinerarios Listos'); } }
      ]);
    }
    function servDetail(name) {
      usr(name);
      bot('¡Perfecto! Un asesor te dará toda la información sobre <b>' + name + '</b>. Pulsa para continuar por WhatsApp 👇');
      waBtn(TAGS.serv, 'Hola, quiero información sobre ' + name + '.', 'Hablar con un asesor');
    }
    function pathFaq() {
      usr('Tengo una duda frecuente'); tag(TAGS.faq);
      bot('Estas son las preguntas más comunes. Toca la tuya:');
      quicks(FAQ.map(function (f, i) { return { label: f.q, onClick: function () { faqAnswer(i); } }; }));
    }
    function faqAnswer(i) {
      usr(FAQ[i].q); bot(FAQ[i].a);
      quicks([
        { label: 'Ver otra pregunta', onClick: pathFaq },
        { label: 'Hablar con un asesor', onClick: function () { usr('Hablar con un asesor'); waBtn(TAGS.faq, 'Hola, tengo una duda sobre el viaje.', 'Continuar por WhatsApp'); } }
      ]);
    }
    function pathSop() {
      usr('Necesito soporte'); tag(TAGS.sop);
      bot('Lamento el inconveniente 🙏. Cuéntame brevemente qué necesitas (un pago, una reserva, una duda técnica…) y te ayudamos enseguida.');
      waBtn(TAGS.sop, 'Hola, necesito soporte con: ', 'Escribir a soporte');
    }
    function route(text) {
      var t = text.toLowerCase();
      if (/precio|costo|cuesta|cu[aá]nto|reserv|cotiz|disponib|fecha|salida|viaj|tour|cupo|pagar|plazo|itinerario/.test(t)) {
        tag(TAGS.serv); bot('Te ayudo con eso. Te paso con un asesor para darte los detalles 👇'); waBtn(TAGS.serv, text, 'Hablar con un asesor'); return;
      }
      if (/visa|visado|incluye|idioma|espa[ñn]ol|seguro|vuelo|equipaje|clima|[ée]poca|hotel|comida/.test(t)) {
        tag(TAGS.faq); bot('¡Buena pregunta! Mira nuestras dudas frecuentes o habla con un asesor:');
        quicks([{ label: 'Ver dudas frecuentes', onClick: pathFaq }, { label: 'Hablar con un asesor', onClick: function () { waBtn(TAGS.faq, text, 'Continuar por WhatsApp'); } }]); return;
      }
      if (/problema|error|no funciona|falla|reembolso|cancel|urgente|soporte|ayuda/.test(t)) {
        tag(TAGS.sop); bot('Vamos a resolverlo. Te paso con soporte 👇'); waBtn(TAGS.sop, text, 'Escribir a soporte'); return;
      }
      bot('Para ayudarte mejor, ¿tu consulta es sobre…?');
      quicks([
        { label: '💼 Info de un viaje', onClick: pathServ },
        { label: '❓ Una duda frecuente', onClick: pathFaq },
        { label: '🛠️ Soporte', onClick: pathSop }
      ]);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var text = input.value.trim(); if (!text) return;
      usr(text); input.value = '';
      setTimeout(function () { route(text); }, 250);
    });
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('cb-open');
      var open = document.body.classList.contains('cb-open');
      if (open && !started) { started = true; setTimeout(start, 200); }
      if (open) setTimeout(function () { input.focus(); }, 300);
    });
  })();
})();

(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('.lang button');
  function setLang(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === lang)); });
    try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.set); }); });
  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      function done() {
        btn.classList.add('done');
        setTimeout(function () { btn.classList.remove('done'); }, 1800);
      }
      try {
        navigator.clipboard.writeText(text).then(done, function () {});
      } catch (e) {}
    });
  });
  try {
    var saved =localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'pt') setLang(saved);
  } catch (e) {}
})();

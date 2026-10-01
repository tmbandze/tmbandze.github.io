(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit) return explicit;
    return media.matches ? "dark" : "light";
  }

  function syncButton() {
    if (toggle) toggle.setAttribute("aria-pressed", String(currentTheme() === "dark"));
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      syncButton();
    });
  }
  if (media.addEventListener) media.addEventListener("change", syncButton);
  syncButton();

  // Ano no rodapé
  var year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();

  // Contactos ainda por preencher não aparecem no site
  document.querySelectorAll(".contact-list li").forEach(function (item) {
    if (item.innerHTML.indexOf("SUBSTITUIR") !== -1) item.hidden = true;
  });

  // Fotos e capturas que ainda não existem ficam escondidas
  function whenMissing(img, fn) {
    if (img.complete && img.naturalWidth === 0) fn();
    img.addEventListener("error", fn);
  }

  document.querySelectorAll(".portrait img").forEach(function (img) {
    whenMissing(img, function () { img.parentElement.classList.add("is-missing"); });
  });

  // Imagens dos projectos abrem ampliadas numa janela; sem JS, o link abre a imagem
  var lightbox = document.querySelector(".lightbox");
  if (lightbox && lightbox.showModal) {
    var big = lightbox.querySelector("img");
    var opener = null;

    document.querySelectorAll(".thumb").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var img = link.querySelector("img");
        opener = link;
        big.src = link.getAttribute("href");
        big.alt = img ? img.alt : "";
        lightbox.showModal();
      });
    });

    lightbox.querySelector(".lightbox-close").addEventListener("click", function () { lightbox.close(); });
    // Clicar fora da imagem também fecha
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener("close", function () {
      big.removeAttribute("src");
      if (opener) opener.focus();
    });
  }

  var gallery = document.querySelector(".gallery");
  if (gallery) {
    var figures = gallery.querySelectorAll("figure");
    figures.forEach(function (figure) {
      var img = figure.querySelector("img");
      // lazy: força o pedido para saber cedo se a foto existe
      img.loading = "eager";
      whenMissing(img, function () {
        figure.classList.add("is-missing");
        if (gallery.querySelectorAll("figure.is-missing").length === figures.length) {
          gallery.classList.add("is-empty");
        }
      });
    });
  }
})();

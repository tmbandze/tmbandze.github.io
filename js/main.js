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

  // Fotos e capturas que ainda não existem ficam escondidas
  function whenMissing(img, fn) {
    if (img.complete && img.naturalWidth === 0) fn();
    img.addEventListener("error", fn);
  }

  document.querySelectorAll(".portrait img").forEach(function (img) {
    whenMissing(img, function () { img.parentElement.classList.add("is-missing"); });
  });

  // Imagens dos projectos: aceita .png, .jpg ou .webp com o mesmo nome
  var extensions = [".png", ".jpg", ".webp"];
  document.querySelectorAll(".shot img").forEach(function (img) {
    var base = img.getAttribute("src").replace(/\.png$/, "");
    var attempt = 0;
    function next() {
      attempt += 1;
      if (attempt < extensions.length) img.src = base + extensions[attempt];
      else img.parentElement.classList.add("is-missing");
    }
    img.loading = "eager";
    img.addEventListener("error", next);
    if (img.complete && img.naturalWidth === 0) next();
  });

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

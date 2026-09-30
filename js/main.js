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
  syncButton();

  // Ano no rodapé
  var year = document.getElementById("ano");
  if (year) year.textContent = new Date().getFullYear();

  // Se uma captura de ecrã ainda não existe, mostra o espaço reservado
  document.querySelectorAll(".shot img").forEach(function (img) {
    var figure = img.closest(".shot");
    function markMissing() { if (figure) figure.classList.add("no-shot"); }
    if (img.complete && img.naturalWidth === 0) markMissing();
    img.addEventListener("error", markMissing);
  });
})();

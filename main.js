/* {A}impact - progressive enhancement. No dependencies. */
(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("has-js");

  /* ---------- Theme (light / dark / auto) ---------- */
  var THEME_KEY = "aimpact-theme";
  var toggle = document.getElementById("themeToggle");
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  function effectiveTheme() {
    var t = root.getAttribute("data-theme");
    if (t === "light" || t === "dark") return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = effectiveTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById("menuBtn");
  var mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    var closeMenu = function () {
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Menu openen");
      mobileNav.hidden = true;
    };
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      menuBtn.setAttribute("aria-label", open ? "Menu openen" : "Menu sluiten");
      mobileNav.hidden = open;
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
    window.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  }

  /* ---------- Sticky header state ---------- */
  var header = document.getElementById("siteHeader");
  if (header && "IntersectionObserver" in window) {
    var sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;height:1px;width:1px;";
    document.body.prepend(sentinel);
    new IntersectionObserver(function (entries) {
      header.classList.toggle("is-scrolled", !entries[0].isIntersecting);
    }).observe(sentinel);
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reveals.length && "IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); obs.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Partner logos: swap text placeholder -> SVG when present ----------
     Drop files in assets/logos/<name>.svg and they appear automatically.
     Expected names: whainot, halle, ucll, vites, ommekaar, vlaamsbrabant. */
  document.querySelectorAll(".logo-slot[data-logo]").forEach(function (slot) {
    var name = slot.getAttribute("data-logo");
    var src = "assets/logos/" + name + ".svg";
    var probe = new Image();
    probe.onload = function () {
      var img = document.createElement("img");
      img.src = src;
      img.alt = slot.textContent.trim();
      img.loading = "lazy";
      slot.textContent = "";
      slot.appendChild(img);
      slot.style.filter = "none";
      slot.style.opacity = "1";
    };
    probe.src = src; // onerror -> keep styled text placeholder, no action needed
  });

  /* ---------- Image previews: show labeled placeholder if asset missing ---------- */
  document.querySelectorAll(".preview > img").forEach(function (img) {
    var mark = function () { img.parentElement.classList.add("is-empty"); };
    if (img.complete && img.naturalWidth === 0) mark();
    img.addEventListener("error", mark);
  });

  /* ---------- Newsletter form (client-side validation + mailto fallback) ----------
     No backend is wired yet. Replace this handler with a POST to your
     newsletter service (Mailchimp / Mailjet / API) when available. */
  var form = document.getElementById("newsletterForm");
  if (form) {
    var input = document.getElementById("nb-email");
    var hint = document.getElementById("nb-hint");
    var defaultHint = hint ? hint.textContent : "";
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var val = (input.value || "").trim();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      hint.classList.remove("is-error", "is-ok");
      if (!ok) {
        hint.textContent = "Geef een geldig e-mailadres in.";
        hint.classList.add("is-error");
        input.focus();
        return;
      }
      hint.textContent = "Bedankt. Je e-mailprogramma opent om de inschrijving te bevestigen.";
      hint.classList.add("is-ok");
      var subject = encodeURIComponent("Inschrijving nieuwsbrief {A}impact");
      var body = encodeURIComponent("Ik schrijf me graag in op de nieuwsbrief van {A}impact.\n\nE-mailadres: " + val);
      window.location.href = "mailto:info@whainot.be?subject=" + subject + "&body=" + body;
      form.reset();
      window.setTimeout(function () {
        hint.textContent = defaultHint;
        hint.classList.remove("is-ok");
      }, 6000);
    });
  }

  /* ---------- Current year in footer (if left as placeholder) ---------- */
  // Year is hard-set to 2026 in markup per project timeline; nothing to do.
})();

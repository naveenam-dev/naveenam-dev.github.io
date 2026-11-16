// Theme toggle: the initial theme is set by a small script in each page's <head>
// (saved choice, else the device's light/dark setting). This button switches and saves it.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".theme-btn");
  if (!btn) return;
  function label() {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    btn.setAttribute("aria-label", "Switch to " + next + " theme");
  }
  label();
  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
})();

// Mobile menu: toggle open, close after a link is tapped
(function () {
  var nav = document.querySelector("nav");
  var btn = nav && nav.querySelector(".menu-btn");
  if (!btn) return;
  function set(open) {
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.textContent = open ? "✕" : "☰";
  }
  btn.addEventListener("click", function () { set(!nav.classList.contains("open")); });
  nav.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { set(false); });
  });
})();

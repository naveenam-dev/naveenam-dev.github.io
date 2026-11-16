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

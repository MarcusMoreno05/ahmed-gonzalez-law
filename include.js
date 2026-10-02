
function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    const html = await response.text();
    el.innerHTML = html;

    // After header loads, activate dropdown
    setupDropdown();
  });
}

function setupDropdown() {
  const btn = document.querySelector(".dropdown-btn");
  const menu = document.querySelector(".dropdown-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      menu.style.display = "none";
    }
  });
}

includeHTML();

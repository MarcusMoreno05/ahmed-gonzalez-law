function includeHTML() {
  document.querySelectorAll("[data-include]").forEach(async el => {
    const file = el.getAttribute("data-include");
    const response = await fetch(file);
    const html = await response.text();
    el.innerHTML = html;

    // Activate dropdown after header loads
    setupDropdown();
  });
}

function setupDropdown() {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;

  const btn = dropdown.querySelector(".dropdown-btn");
  const menu = dropdown.querySelector(".dropdown-menu");

  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      menu.style.display = "none";
    }
  });
}

includeHTML();

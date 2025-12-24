const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("primary-navigation");

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("active");
  });





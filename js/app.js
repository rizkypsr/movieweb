const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navbar = document.querySelector(".navbar");

hamburgerBtn.addEventListener("click", showNavbar);

function showNavbar() {
  hamburgerBtn.classList.toggle("move-hamburger");
  hamburgerBtn.classList.toggle("fade-in");

  if (hamburgerBtn.getAttribute("src") === "img/icons8-menu-30.png") {
    hamburgerBtn.setAttribute("src", "img/icons8-multiply-24.png");
  } else {
    hamburgerBtn.setAttribute("src", "img/icons8-menu-30.png");
  }

  navbar.classList.toggle("navbar-active");
}

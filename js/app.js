const hamburgerBtn = document.querySelector("#hamburgerBtn");
const hamburgerBtnMoved = document.querySelector("#hamburgerBtn.move");
const navbar = document.querySelector(".navbar");

hamburgerBtn.addEventListener("click", showNavbar);

function showNavbar() {
  moveHamburgerPos();

  if (hamburgerBtn.getAttribute("src") === "img/icons8-menu-30.png") {
    hamburgerBtn.setAttribute("src", "img/icons8-multiply-24.png");
  } else {
    hamburgerBtn.setAttribute("src", "img/icons8-menu-30.png");
  }

  navbar.classList.toggle("navbar-active");
}

function moveHamburgerPos() {
  const windowWidth = window.innerWidth;
  const navbarWidth = navbar.offsetWidth;

  const posLeft = `${(navbarWidth - windowWidth).toString()}px`;

  if (hamburgerBtn.style.left === "") {
    hamburgerBtn.style.left = posLeft;
  } else {
    hamburgerBtn.style.left = "";
  }
}

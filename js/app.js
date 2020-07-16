const hamburgerBtn = document.querySelector("#hamburgerBtn");
const navbar = document.querySelector(".navbar");
const modal = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".close");
const username = document.querySelector("#username");
const loginBtn = document.querySelector("#loginBtn");
const unameInput = document.querySelector("#unameInput");

window.addEventListener("load", () => {
  let unameLocal = getUnameLocalStorage();
  if (unameLocal != null) {
    username.textContent = unameLocal;
  } else {
    showModalLogin();
  }
});

hamburgerBtn.addEventListener("click", showNavbar);
closeModalBtn.addEventListener("click", closeModal);
username.addEventListener("click", showModalLogin);
loginBtn.addEventListener("click", login);

function showNavbar() {
  moveHamburgerPos();

  changeHamburgerBtn();

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

function changeHamburgerBtn() {
  if (hamburgerBtn.getAttribute("src") === "img/icons8-menu-30.png") {
    hamburgerBtn.setAttribute("src", "img/icons8-multiply-24.png");
  } else {
    hamburgerBtn.setAttribute("src", "img/icons8-menu-30.png");
  }
}

function closeModal() {
  modal.classList.remove("show-modal");
}

function showModalLogin() {
  modal.classList.add("show-modal");
}

function login() {
  let uname = unameInput.value;
  setUnameLocalStorage(uname);
}

function setUnameLocalStorage(uname) {
  localStorage.setItem("username", uname);
  username.textContent = uname;
}

function getUnameLocalStorage() {
  const uname = localStorage.getItem("username");
  return uname;
}

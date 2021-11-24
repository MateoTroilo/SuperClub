const buttonProfile = document.querySelector(".btn-profile");
const menuUser = document.querySelector(".menuUserContainer");
const main = document.querySelector("main");
const changeTheme = document.querySelector(".changeTheme");
const lightMode = document.querySelector(".toLightMode");
const darkMode = document.querySelector(".toDarkMode");

buttonProfile.addEventListener("click", (e) => {
  menuUser.classList.toggle("show");

  if (window.innerWidth <= 414) {
    menuUser.focus();
    main.style.pointerEvents = "none";
    main.style.filter = "brightness(0.4)";
    main.style.backgroundColor = "#666";
  }
});

menuUser.addEventListener("click", (e) => {
  e.stopPropagation();
});

menuUser.addEventListener("blur", () => {
  menuUser.classList.remove("show");
  main.style.pointerEvents = "initial";
  main.style.filter = "";
  main.style.backgroundColor = "initial";
});

changeTheme.addEventListener("click", () => {
  toggleTheme();
});

const toggleTheme = () => {
  if (main.classList.contains("dark")) {
    lightMode.style.display = "flex";
    darkMode.style.display = "none";
    localStorage.setItem("temaPreferido", "dark");
  } else {
    lightMode.style.display = "none";
    darkMode.style.display = "flex";
    localStorage.setItem("temaPreferido", "light");
  }

  console.log(localStorage.getItem("temaPreferido"));
  main.classList.toggle("dark");
};

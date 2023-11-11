let themeChanger = document.querySelector(".header-theme-changer");

// themeChanger.addEventListener("click", function () {
//   themeChanger.offsetParent.classList.add("dark-theme");
// });

let body = document.body;

const isDarkMode = localStorage.getItem("darkMode") === "true";

if (isDarkMode) {
  body.classList.add("dark-theme");
}

themeChanger.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  const isDarkModeEnabled = body.classList.contains("dark-theme");
  localStorage.setItem("darkMode", isDarkModeEnabled.toString());
});

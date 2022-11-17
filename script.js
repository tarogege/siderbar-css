const toggle = document.getElementsByClassName("toggle")[0];
const sidebar = document.getElementsByClassName("side-bar")[0];
const searchWrapper = document.getElementsByClassName("search-wrapper")[0];
const switchDom = document.getElementsByClassName("switch")[0];
const switchText = document.getElementsByClassName("mode-text")[0];

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
searchWrapper.addEventListener("click", () => {
  sidebar.classList.remove("close");
});
switchDom.addEventListener("click", () => {
  sidebar.classList.toggle("dark");
  if (sidebar.classList.contains("dark")) {
    switchText.innerHTML = "light mode";
  } else {
    switchText.innerHTML = "dark mode";
  }
});

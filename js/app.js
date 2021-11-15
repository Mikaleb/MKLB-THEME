(() => {
  // resources/js/app.js
  window.addEventListener("load", function() {
    let main_navigation = document.querySelector("#primary-menu");
    document.querySelector("#primary-menu-toggle").addEventListener("click", function(e) {
      e.preventDefault();
      main_navigation.classList.toggle("hidden");
    });
  });
  var theme = localStorage.getItem("theme");
  var changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };
  var changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };
  if (!theme) {
    localStorage.setItem("theme", "light");
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      const newColorScheme = e.matches ? "dark" : "light";
      newColorScheme === "dark" ? changeThemeToDark : changeThemeToLight;
    });
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      changeThemeToDark();
    }
  }
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

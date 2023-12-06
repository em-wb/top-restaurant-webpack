import pageLoad from "./pageLoad";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  pageLoad();
  const hero = document.querySelector(".hero");
  home(hero);

  function handleNavLinkClick(moduleFunction) {
    const heroChild = document.querySelector(".heroChild");
    if (hero) {
      hero.removeChild(heroChild);
      moduleFunction(hero);
    }
  }

  document.getElementById("navMenu").addEventListener("click", () => {
    handleNavLinkClick(menu);
  });

  document.getElementById("navHome").addEventListener("click", () => {
    handleNavLinkClick(home);
  });

  document.getElementById("navContact").addEventListener("click", () => {
    handleNavLinkClick(contact);
  });
});

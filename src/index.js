import pageLoad from "./pageLoad";
import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  pageLoad();
  const hero = document.querySelector(".hero");
  home(hero);

  document.getElementById("navMenu").addEventListener("click", () => {
    const hero = document.querySelector(".hero");
    const heroChild = document.querySelector(".heroChild");
    if (hero) {
      hero.removeChild(heroChild);
      menu(hero);
    }
  });

  document.getElementById("navHome").addEventListener("click", () => {
    const heroChild = document.querySelector(".heroChild");
    if (hero) {
      hero.removeChild(heroChild);
      home(hero);
    }
  });

  document.getElementById("navContact").addEventListener("click", () => {
    const hero = document.querySelector(".hero");
    const heroChild = document.querySelector(".heroChild");
    if (hero) {
      hero.removeChild(heroChild);
      contact(hero);
    }
  });
});

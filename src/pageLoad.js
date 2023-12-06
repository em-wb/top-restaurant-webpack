export default function pageLoad() {
  const content = document.getElementById("content");

  const navBar = document.createElement("div");
  navBar.classList.add("navBar");
  content.append(navBar);

  const navUl = document.createElement("ul");
  navBar.append(navUl);

  const navlistitems = ["Home", "Menu", "Contact"];
  navlistitems.forEach((itemText) => {
    const navLi = document.createElement("li");
    navLi.textContent = itemText;
    navLi.classList.add("navItems");
    navLi.setAttribute("id", `nav${itemText}`);
    navUl.append(navLi);
  });

  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.append(hero);

  const footer = document.createElement("footer");
  content.append(footer);

  const iconClasses = ["fa-facebook", "fa-instagram", "fa-whatsapp"];
  iconClasses.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.classList.add("fa-brands");
    icon.classList.add(iconClass);
    footer.append(icon);
  });

  const footerA = document.createElement("a");
  footerA.href = "#";
  footerA.textContent = "Coded by Emily";
  footer.append(footerA);
}

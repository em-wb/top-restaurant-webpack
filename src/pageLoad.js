export default function pageLoad() {
  const content = document.getElementById("content");

  const navBar = document.createElement("div");
  navBar.classList.add("navBar");
  content.append(navBar);

  const bistro = document.createElement("div");
  bistro.textContent = "Bertie's Bistro";
  navBar.append(bistro);

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

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("iconDiv");
  footer.append(iconDiv);

  const iconClasses = ["fa-facebook", "fa-instagram", "fa-whatsapp"];
  iconClasses.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.classList.add("fa-brands");
    icon.classList.add(iconClass);
    iconDiv.append(icon);
  });

  const footerA = document.createElement("a");
  footerA.href = "https://github.com/em-wb/top-restaurant-webpack";
  footerA.textContent = "Coded by Emily";
  footer.append(footerA);
}

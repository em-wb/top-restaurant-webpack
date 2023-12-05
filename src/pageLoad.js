export default function pageLoad() {
  const content = document.getElementById("content");

  const navBar = document.createElement("div");
  navBar.classList.add("navBar");
  content.append(navBar);

  const navUl = document.createElement("ul");
  navBar.append(navUl);

  const navlistitems = ["Home", "Menu", "Contact"];
  navlistitems.forEach((itemText) => {
    const navli = document.createElement("li");
    navli.textContent = itemText;
    navli.classList.add("navItems");
    navUl.append(navli);
  });

  const hero = document.createElement("div");
  hero.classList.add("hero");
  content.append(hero);

  const h1 = document.createElement("h1");
  h1.textContent = "Best food for your taste";
  hero.append(h1);

  const p = document.createElement("p");
  p.textContent =
    "Discover delicious plates in our friendly, neighbourhood cafe";
  hero.append(p);
  //         our friendly, neighbourhood cafe"
  // <div class="navbar">NAVBAR</div>
  //   <div class="hero">
  //     <div class="hero-text">
  //       <img src="../src/images/herobg.png" alt="" />
  //       <h1>Best food for your taste</h1>
  //       <p>
  //         Discover our delicious plates and create unforgettable moments in
  //         our friendly, neighbourhood cafe
  //       </p>
  //       <div class="button-container">
  //         <button class="book-button">Book a table</button>
  //         <button class="menu-button">Explore menu</button>
  //       </div>
  //     </div>
  //   </div>
}

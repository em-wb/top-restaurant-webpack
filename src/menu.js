export default function menu(hero) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");
  menuDiv.classList.add("heroChild");
  hero.append(menuDiv);

  const menuH1 = document.createElement("h1");
  menuH1.textContent = "MENU";
  menuDiv.append(menuH1);

  function createAndAppend(tag, text, parent) {
    const element = document.createElement(tag);
    if (text) {
      element.innerHTML = text;
    }
    parent.appendChild(element);
    return element;
  }

  const menuSections = ["STARTERS", "MAINS", "DESSERTS", "DRINKS"];
  menuSections.forEach((section) => {
    createAndAppend("strong", section, menuDiv);
    createAndAppend("br", null, menuDiv);

    switch (section) {
      case "STARTERS":
        createAndAppend("strong", "Avocado and Tomato Bruschetta", menuDiv);
        createAndAppend(
          "p",
          "Fresh avocado and diced tomatoes on toasted sourdough, drizzled with balsamic glaze.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Quinoa Salad Rolls", menuDiv);
        createAndAppend(
          "p",
          "Quinoa, avocado, cucumber, and carrots wrapped in rice paper served with a sesame dipping sauce.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Sweet Potato Fries", menuDiv);
        createAndAppend(
          "p",
          "Crispy sweet potato fries served with a chipotle aioli for dipping.",
          menuDiv
        );
        break;

      case "MAINS":
        createAndAppend("strong", "Grilled Salmon with Mango Salsa", menuDiv);
        createAndAppend(
          "p",
          "Pan-seared salmon fillet topped with a refreshing mango salsa, served with quinoa.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Truffle Mushroom Risotto", menuDiv);
        createAndAppend(
          "p",
          "Creamy risotto with wild mushrooms, truffle oil, and Parmesan cheese.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Crispy Tofu Stir-Fry", menuDiv);
        createAndAppend(
          "p",
          "Crispy tofu cubes stir-fried with colorful vegetables in a sesame soy glaze, served with brown rice.",
          menuDiv
        );
        break;

      case "DESSERTS":
        createAndAppend("strong", "Matcha Green Tea Cheesecake", menuDiv);
        createAndAppend(
          "p",
          "Creamy matcha-flavored cheesecake on a chocolate almond crust.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Mango Coconut Panna Cotta", menuDiv);
        createAndAppend(
          "p",
          "Smooth and velvety coconut panna cotta topped with fresh mango compote.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Dark Chocolate Mousse", menuDiv);
        createAndAppend(
          "p",
          "Rich and indulgent dark chocolate mousse topped with a dollop of whipped cream.",
          menuDiv
        );
        break;

      case "DRINKS":
        createAndAppend("strong", "Classic Cappuccino", menuDiv);
        createAndAppend(
          "p",
          "Espresso with equal parts of steamed milk and foam.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Blueberry Mint Iced Tea", menuDiv);
        createAndAppend(
          "p",
          "Iced tea infused with blueberries and fresh mint leaves.",
          menuDiv
        );
        createAndAppend("br", null, menuDiv);
        createAndAppend("strong", "Orange Ginger Sparkler", menuDiv);
        createAndAppend(
          "p",
          "Sparkling water with a splash of fresh orange juice and a hint of ginger.",
          menuDiv
        );
        break;

      default:
        break;
    }
  });
}

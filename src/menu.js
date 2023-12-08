export default function menu(hero) {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");
  menuDiv.classList.add("heroChild");
  hero.append(menuDiv);

  const menuH1 = document.createElement("h1");
  menuH1.textContent = "MENU";
  menuDiv.append(menuH1);

  class MenuBuilder {
    constructor(parentElement) {
      this.parentElement = parentElement;
    }

    addLineBreak() {
      const br = document.createElement("br");
      this.parentElement.appendChild(br);
    }

    addHeading(text) {
      const heading = document.createElement("strong");
      heading.textContent = text;
      this.parentElement.appendChild(heading);
      this.addLineBreak();
    }

    addParagraph(text) {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      this.parentElement.appendChild(paragraph);
      this.addLineBreak();
    }

    buildMenuSection(section, dishes) {
      this.addHeading(section);

      dishes.forEach((dish) => {
        this.addHeading(dish.name);
        this.addParagraph(dish.description);
      });
    }

    buildMenu() {
      const menuSections = [
        {
          section: "STARTERS",
          dishes: [
            {
              name: "Avocado and Tomato Bruschetta",
              description:
                "Fresh avocado and diced tomatoes on toasted sourdough, drizzled with balsamic glaze.",
            },
            {
              name: "Quinoa Salad Rolls",
              description:
                "Quinoa, avocado, cucumber, and carrots wrapped in rice paper served with a sesame dipping sauce.",
            },
            {
              name: "Sweet Potato Fries",
              description:
                "Crispy sweet potato fries served with a chipotle aioli for dipping.",
            },
          ],
        },
        {
          section: "MAINS",
          dishes: [
            {
              name: "Grilled Salmon with Mango Salsa",
              description:
                "Pan-seared salmon fillet topped with a refreshing mango salsa, served with quinoa.",
            },
            {
              name: "Truffle Mushroom Risotto",
              description:
                "Creamy risotto with wild mushrooms, truffle oil, and Parmesan cheese.",
            },
            {
              name: "Crispy Tofu Stir-Fry",
              description:
                "Crispy tofu cubes stir-fried with colorful vegetables in a sesame soy glaze, served with brown rice.",
            },
          ],
        },
        {
          section: "DESSERTS",
          dishes: [
            {
              name: "Matcha Green Tea Cheesecake",
              description:
                "Creamy matcha-flavored cheesecake on a chocolate almond crust.",
            },
            {
              name: "Mango Coconut Panna Cotta",
              description:
                "Smooth and velvety coconut panna cotta topped with fresh mango compote.",
            },
            {
              name: "Dark Chocolate Mousse",
              description:
                "Rich and indulgent dark chocolate mousse topped with a dollop of whipped cream.",
            },
          ],
        },
        {
          section: "DRINKS",
          dishes: [
            {
              name: "Classic Cappuccino",
              description:
                "Espresso with equal parts of steamed milk and foam.",
            },
            {
              name: "Blueberry Mint Iced Tea",
              description:
                "Iced tea infused with blueberries and fresh mint leaves.",
            },
            {
              name: "Orange Ginger Sparkler",
              description:
                "Sparkling water with a splash of fresh orange juice and a hint of ginger.",
            },
          ],
        },
      ];

      menuSections.forEach((menuSection) =>
        this.buildMenuSection(menuSection.section, menuSection.dishes)
      );
    }
  }

  const menuBuilder = new MenuBuilder(menuDiv);
  menuBuilder.buildMenu();
}

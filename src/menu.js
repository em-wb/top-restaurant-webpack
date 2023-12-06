export default function menu(hero) {
  // const hero = document.querySelector(".hero");
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menuDiv");
  menuDiv.classList.add("heroChild");
  hero.append(menuDiv);

  const menuInfo = document.createElement("p");
  menuInfo.classList.add("menuInfo");
  menuInfo.innerHTML = `<strong>STARTERS</strong> <br/>
<strong>Avocado and Tomato Bruschetta</strong> <br/>
Fresh avocado and diced tomatoes on toasted sourdough, drizzled with balsamic glaze.
<br/>
<strong>Quinoa Salad Rolls</strong> <br/>
Quinoa, avocado, cucumber, and carrots wrapped in rice paper served with a sesame dipping sauce.
<br/>
<strong>Sweet Potato Fries</strong> <br/>
Crispy sweet potato fries served with a chipotle aioli for dipping.
<br/><br/>
<strong>MAINS</strong><br/>
<strong>Grilled Salmon with Mango Salsa</strong> <br/>
Pan-seared salmon fillet topped with a refreshing mango salsa, served with quinoa.
<br/>
<strong>Truffle Mushroom Risotto</strong> <br/>
Creamy risotto with wild mushrooms, truffle oil, and Parmesan cheese.
<br/>
<strong>Crispy Tofu Stir-Fry</strong> <br/>
Crispy tofu cubes stir-fried with colorful vegetables in a sesame soy glaze, served with brown rice.
<br/><br/>
<strong>DESSERTS</strong><br/>
<strong>Matcha Green Tea Cheesecake</strong> <br/>
Creamy matcha-flavored cheesecake on a chocolate almond crust.
<br/>
<strong>Mango Coconut Panna Cotta</strong> <br/>
Smooth and velvety coconut panna cotta topped with fresh mango compote.
<br/>
<strong>Dark Chocolate Mousse</strong> <br/>
Rich and indulgent dark chocolate mousse topped with a dollop of whipped cream.
<br/><br/>
<strong>SIDES</strong><br/>
<strong>Garlic Parmesan Brussels Sprouts</strong> <br/>
Roasted Brussels sprouts tossed with garlic, Parmesan, and a hint of lemon.
<br/>
<strong>Truffle Parmesan Fries</strong> <br/>
Crispy french fries drizzled with truffle oil and sprinkled with grated Parmesan.
<br/>
<strong>Mixed Greens Salad</strong> <br/>
Mixed greens, cherry tomatoes, cucumber, and radishes with a balsamic vinaigrette.
<br/><br/>
<strong>DRINKS</strong><br/>
<strong>Classic Cappuccino</strong> <br/>
Espresso with equal parts of steamed milk and foam.
<br/>
<strong>Blueberry Mint Iced Tea</strong> <br/>
Iced tea infused with blueberries and fresh mint leaves.
<br/>
<strong>Orange Ginger Sparkler</strong> <br/>
Sparkling water with a splash of fresh orange juice and a hint of ginger.`;
  menuDiv.append(menuInfo);
}

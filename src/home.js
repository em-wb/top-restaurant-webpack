export default function home() {
  const hero = document.querySelector(".hero");

  const h1 = document.createElement("h1");
  h1.textContent = "Best food for your taste";
  hero.append(h1);

  const p = document.createElement("p");
  p.textContent =
    "Discover delicious plates in our friendly, neighbourhood cafe";
  hero.append(p);
}

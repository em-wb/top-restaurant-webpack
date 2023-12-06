export default function home(hero) {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("heroChild");
  homeDiv.classList.add("homeDiv");

  hero.append(homeDiv);
  const h1 = document.createElement("h1");
  h1.textContent = "Best food for your taste";
  homeDiv.append(h1);

  const p = document.createElement("p");
  p.textContent =
    "Discover delicious plates in our friendly, neighbourhood cafe";
  homeDiv.append(p);
}

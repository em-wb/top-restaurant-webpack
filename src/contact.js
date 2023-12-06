export default function contact(hero) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contactDiv");
  contactDiv.classList.add("heroChild");
  hero.append(contactDiv);

  const contactH1 = document.createElement("h1");
  contactH1.textContent = "Contact";
  contactDiv.append(contactH1);

  const iconDiv = document.createElement("div");
  iconDiv.classList.add("iconDiv");
  contactDiv.append(iconDiv);

  const iconClasses = ["fa-facebook", "fa-instagram", "fa-whatsapp"];
  iconClasses.forEach((iconClass) => {
    const icon = document.createElement("i");
    icon.classList.add("fa-brands");
    icon.classList.add(iconClass);
    iconDiv.append(icon);
  });

  const address = document.createElement("p");
  address.innerHTML = `<strong>Bertie's Bistro</strong><br/>
   245 Carrot Lane <br/> London <br/><br/><strong>Open</strong><br/> 12.00-22.30 <br/>Tues-Sun`;
  contactDiv.append(address);
}

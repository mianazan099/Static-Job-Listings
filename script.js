const template = document.querySelector("template");
const parent = document.querySelector(".parent");

data.forEach((data) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".logo img").src = data.logo;
  clone.querySelector(".company").innerText = data.company;
  if (!data.new) clone.querySelector(".new").remove();
  if (!data.featured) clone.querySelector(".featured").remove();
  clone.querySelector(".position").innerText = data.position;
  clone.querySelector(".postedAt").innerText = data.postedAt;
  clone.querySelector(".contract").innerText = data.contract;
  clone.querySelector(".location").innerText = data.location;
  let tabletList = [];
  tabletList.push(data.role);
  tabletList.push(data.level);
  tabletList = [...tabletList, ...data.languages, ...data.tools];
  console.clear();
  tabletList.forEach((tablet) => {
    let newtablet = clone.querySelector(".tablet").cloneNode(true);
    newtablet.innerText = tablet;
    clone.querySelector(".tablet-container").appendChild(newtablet);
  });
  clone.querySelector(".tablet:first-of-type").remove();
  parent.appendChild(clone);
  if (data.featured) {
    document
      .querySelectorAll(".card")
      .forEach((card) => card.classList.add("right-line"));
  }
});

const tabletList = document.querySelectorAll(".tablet");

tabletList.forEach((tablet) => {
  tablet.addEventListener("click", function (e) {
    console.log(tablet.textContent);
  });
});

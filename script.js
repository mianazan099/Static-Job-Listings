const template = document.querySelector("template");
const parent = document.querySelector(".parent");

function filterData(filterList) {
  let newData = data.filter((item) => {
    let doReturn = true;
    let num = 0;
    while (doReturn && num < (filterList.length || 1)) {
      doReturn = item.tablets.includes(filterList[num]);
      num++;
    }
    return doReturn;
  });
  if (filterList.length === 0) {
    render(data);
  } else {
    render(newData);
  }
}
function render(data) {
  const cardList = document.querySelectorAll(".card");
  cardList.forEach((card) => card.remove());
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
    // console.clear();
    data.tablets.forEach((tablet) => {
      let newTablet = clone.querySelector(".tablet").cloneNode(true);
      newTablet.innerText = tablet;
      clone.querySelector(".tablet-container").appendChild(newTablet);
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
    tablet.addEventListener("click", function () {
      if (!filterList.includes(tablet.textContent))
        filterList.push(tablet.textContent);
      pushNow();
      filterData(filterList);
    });
  });
}

render(data);

const tabletList = document.querySelectorAll(".tablet");
const filterList = [];
const tablets = document.querySelector(".tablets");

tabletList.forEach((tablet) => {
  tablet.addEventListener("click", function () {
    if (!filterList.includes(tablet.textContent))
      filterList.push(tablet.textContent);
    pushNow();
    filterData(filterList);
  });
});

function pushNow() {
  tablets.innerHTML = "";
  filterList.forEach((item) => {
    tablets.innerHTML += `<div>${item}</div>`;
  });
  const tabletDiv = document.querySelectorAll(".tablets div");
  tabletDiv.forEach((tablet) => {
    tablet.addEventListener("click", () => {
      tablet.remove();
      const index = filterList.indexOf(tablet.textContent);
      console.log("no");
      if (index > -1) {
        filterList.splice(index, 1);
        console.log("done");
      }
      console.log(filterList);
      filterData(filterList);
    });
  });
}

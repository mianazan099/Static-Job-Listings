"use strict";
const template = document.querySelector("template");
const parent = document.querySelector(".parent");
const searchTablets = document.querySelector(".search-tablets");
const clearBtn = document.querySelector(".clear");
const tabletList = document.querySelectorAll(".tablet");
const searchList = [];

function removeCards() {
  const cardList = document.querySelectorAll(".card");
  cardList.forEach((card) => card.remove());
}

function createCards(data) {
  const cardsArray = [];
  data.forEach((data) => {
    const newCard = template.content.cloneNode(true);
    newCard.querySelector(".logo img").src = data.logo;
    newCard.querySelector(".company").textContent = data.company;
    newCard.querySelector(".position").textContent = data.position;
    newCard.querySelector(".postedAt").textContent = data.postedAt;
    newCard.querySelector(".contract").textContent = data.contract;
    newCard.querySelector(".location").textContent = data.location;
    if (!data.featured) {
      newCard.querySelector(".featured").remove();
      newCard.querySelector(".card").classList.remove("right-line");
    }
    if (!data.new) newCard.querySelector(".new").remove();
    data.tablets.forEach((tablet) => {
      let newTablet = newCard.querySelector(".tablet").cloneNode(true);
      newTablet.textContent = tablet;
      newCard.querySelector(".tablet-container").appendChild(newTablet);
    });
    newCard.querySelector(".tablet:first-of-type").remove();
    cardsArray.push(newCard);
  });
  return cardsArray;
}

function filterData(searchList) {
  let newData = data.filter((item) => {
    let doReturn = true;
    let num = 0;
    while (doReturn && num < searchList.length) {
      doReturn = item.tablets.includes(searchList[num]);
      num++;
    }
    return doReturn;
  });
  renderCards(newData);
}

function addSearchTabletListener() {
  const tabletDiv = document.querySelectorAll(".search-tablets div");
  tabletDiv.forEach((tablet) => {
    tablet.addEventListener("click", () => {
      tablet.remove();
      const index = searchList.indexOf(tablet.textContent);
      if (index > -1) {
        searchList.splice(index, 1);
      }
      filterData(searchList);
      if (searchList.length === 0) {
        parent.classList.remove("show-search");
      }
    });
  });
}

function pushNow() {
  const searchTabletsList = createSearchTablets();
  searchTablets.innerHTML = "";
  searchTabletsList.forEach((item) => {
    searchTablets.innerHTML += item;
    parent.classList.add("show-search");
  });
  addSearchTabletListener();
}

function addTabletListener() {
  const tabletList = document.querySelectorAll(".tablet");
  tabletList.forEach((tablet) => {
    tablet.addEventListener("click", function () {
      if (!searchList.includes(tablet.textContent))
        searchList.push(tablet.textContent);
      pushNow();
      filterData(searchList);
    });
  });
}

function createSearchTablets() {
  const searchTablets = [];
  searchList.forEach((item) => {
    searchTablets.push(`<div>${item}</div>`);
  });
  return searchTablets;
}

function clear() {
  const tabletDiv = document.querySelectorAll(".search-tablets div");
  tabletDiv.forEach((tablet) => {
    tablet.remove();
    searchList.length = 0;
    renderCards(data);
    parent.classList.remove("show-search");
  });
}

function renderCards(data) {
  removeCards();
  let cardsArray = createCards(data);
  cardsArray.forEach((card) => {
    parent.appendChild(card);
  });
  addTabletListener();
  clearBtn.addEventListener("click", clear);
}

renderCards(data);

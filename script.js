const template = document.querySelector("template");
const parent = document.querySelector(".parent");

data.forEach((data) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector(".logo").src = data.logo;
  clone.querySelector(".company").innerText = data.company;
  if (!data.new) clone.querySelector(".new").remove();
  if (!data.featured) clone.querySelector(".featured").remove();
  clone.querySelector(".position").innerText = data.position;
  clone.querySelector(".postedAt").innerText = data.postedAt;
  clone.querySelector(".contract").innerText = data.contract;
  clone.querySelector(".location").innerText = data.location;
  let tagList = [];
  tagList.push(data.role);
  tagList.push(data.level);
  tagList = [...tagList, ...data.languages, ...data.tools];
  console.clear();
  tagList.forEach((tag) => {
    let newTag = clone.querySelector(".tag").cloneNode(true);
    newTag.innerText = tag;
    clone.querySelector(".tag-container").appendChild(newTag);
  });
  clone.querySelector(".tag:first-of-type").remove();
  parent.appendChild(clone);
  if (data.featured) {
    document
      .querySelectorAll(".card")
      .forEach((card) => card.classList.add("right-line"));
  }
});

const tagList = document.querySelectorAll(".tag");

tagList.forEach((tag) => {
  tag.addEventListener("click", function (e) {
    console.log(tag.textContent);
  });
});

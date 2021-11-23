//#region btn-group-vertical
const btnGroupVertical = document.querySelector(".btn-group-vertical");

btnGroupVertical.style.display = "flex";
btnGroupVertical.style.flexDirection = "row";
btnGroupVertical.style.justifyContent = "space-between";
btnGroupVertical.style.width = "68%";

const btnSecondaryArray = document.querySelectorAll(".btn, .btn-secondary");

btnSecondaryArray[0].style.marginTop = "-1px";

btnSecondaryArray.forEach((button) => {
  button.style.borderRadius = "8px";
  button.style.width = "auto";
  button.style.marginRight = "7px";
});

btnSecondaryArray[btnSecondaryArray.length - 1].style.marginRight = "0";
//#endregion btn-group-vertical

//#region jumbotron
const jumbotron = document.querySelector(".jumbotron");

jumbotron.style.display = "flex";
jumbotron.style.flexDirection = "column";
jumbotron.style.alignItems = "flex-end";
jumbotron.style.backgroundColor = "var(--gray)";
if (jumbotron.hasChildNodes()) {
  const jumbotronChildren = jumbotron.childNodes;

  jumbotronChildren.forEach((child) => {
    if (child.style === undefined) {
      return;
    }

    child.style.color = "var(--white)";
    child.style.textAlign = "end";
  });
}

const my4 = document.querySelector("hr.my-4");

my4.style.width = "100%";

const btnLearnMore = document.querySelector("a.btn, .btn-primary, .btn-lg");

btnLearnMore.style.backgroundColor = "var(--green)";
btnLearnMore.style.borderColor = "var(--green)";
//#endregion jumbotron

//#region cards
const cards = document.querySelector("#cards");
const animalsCard = document.querySelector("#animals-card");
const techCard = document.querySelector("#tech-card");
const peopleCard = document.querySelector("#people-card");
const natureCard = document.querySelector("#nature-card");
const buttonGoSomewhere = document.querySelector("#button-go-somewhere");

cards.removeChild(animalsCard);
cards.removeChild(techCard);
cards.removeChild(peopleCard);
cards.removeChild(natureCard);

cards.appendChild(natureCard);
cards.appendChild(animalsCard);
cards.appendChild(peopleCard);
cards.appendChild(techCard);

buttonGoSomewhere.style.backgroundColor = "var(--green)";
buttonGoSomewhere.style.borderColor = "var(--green)";

//#endregion cards

//#region  list-group
const listGroup = document.querySelector(".list-group");

const createLi4 = document.createElement("li");
const createTextLi4 = document.createTextNode("Quarto item");
createLi4.classList.add("active");
createLi4.classList.add("list-group-item");
createLi4.appendChild(createTextLi4);

const createLi5 = document.createElement("li");
const createTextLi5 = document.createTextNode("Quinto item");
createLi5.classList.add("list-group-item");
createLi5.appendChild(createTextLi5);

listGroup.appendChild(createLi4);
listGroup.appendChild(createLi5);

const listGroupItemActive = listGroup.firstElementChild;

listGroupItemActive.classList.remove("active");
//#endregion list-group

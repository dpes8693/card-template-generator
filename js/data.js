const template = {
  img: [],
  keyword: [],
  tag: [
    "attack",
    "Skill",
    "Sevret",
    "Power",
    "Banish",
    "Ethereal",
    "Innate",
    "Retain",
  ],
  keyword: [],
  part: ["Eyes", "Mouth", "Ears", "Horn", "Back", "Tail"],
  class: [
    "Beast",
    "Bug",
    "Bird",
    "Plant",
    "Aquatic",
    "Reptile",
    "Mech",
    "Dawn",
    "Dusk",
  ],
};
const baseUrl = "./img/en/cards";
const format = ".png";

const in_cardClass = [
  "Beast",
  "Aquatic",
  "Plant",
  "Bird",
  "Bug",
  "Reptile",
  "Mech",
  "Dawn",
  "Dusk",
];

const in_headers = [
  {
    text: "Card Name",
    align: "start",
    sortable: false,
    value: "name",
    filterable: true,
    width: "12%",
  },
  { text: "Cost", value: "cost", filterable: true, width: "10%" },
  { text: "ATK", value: "attack", filterable: false, width: "10%" },
  { text: "Shield", value: "shield", filterable: false, width: "11%" },
  { text: "Heal", value: "heal", filterable: false, width: "10%" },
  // { text: "Card Tag", value: "tag", filterable: true },
  { text: "", value: "part", filterable: true, sortable: false ,width: "1"}, //Axie Part
  { text: "Effect", value: "cardEffect", filterable: true, width: "28%" },
  { text: "Class", value: "class", filterable: true, width: "10%" },
];

iterator(Aquatic);
iterator(Beast);
iterator(Bird);
iterator(Bug);
iterator(Plant);
iterator(Reptile);

let in_cards = [...Beast, ...Aquatic, ...Plant, ...Bird, ...Bug, ...Reptile];

function iterator(arr) {
  arr.forEach((el) => {
    if(el.img[0] === 'x'){
      el.img = `${baseUrl}/no card${format}`;
    }else{
      el.img = `${baseUrl}/${el.class.toLowerCase()}/${el.name.toLowerCase()}${format}`;
    }
    el.keyword = "-";
  });
}

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
    width: "20%",
  },
  { text: "Cost", value: "cost", filterable: true },
  { text: "Attack", value: "attack", filterable: false },
  { text: "Shield", value: "shield", filterable: false },
  { text: "Heal", value: "heal", filterable: false },
  // { text: "Card Tag", value: "tag", filterable: true },
  { text: "", value: "part", filterable: true, sortable: false }, //Axie Part
  //   { text: "Card Effect", value: "cardEffect", filterable: false },
  { text: "Card Class", value: "class", filterable: true },
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
    el.img = `${baseUrl}/${el.class.toLowerCase()}/${el.name.toLowerCase()}${format}`;
    el.keyword = "-";
  });
}

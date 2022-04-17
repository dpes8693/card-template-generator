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
    sortable: true,
    value: "name",
    filterable: true,
    width: "12%",
  },
  {
    text: "Effect",
    value: "cardEffect",
    filterable: true,
    width: "35%",
    align: "",
  },
  { text: "Cost", value: "cost", filterable: true, width: "10%", align: "" },
  {
    text: "Attack",
    value: "attack",
    filterable: false,
    width: "11%",
    align: "",
  },
  {
    text: "Shield",
    value: "shield",
    filterable: false,
    width: "11%",
    align: "",
  },
  { text: "Heal", value: "heal", filterable: false, width: "10%", align: "" },
  // { text: "Card Tag", value: "tag", filterable: true },
  {
    text: "",
    value: "part",
    filterable: true,
    sortable: true,
    align: "d-none",
  }, //Axie Part
  { text: "Class", value: "class", filterable: true, width: "10%", align: "" },
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
    if (el.img[0] === "x") {
      el.img = `${baseUrl}/no card${format}`;
    } else {
      el.img = `${baseUrl}/${el.class.toLowerCase()}/${el.name.toLowerCase()}${format}`;
    }
    el.id = el.name + el.id;
  });
}
